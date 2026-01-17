"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { Logo, KeyIcon } from "@/components/Icons";

export default function VerifyCodePage() {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...code];
    
    for (let i = 0; i < 6; i++) {
      if (pastedData[i]) {
        newCode[i] = pastedData[i];
      }
    }
    
    setCode(newCode);
    
    // Focus the last filled input or the first empty one
    const lastFilledIndex = newCode.findIndex((val, idx) => !val && idx > 0) - 1;
    const focusIndex = lastFilledIndex >= 0 ? lastFilledIndex : newCode.filter(Boolean).length - 1;
    if (focusIndex >= 0 && focusIndex < 6) {
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length === 6) {
      console.log("Verification code:", verificationCode);
    }
  };

  const handleResend = () => {
    console.log("Resend code");
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
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
        Verification Code
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        Please enter the code sent to{" "}
        <span className="text-primary font-medium">email@gmail.com</span>
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Code Input Fields */}
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el): void => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg font-semibold border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-text-primary"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Verify
        </button>

        {/* Resend Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleResend}
            className="text-sm text-text-primary/70 hover:text-primary transition-colors"
          >
            Resend
          </button>
        </div>
      </form>
    </div>
  );
}
