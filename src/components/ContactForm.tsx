"use client";

import type { FormEvent } from "react";

const CONTACT_EMAIL = "hello@triplethread.agency";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project inquiry — ${interest}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interested in: ${interest}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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
          placeholder="A few sentences about what you're building..."
          required
        />
      </div>

      <button className="btn btn--primary contact-form__submit" type="submit">
        Send inquiry
        <span aria-hidden="true">↗</span>
      </button>

      <p className="contact-form__note">
        Submitting opens your email app with the message ready to send. Nothing
        is stored on this site.
      </p>
    </form>
  );
}
