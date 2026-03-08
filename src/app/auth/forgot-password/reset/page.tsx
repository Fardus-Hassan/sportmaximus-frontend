"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Logo, KeyIcon, EyeIcon, EyeOffIcon } from "@/components/Icons";
import { useResetPasswordMutation } from "@/store/api/authApi";

const RESET_TOKEN_KEY = "forgot_password_reset_token";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [resetToken, setResetToken] = useState<string | null>(null);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem(RESET_TOKEN_KEY);
      setResetToken(token);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetToken) {
      toast.error("Session expired. Please start from forgot password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    try {
      await resetPassword({
        resetToken,
        newPassword,
        confirmPassword,
      }).unwrap();
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(RESET_TOKEN_KEY);
      }
      toast.success("Password reset successfully. You can log in now.");
      router.push("/auth/login");
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "data" in err && typeof (err as { data?: { message?: string } }).data?.message === "string"
          ? (err as { data: { message: string } }).data.message
          : "Failed to reset password";
      toast.error(msg);
    }
  };

  if (resetToken === null) {
    return (
      <div className="w-full flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!resetToken) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Logo width={32} height={32} fill="currentColor" className="text-primary" />
          <span className="text-xl font-semibold text-primary">Beautiworx</span>
        </div>
        <p className="text-sm text-text-primary/70 text-center mb-6">
          Link expired or invalid. Please request a new code from{" "}
          <Link href="/auth/forgot-password" className="font-medium text-primary hover:underline">
            Forgot password
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Logo width={32} height={32} fill="currentColor" className="text-primary" />
        <span className="text-xl font-semibold text-primary">Beautiworx</span>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
          <KeyIcon width={28} height={28} stroke="white" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-text-primary text-center mb-2">
        Set new password
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        Your new password must be different from previously used passwords.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-text-primary mb-2">
            New Password (min. 8 characters)
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
              disabled={isLoading}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 pr-12 disabled:opacity-60"
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
              disabled={isLoading}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 pr-12 disabled:opacity-60"
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

        <button
          type="submit"
          disabled={isLoading || newPassword !== confirmPassword}
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Resetting…" : "Reset password"}
        </button>
      </form>

      <p className="text-center text-sm text-text-primary/70 mt-6">
        <Link href="/auth/login" className="font-medium text-primary hover:underline">
          Back to log in
        </Link>
      </p>
    </div>
  );
}
