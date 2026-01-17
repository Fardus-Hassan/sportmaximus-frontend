"use client";

import { useState } from "react";
import { Logo, KeyIcon } from "@/components/Icons";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  return (
    <div className="w-full">
      {/* Logo and Brand */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Logo width={32} height={32} fill="currentColor" className="text-primary" />
        <span className="text-xl font-semibold text-primary">Beautiworx</span>
      </div>

      {/* Key Icon with Circular Background */}
      <div className="flex justify-center mb-6">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
          <KeyIcon width={28} height={28} stroke="white" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-text-primary text-center mb-2">
        Forgot password?
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        No worries, we&apos;ll send you reset instructions.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40"
          />
        </div>

        {/* Reset Password Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Reset password
        </button>
      </form>
    </div>
  );
}
