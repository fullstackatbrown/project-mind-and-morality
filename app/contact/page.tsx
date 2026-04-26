"use client";
import { useState } from "react";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          message,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to submit form.");
      }
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center">
      <style jsx>{`
        .orange-text {
          color: #e79121;
        }
        .field {
          border-bottom: 1.5px solid #0f766e;
          padding-bottom: 6px;
          width: 100%;
        }
        input,
        textarea {
          outline: none;
          background: transparent;
          width: 100%;
          color: #0f766e;
        }
        input::placeholder,
        textarea::placeholder {
          color: #5eada8;
        }
      `}</style>
      <section className="max-w-3xl w-full px-8 py-16">
        <h1 className="text-4xl text-teal-600 text-center font-semibold mb-12">
          Contact Us
        </h1>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <div className="field">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                disabled={submitting}
              />
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
                disabled={submitting}
              />
            </div>
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={submitting}
            />
          </div>
          <div className="bg-[#c9eef0] rounded-3xl p-5">
            <textarea
              rows={7}
              placeholder="Message"
              className="resize-none"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              disabled={submitting}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#E79121] text-white px-10 py-3 rounded-full"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send"}
            </button>
          </div>
          {success && (
            <div className="text-green-600 text-right">Thank you for contacting us!</div>
          )}
          {error && (
            <div className="text-red-600 text-right">{error}</div>
          )}
        </form>
      </section>
    </div>
  );
}