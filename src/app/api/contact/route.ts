import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_EMAIL = "triplethreadagency@gmail.com";
const ALLOWED_INTERESTS = new Set([
  "Creative Design",
  "Digital Technology",
  "Music & Sound",
  "All three / something else",
]);

type Enquiry = {
  name: string;
  email: string;
  interest: string;
  budget?: string;
  timeline?: string;
  message: string;
  company?: string;
};

type RateLimitEntry = { count: number; resetAt: number };
const submissions = new Map<string, RateLimitEntry>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function json(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    return entities[character];
  });
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function isRateLimited(key: string) {
  const now = Date.now();
  for (const [entryKey, entry] of submissions) {
    if (entry.resetAt <= now) submissions.delete(entryKey);
  }
  const current = submissions.get(key);
  if (!current || current.resetAt <= now) {
    submissions.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_SUBMISSIONS) return true;
  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return json("This request could not be verified. Please refresh and try again.", 403);
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientKey)) {
    return json("Too many enquiries have been sent. Please try again in a few minutes.", 429);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    console.error("Contact form is missing RESEND_API_KEY or RESEND_FROM_EMAIL.");
    return json("Our enquiry service is temporarily unavailable. Please email triplethreadagency@gmail.com.", 503);
  }

  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return json("Please check the form and try again.", 400);
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ message: "Your enquiry has been received." });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest : "";
  const budget = typeof body.budget === "string" ? body.budget : "";
  const timeline = typeof body.timeline === "string" ? body.timeline : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    name.length < 2 || name.length > 100 || !isValidEmail(email) ||
    !ALLOWED_INTERESTS.has(interest) || message.length < 10 || message.length > 5000 ||
    budget.length > 80 || timeline.length > 80
  ) {
    return json("Please provide a valid name, email, service, and project message.", 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeInterest = escapeHtml(interest);
  const safeBudget = escapeHtml(budget || "Not specified");
  const safeTimeline = escapeHtml(timeline || "Not specified");
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  const emailPayload = {
    from: fromEmail,
    to: [process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL],
    reply_to: email,
    subject: `New website enquiry: ${interest}`,
    text: [
      "A new enquiry has been submitted through the Triple Thread Agency website.",
      "", `Name: ${name}`, `Email: ${email}`, `Service: ${interest}`,
      `Estimated budget: ${budget || "Not specified"}`,
      `Preferred timeline: ${timeline || "Not specified"}`,
      "", "Project details:", message,
    ].join("\n"),
    html: `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Service:</strong> ${safeInterest}</p>
      <p><strong>Estimated budget:</strong> ${safeBudget}</p>
      <p><strong>Preferred timeline:</strong> ${safeTimeline}</p>
      <h3>Project details</h3>
      <p>${safeMessage}</p>
    `,
  };

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(emailPayload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error("Resend rejected contact enquiry:", response.status, providerError);
      return json("We couldn't send your enquiry just now. Please try again or email us directly.", 502);
    }

    return NextResponse.json({
      message: "Thanks for reaching out. Your enquiry has been sent successfully. We'll be in touch soon.",
    });
  } catch (error) {
    console.error("Contact enquiry delivery failed:", error);
    return json("We couldn't send your enquiry just now. Please try again or email us directly.", 502);
  }
}
