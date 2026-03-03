"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  fallbackUrl?: string;
  showLoading?: boolean;
}

export default function RoleGuard({
  children,
  allowedRoles,
  fallbackUrl = "/auth/login",
  showLoading = true,
}: RoleGuardProps) {
  const { role, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      const hasAccess = allowedRoles.includes(role);
      
      if (!hasAccess) {
        if (!isAuthenticated && !allowedRoles.includes("guest")) {
          router.push(fallbackUrl);
        } else if (isAuthenticated) {
          // User is logged in but doesn't have permission
          router.push("/unauthorized");
        }
      }
    }
  }, [role, isLoading, isAuthenticated, allowedRoles, fallbackUrl, router]);

  if (isLoading && showLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const hasAccess = allowedRoles.includes(role);
  
  if (!hasAccess) {
    return null;
  }

  return <>{children}</>;
}
