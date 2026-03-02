"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useAuth } from "@/contexts/AuthContext";

export default function UnauthorizedPage() {
  const { role, isAuthenticated } = useAuth();

  return (
    <Container className="py-20">
      <div className="max-w-md mx-auto text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Access Denied
        </h1>
        <p className="text-text-primary/60 mb-8">
          {isAuthenticated 
            ? `Your current role (${role}) doesn't have permission to access this page.`
            : "You need to be logged in to access this page."
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Go to Home
          </Link>
          {!isAuthenticated && (
            <Link
              href="/auth/login"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
