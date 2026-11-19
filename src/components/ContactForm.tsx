"use client";

import { useState, type FormEvent } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";
type ApiResponse = { message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      interest: String(data.get("interest") ?? ""),
      budget: String(data.get("budget") ?? ""),
      timeline: String(data.get("timeline") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? ""),
    };

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(result.message || "We couldn't send your enquiry. Please try again.");
      }

      form.reset();
      setStatus("success");
      setFeedback(result.message || "Your enquiry has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__heading">
        <span className="contact-form__step">START A PROJECT</span>
        <h3>Tell us what you have in mind.</h3>
        <p>The more context you share, the more useful our first response can be.</p>
      </div>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" minLength={2} maxLength={100} required />
        </div>
        <div className="field">
          <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" maxLength={254} required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">Which service are you interested in? <span aria-hidden="true">*</span></label>
        <select id="interest" name="interest" defaultValue="" required>
          <option value="" disabled>Select a discipline</option>
          <option value="Creative Design">Creative Design — branding &amp; graphics</option>
          <option value="Digital Technology">Digital Technology — websites &amp; digital products</option>
          <option value="Music & Sound">Music &amp; Sound — production &amp; audio</option>
          <option value="All three / something else">A combination / not sure yet</option>
        </select>
      </div>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="budget">Estimated project budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Choose a budget (optional)</option>
            <option value="Below GH₵1,000">Below GH₵1,000</option>
            <option value="GH₵1,000–GH₵3,000">GH₵1,000–GH₵3,000</option>
            <option value="GH₵3,000–GH₵6,000">GH₵3,000–GH₵6,000</option>
            <option value="GH₵6,000–GH₵10,000">GH₵6,000–GH₵10,000</option>
            <option value="Above GH₵10,000">Above GH₵10,000</option>
            <option value="Need guidance">I'd like help estimating this</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="timeline">When would you like to begin?</label>
          <select id="timeline" name="timeline" defaultValue="">
            <option value="">Choose a timeframe (optional)</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="Within 2–4 weeks">Within 2–4 weeks</option>
            <option value="Within 1–3 months">Within 1–3 months</option>
            <option value="Flexible / planning ahead">Flexible / planning ahead</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Project details <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows={6} minLength={10} maxLength={5000} placeholder="What are you looking to create? Tell us about your goals, audience, key requirements, or any references you have..." required />
        <span className="field__hint">At least 10 characters. Please don't include passwords or sensitive information.</span>
      </div>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="company">Leave this field empty</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="btn btn--primary contact-form__submit" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
        {status === "sending" ? "Sending your enquiry…" : "Send project enquiry"}
        {status !== "sending" && <span aria-hidden="true">↗</span>}
      </button>

      <p className={`contact-form__feedback${status === "success" ? " is-success" : ""}`} role="status" aria-live="polite">
        {feedback}
      </p>

      <p className="contact-form__note">
        Prefer email? Write to <a href="mailto:triplethreadagency@gmail.com">triplethreadagency@gmail.com</a>. Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
