"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export default function Toaster() {
  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "8px",
          padding: "12px 16px",
        },
        success: {
          iconTheme: {
            primary: "var(--color-primary, #6366f1)",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
