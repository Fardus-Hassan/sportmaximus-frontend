import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Zod validation schema with best practices
const editProfileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .regex(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please enter a valid name (letters, spaces, hyphens, apostrophes, and periods only)",
    )
    .transform((val) => val.replace(/\s+/g, " ")), // Remove multiple spaces
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must not exceed 254 characters")
    .toLowerCase()
    .regex(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
      "Please enter a valid email format",
    ),
  location: z
    .string()
    .trim()
    .min(1, "Location is required")
    .min(2, "Location must be at least 2 characters")
    .max(150, "Location must not exceed 150 characters")
    .regex(
      /^[a-zA-Z0-9\s,.\-']+$/,
      "Location can only contain letters, numbers, spaces, commas, periods, hyphens, and apostrophes",
    )
    .transform((val) => val.replace(/\s+/g, " ")),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Please enter a valid phone number",
    )
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, "");
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      { message: "Phone number must contain 10-15 digits" },
    ),
});

type EditProfileFormData = z.infer<typeof editProfileSchema>;

export default function EditFormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onChange", // Real-time validation for better UX
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      location: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: EditProfileFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Profile update data:", data);

      // Handle successful profile update
      alert("Profile updated successfully!");

      // Optional: Reset form dirty state without clearing values
      // This helps track if user makes new changes after saving
      reset(data);
    } catch (error) {
      console.error("Error updating profile:", error);

      // Show user-friendly error message
      if (error instanceof Error) {
        alert(`Failed to update profile: ${error.message}`);
      } else {
        alert("Failed to update profile. Please try again.");
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
          Edit Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm sm:text-base font-normal">
                Full Name:
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                className="h-10 sm:h-12 rounded-lg border-gray-300 placeholder:text-gray-400 text-sm sm:text-base"
                {...register("fullName")}
                aria-invalid={errors.fullName ? "true" : "false"}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
              />
              {errors.fullName && (
                <p
                  id="fullName-error"
                  className="text-xs sm:text-sm text-red-600 mt-1"
                  role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm sm:text-base font-normal">
                Email:
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                autoComplete="email"
                className="h-10 sm:h-12 rounded-lg border-gray-300 placeholder:text-gray-400 text-sm sm:text-base"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="text-xs sm:text-sm text-red-600 mt-1"
                  role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Location Field */}
            <div className="space-y-2">
              <Label
                htmlFor="location"
                className="text-sm sm:text-base font-normal">
                Location:
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="New York, NY"
                autoComplete="address-level2"
                className="h-10 sm:h-12 rounded-lg border-gray-300 placeholder:text-gray-400 text-sm sm:text-base"
                {...register("location")}
                aria-invalid={errors.location ? "true" : "false"}
                aria-describedby={
                  errors.location ? "location-error" : undefined
                }
              />
              {errors.location && (
                <p
                  id="location-error"
                  className="text-xs sm:text-sm text-red-600 mt-1"
                  role="alert">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="text-sm sm:text-base font-normal">
                Phone Number:
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
                className="h-10 sm:h-12 rounded-lg border-gray-300 placeholder:text-gray-400 text-sm sm:text-base"
                {...register("phoneNumber")}
                aria-invalid={errors.phoneNumber ? "true" : "false"}
                aria-describedby={
                  errors.phoneNumber ? "phoneNumber-error" : undefined
                }
              />
              {errors.phoneNumber && (
                <p
                  id="phoneNumber-error"
                  className="text-xs sm:text-sm text-red-600 mt-1"
                  role="alert">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 pt-2">
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
