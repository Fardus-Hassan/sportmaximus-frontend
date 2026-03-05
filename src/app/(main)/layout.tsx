"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DASHBOARD_PREFIXES = ["/admin", "/beautician-dashboard", "/parlor-dashboard"];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardRoute = DASHBOARD_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  // Dashboard pages: render without landing chrome
  if (isDashboardRoute) {
    return <>{children}</>;
  }

  // Landing pages: common layout (Navbar + Footer)
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
