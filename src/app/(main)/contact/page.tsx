"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: "name" | "email" | "message", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted", form);
  };

  return (
    <Container className="py-10 sm:py-16 mt-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-black/5 px-5 py-8 sm:px-10 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M7 8h10M7 12h6" />
                </svg>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary">Contact Us</h1>
            </div>

            <p className="text-sm sm:text-base text-text-primary/70 leading-relaxed max-w-md mb-8">
              Simple plans designed to match how deeply you want to explore your heritage.
            </p>

            <div className="space-y-4 text-sm text-text-primary/80">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span>www.email1234@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  4074 Ebert Summit Suite 375
                  <br />
                  Lake New Castle.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 9.81 19.79 19.79 0 0 1 1.08 1.18 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.1 9.91a16 16 0 0 0 7 7l2.27-1.2a2 2 0 0 1 2.11.19 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+441 238 785 6780</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-black/3 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-inner"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Write here"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Write here"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Write here"
                  rows={4}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

