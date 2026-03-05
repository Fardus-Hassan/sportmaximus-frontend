"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // Allow /admin without login so you can view the page in browser during development
  const isAdminRoute = pathname === "/admin";
  const shouldRedirectToLogin = !isLoading && !isAuthenticated && !isAdminRoute;

  useEffect(() => {
    if (shouldRedirectToLogin) {
      router.push("/auth/login");
    }
  }, [shouldRedirectToLogin, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated && !isAdminRoute) {
    return null;
  }

  return <>{children}</>;
}
