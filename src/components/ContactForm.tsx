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
      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            minLength={2}
            maxLength={100}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            maxLength={254}
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">What do you need?</label>
        <select id="interest" name="interest" defaultValue="" required>
          <option value="" disabled>
            Select a discipline
          </option>
          <option value="Creative Design">Creative Design</option>
          <option value="Digital Technology">Digital Technology</option>
          <option value="Music & Sound">Music &amp; Sound</option>
          <option value="All three / something else">
            All three / something else
          </option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about the project</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          minLength={10}
          maxLength={5000}
          placeholder="A few sentences about what you're building..."
          required
        />
      </div>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="company">Leave this field empty</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        className="btn btn--primary contact-form__submit"
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        {status === "sending" ? "Sending enquiry…" : "Send enquiry"}
        {status !== "sending" && <span aria-hidden="true">↗</span>}
      </button>

      <p
        className={`contact-form__feedback${status === "success" ? " is-success" : ""}`}
        role="status"
        aria-live="polite"
      >
        {feedback}
      </p>

      <p className="contact-form__note">
        Your details are used only to respond to this project enquiry. You can
        also reach us at{" "}
        <a href="mailto:triplethreadagency@gmail.com">
          triplethreadagency@gmail.com
        </a>
        .
      </p>
    </form>
  );
}
