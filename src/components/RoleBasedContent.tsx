"use client";

import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types";

interface RoleBasedContentProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  fallback?: React.ReactNode;
}

export default function RoleBasedContent({
  children,
  allowedRoles,
  fallback = null,
}: RoleBasedContentProps) {
  const { role } = useAuth();

  if (!allowedRoles.includes(role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Shorthand components for common use cases
export function UserOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["user"]} fallback={fallback}>{children}</RoleBasedContent>;
}

export function ParlorOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["parlor"]} fallback={fallback}>{children}</RoleBasedContent>;
}

export function BeauticianOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["beautician"]} fallback={fallback}>{children}</RoleBasedContent>;
}

export function AdminOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["admin"]} fallback={fallback}>{children}</RoleBasedContent>;
}

export function AuthenticatedOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["user", "parlor", "beautician", "admin"]} fallback={fallback}>{children}</RoleBasedContent>;
}

export function GuestOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["guest"]} fallback={fallback}>{children}</RoleBasedContent>;
}

export function ServiceProviderOnly({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <RoleBasedContent allowedRoles={["parlor", "beautician"]} fallback={fallback}>{children}</RoleBasedContent>;
}
