"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Logo, EyeIcon, EyeOffIcon } from "@/components/Icons";
import { useSignUpMutation } from "@/store/api/authApi";

const VALID_ROLES = ["user", "beautician", "manager"] as const;
const ROLE_LABEL: Record<string, string> = {
  user: "User",
  beautician: "Beautician",
  manager: "Manager",
};

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") || "user";
  const role = VALID_ROLES.includes(roleParam as (typeof VALID_ROLES)[number])
    ? (roleParam as (typeof VALID_ROLES)[number])
    : "user";
  const roleLabel = ROLE_LABEL[role] ?? "User";

  const [signUp, { isLoading, error }] = useSignUpMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToTerms) return;
    try {
      await signUp({
        role,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        agreeToTerms,
      }).unwrap();
      toast.success("Account created successfully");
      router.push("/");
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "data" in err && typeof (err as { data?: { message?: string } }).data?.message === "string"
          ? (err as { data: { message: string } }).data.message
          : "Sign up failed";
      toast.error(msg);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const errorMessage =
    error && "data" in error && typeof (error as { data?: { message?: string } }).data?.message === "string"
      ? (error as { data: { message: string } }).data.message
      : error && "data" in error && typeof (error as { data?: unknown }).data === "object"
        ? (error as { data?: { message?: string } }).data?.message ?? "Sign up failed"
        : "Sign up failed";

  return (
    <div className="w-full">
      {/* Logo and Brand */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Logo width={32} height={32} fill="currentColor" className="text-primary" />
        <span className="text-xl font-semibold text-primary">Beautiworx</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-text-primary text-center mb-2">
        Create New Account
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-2">
        Please enter your details.
      </p>
      <p className="text-sm text-primary font-medium text-center mb-6">
        Signing up as {roleLabel}
      </p>

      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name & Last Name */}
        <div className="lg:grid grid-cols-2 gap-4 lg:space-y-0 space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Enter your First name"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Enter your Last name"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 disabled:opacity-60"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary placeholder:text-text-primary/40 disabled:opacity-60"
          />
        </div>

        {/* Password & Confirm Password */}
        <div className="lg:grid grid-cols-2 gap-4 lg:space-y-0 space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                placeholder="Confirm your password"
                required
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
        </div>

        {/* Terms & Conditions */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              disabled={isLoading}
              className="w-4 h-4 rounded border-black/20 text-primary focus:ring-primary"
            />
            <span className="text-sm text-text-primary">
              I agree to the{" "}
              <Link
                href="/terms-of-use"
                className="font-medium text-primary hover:underline"
              >
                Terms & Conditions
              </Link>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !agreeToTerms}
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating account…" : "Create account"}
        </button>

        <p className="text-center text-sm text-text-primary/70 mt-4">
          Already have an account?{" "}
          <Link href={`/auth/login?role=${role}`} className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <SignupForm />
    </Suspense>
  );
}
