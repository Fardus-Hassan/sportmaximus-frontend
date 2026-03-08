"use client";

import { useState, useRef, Suspense, KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Logo, KeyIcon } from "@/components/Icons";
import {
  useVerifyForgotPasswordOtpMutation,
  useResendForgotPasswordOtpMutation,
} from "@/store/api/authApi";

const RESET_TOKEN_KEY = "forgot_password_reset_token";

function VerifyOtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const [verifyOtp, { isLoading: isVerifying }] = useVerifyForgotPasswordOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useResendForgotPasswordOtpMutation();

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value.replace(/\D/g, "");
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newCode = [...code];
    for (let i = 0; i < 6; i++) {
      newCode[i] = pastedData[i] ?? "";
    }
    setCode(newCode);
    const nextEmpty = newCode.findIndex((v) => !v);
    const focusIndex = nextEmpty >= 0 ? nextEmpty : 5;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is missing. Please start from forgot password.");
      return;
    }
    const otpCode = code.join("");
    if (otpCode.length !== 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }
    try {
      const result = await verifyOtp({ email, otpCode }).unwrap();
      const token = result?.resetToken;
      if (token) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem(RESET_TOKEN_KEY, token);
        }
        toast.success("Code verified");
        router.push("/auth/forgot-password/reset");
      } else {
        toast.error("Invalid or expired code");
      }
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "data" in err && typeof (err as { data?: { message?: string } }).data?.message === "string"
          ? (err as { data: { message: string } }).data.message
          : "Verification failed";
      toast.error(msg);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email is missing");
      return;
    }
    try {
      await resendOtp({ email }).unwrap();
      toast.success("New code sent to your email");
      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "data" in err && typeof (err as { data?: { message?: string } }).data?.message === "string"
          ? (err as { data: { message: string } }).data.message
          : "Failed to resend code";
      toast.error(msg);
    }
  };

  if (!email) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Logo width={32} height={32} fill="currentColor" className="text-primary" />
          <span className="text-xl font-semibold text-primary">Beautiworx</span>
        </div>
        <p className="text-sm text-text-primary/70 text-center mb-6">
          Missing email. Please start from{" "}
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
        Verification Code
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        Please enter the code sent to{" "}
        <span className="text-primary font-medium">{email}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              disabled={isVerifying}
              className="w-12 h-12 text-center text-lg font-semibold border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary disabled:opacity-60"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isVerifying || code.some((d) => !d)}
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isVerifying ? "Verifying…" : "Verify"}
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="text-sm text-text-primary/70 hover:text-primary transition-colors disabled:opacity-60"
          >
            {isResending ? "Sending…" : "Resend code"}
          </button>
        </div>
      </form>

      <p className="text-center text-sm text-text-primary/70 mt-6">
        <Link href="/auth/login" className="font-medium text-primary hover:underline">
          Back to log in
        </Link>
      </p>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <VerifyOtpForm />
    </Suspense>
  );
}
