"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import RoleGuard from "@/components/RoleGuard";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <RoleGuard allowedRoles={["admin", "guest"]} fallbackUrl="/unauthorized">
            <div className="min-h-screen bg-gray-50/50 flex transition-colors duration-300">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                <main className="flex-1 flex flex-col lg:pl-64 min-w-0 transition-all duration-300">
                    <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

                    <div className="flex-1 p-4 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </RoleGuard>
    );
}
