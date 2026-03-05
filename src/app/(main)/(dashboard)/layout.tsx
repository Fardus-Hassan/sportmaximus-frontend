"use client";

// For now, allow all dashboard/admin routes to be browsed freely
// without forcing login or redirecting.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
