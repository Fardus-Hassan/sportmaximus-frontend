"use client";

import { useState } from "react";
import { Logo, KeyIcon, EyeIcon, EyeOffIcon } from "@/components/Icons";

export default function SetPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Password set:", newPassword);
    } else {
      console.log("Passwords do not match");
    }
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
        Set new password
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        Your new password must be different to <br /> previously used passwords.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* New Password Field */}
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-text-primary mb-2">
            New Password (A minimum of 8 characters)
          </label>
          <div className="relative">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              required
              minLength={8}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-primary/60 hover:text-text-primary transition-colors"
              aria-label={showNewPassword ? "Hide password" : "Show password"}
            >
              {showNewPassword ? (
                <EyeOffIcon width={20} height={20} fill="currentColor" />
              ) : (
                <EyeIcon width={20} height={20} fill="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              minLength={8}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-primary/60 hover:text-text-primary transition-colors"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
                <EyeOffIcon width={20} height={20} fill="currentColor" />
              ) : (
                <EyeIcon width={20} height={20} fill="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
