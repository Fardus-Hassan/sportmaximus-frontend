import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";

// Zod validation schema with best practices
const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, "Old password is required")
      .min(6, "Old password must be at least 6 characters")
      .max(128, "Password must not exceed 128 characters"),
    newPassword: z
      .string()
      .min(1, "New password is required")
      .min(8, "New password must be at least 8 characters")
      .max(128, "Password must not exceed 128 characters")
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter",
      )
      .regex(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter",
      )
      .regex(/^(?=.*\d)/, "Password must contain at least one number")
      .regex(
        /^(?=.*[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/])/,
        "Password must contain at least one special character (@$!%*?&#, etc.)",
      )
      .refine((password) => !/\s/.test(password), {
        message: "Password must not contain spaces",
      })
      .refine(
        (password) => {
          // Check for common weak passwords
          const weakPasswords = [
            "password",
            "password123",
            "12345678",
            "qwerty123",
            "abc12345",
            "password1",
            "admin123",
            "welcome123",
          ];
          return !weakPasswords.includes(password.toLowerCase());
        },
        {
          message:
            "This password is too common. Please choose a stronger password",
        },
      ),
  })
  .refine((data) => data.newPassword !== data.oldPassword, {
    message: "New password must be different from old password",
    path: ["newPassword"],
  })
  .refine(
    (data) => {
      // Ensure new password doesn't contain old password
      if (data.oldPassword.length >= 4 && data.newPassword.length >= 4) {
        return !data.newPassword
          .toLowerCase()
          .includes(data.oldPassword.toLowerCase());
      }
      return true;
    },
    {
      message: "New password must not contain parts of your old password",
      path: ["newPassword"],
    },
  );

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

// Password strength calculator
const calculatePasswordStrength = (password: string): number => {
  if (!password) return 0;

  let strength = 0;

  // Length contribution
  if (password.length >= 8) strength += 25;
  if (password.length >= 12) strength += 25;

  // Character variety
  if (/[a-z]/.test(password)) strength += 15;
  if (/[A-Z]/.test(password)) strength += 15;
  if (/\d/.test(password)) strength += 10;
  if (/[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/]/.test(password)) strength += 10;

  return Math.min(strength, 100);
};

// Password strength indicator component
const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const strength = calculatePasswordStrength(password);

  const getStrengthLabel = () => {
    if (strength === 0) return "";
    if (strength < 40) return "Weak";
    if (strength < 70) return "Fair";
    if (strength < 90) return "Good";
    return "Strong";
  };

  const getStrengthColor = () => {
    if (strength === 0) return "";
    if (strength < 40) return "bg-red-500";
    if (strength < 70) return "bg-yellow-500";
    if (strength < 90) return "bg-blue-500";
    return "bg-green-500";
  };

  if (!password) return null;

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">Password strength:</span>
        <span
          className={`text-xs font-medium ${
            strength < 40
              ? "text-red-600"
              : strength < 70
                ? "text-yellow-600"
                : strength < 90
                  ? "text-blue-600"
                  : "text-green-600"
          }`}>
          {getStrengthLabel()}
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${getStrengthColor()}`}
          style={{ width: `${strength}%` }}
        />
      </div>
    </div>
  );
};

export default function ChangePasswordFormCard() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange", // Real-time validation for better UX
    reValidateMode: "onChange",
  });

  // Watch new password for strength indicator
  const newPassword = watch("newPassword", "");

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Password change data:", {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });

      // Handle successful password change
      alert("Password changed successfully!");

      // Clear the form after successful password change
      reset();
    } catch (error) {
      console.error("Error changing password:", error);

      // Show user-friendly error message
      if (error instanceof Error) {
        alert(`Failed to change password: ${error.message}`);
      } else {
        alert("Failed to change password. Please try again.");
      }
    }
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-semibold">
          Change Password
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Old Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="oldPassword"
                className="text-sm sm:text-base font-normal">
                Old Password
              </Label>
              <div className="relative">
                <Input
                  id="oldPassword"
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Enter your current password"
                  autoComplete="current-password"
                  className="h-10 sm:h-12 rounded-lg border-gray-300 pr-10 placeholder:text-gray-400 text-sm sm:text-base"
                  {...register("oldPassword")}
                  aria-invalid={errors.oldPassword ? "true" : "false"}
                  aria-describedby={
                    errors.oldPassword ? "oldPassword-error" : undefined
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={
                    showOldPassword ? "Hide password" : "Show password"
                  }>
                  {showOldPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>
              {errors.oldPassword && (
                <p
                  id="oldPassword-error"
                  className="text-xs sm:text-sm text-red-600 mt-1"
                  role="alert">
                  {errors.oldPassword.message}
                </p>
              )}
            </div>

            {/* New Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="newPassword"
                className="text-sm sm:text-base font-normal">
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter a strong password"
                  autoComplete="new-password"
                  className="h-10 sm:h-12 rounded-lg border-gray-300 pr-10 placeholder:text-gray-400 text-sm sm:text-base"
                  {...register("newPassword")}
                  aria-invalid={errors.newPassword ? "true" : "false"}
                  aria-describedby={
                    errors.newPassword
                      ? "newPassword-error newPassword-requirements"
                      : "newPassword-requirements"
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={
                    showNewPassword ? "Hide password" : "Show password"
                  }>
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p
                  id="newPassword-error"
                  className="text-xs sm:text-sm text-red-600 mt-1"
                  role="alert">
                  {errors.newPassword.message}
                </p>
              )}
              {newPassword && !errors.newPassword && (
                <PasswordStrengthIndicator password={newPassword} />
              )}
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="h-10 sm:h-12 px-6 sm:px-8 rounded-lg border-gray-300 hover:bg-gray-50 font-medium text-base sm:text-lg w-full sm:w-auto">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-10 sm:h-12 px-6 sm:px-8 rounded-lg bg-primary hover:bg-[#ce2348] text-white font-medium text-base sm:text-lg w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
