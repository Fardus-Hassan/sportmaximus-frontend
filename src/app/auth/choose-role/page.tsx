"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Icons";

type Role = "user" | "beautician" | "assistant" | "manager";

interface RoleOption {
  id: Role;
  title: string;
  description: string;
}

const roles: RoleOption[] = [
  {
    id: "user",
    title: "User",
    description: "Book appointments & services",
  },
  {
    id: "beautician",
    title: "Beautician",
    description: "Nail tech, stylist, barber",
  },
  {
    id: "assistant",
    title: "Assistant",
    description: "Support beautician",
  },
  {
    id: "manager",
    title: "Manager",
    description: "Salon oversight",
  },
];

export default function ChooseRolePage() {
  const [selectedRole, setSelectedRole] = useState<Role>("beautician");
  const router = useRouter();

  const handleNext = () => {
    console.log("Selected role:", selectedRole);
    // Navigate to next step based on role
    router.push("/auth/login");
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
        Choose Your Role
      </h1>
      <p className="text-sm text-text-primary/70 text-center mb-8">
        Welcome back Please enter your details.
      </p>

      {/* Role Selection Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {roles.map((role) => {
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setSelectedRole(role.id)}
              className={`p-4 rounded-lg border transition-all text-left ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-black/10 hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="mt-1">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-text-primary/30"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary text-base mb-1">
                    {role.title}
                  </h3>
                  <p className="text-sm text-text-primary/70">{role.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Next
      </button>
    </div>
  );
}
