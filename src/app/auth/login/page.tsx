"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Logo, EyeIcon, EyeOffIcon } from "@/components/Icons";
import { useLoginMutation } from "@/store/api/authApi";

export default function LoginPage() {
  const router = useRouter();
  const [login, { isLoading, error }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const errorMessage =
    error && "data" in error && typeof (error as { data?: { message?: string } }).data?.message === "string"
      ? (error as { data: { message: string } }).data.message
      : error && "data" in error && typeof (error as { data?: unknown }).data === "object"
        ? (error as { data?: { message?: string } }).data?.message ?? "Login failed"
        : "Login failed";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();
      toast.success("Logged in successfully");
      router.push("/");
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "data" in err && typeof (err as { data?: { message?: string } }).data?.message === "string"
          ? (err as { data: { message: string } }).data.message
          : "Login failed";
      toast.error(msg);
    }
  };

  return (
    <div className="w-full">
      {/* Logo and Brand */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Logo width={32} height={32} fill="currentColor" className="text-primary" />
        <span className="text-xl font-semibold text-primary">Beautiworx</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-text-primary text-center mb-2">
        Log in to your account
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        Welcome back. Please enter your details.
      </p>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 disabled:opacity-60"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
            Password <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 pr-12 disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-primary/60 hover:text-text-primary transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOffIcon width={20} height={20} fill="currentColor" />
              ) : (
                <EyeIcon width={20} height={20} fill="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className="w-4 h-4 rounded border-black/20 text-primary focus:ring-primary disabled:opacity-60"
            />
            <span className="text-sm text-text-primary">Remember me</span>
          </label>
          <Link
            href="/auth/forgot-password"
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot password
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing in…" : "Sign in"}
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-text-primary/70">
          Don&apos;t have an account?{" "}
          <Link href="/auth/choose-role" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
