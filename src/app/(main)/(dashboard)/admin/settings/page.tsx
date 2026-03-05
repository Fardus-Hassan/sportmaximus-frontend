"use client";

import { useState } from "react";
import {
    Camera,
    Eye,
    EyeOff,
    Lock,
    User,
    ChevronRight,
    Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import RoleGuard from "@/components/RoleGuard";
import Image from "next/image";

const settingsTabs = [
    { id: "admin-info", label: "Admin Info" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms and Conditions" }
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("admin-info");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    return (
        <RoleGuard allowedRoles={["admin", "guest"]} fallbackUrl="/unauthorized">
            <div className="space-y-8 max-w-[1000px] mx-auto animate-in fade-in duration-700">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-8">Settings</h1>

                {/* Tab Selector */}
                <div className="bg-white p-1.5 rounded-[18px] shadow-sm border border-gray-100 flex items-center mb-10">
                    {settingsTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex-1 py-3 px-6 rounded-[14px] text-sm font-black transition-all duration-300",
                                activeTab === tab.id
                                    ? "bg-[#EBF2FF] text-[#3B82F6]"
                                    : "text-gray-400 hover:text-gray-600"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                    {activeTab === "admin-info" && (
                        <div className="space-y-8">
                            {/* Profile & Name Section */}
                            <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm space-y-10">
                                <div>
                                    <Label className="text-[15px] font-black text-gray-900 mb-6 block">Profile Picture:</Label>
                                    <div className="relative w-40 h-40">
                                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-50 shadow-inner bg-gray-50">
                                            <Image
                                                src="/model1.png"
                                                width={160}
                                                height={160}
                                                alt="Admin"
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <button className="absolute bottom-1 right-1 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 text-primary hover:scale-110 transition-transform active:scale-95">
                                            <Camera className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-50">
                                    <p className="text-[15px] font-black text-gray-900 mb-8">Name</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-[13px] font-bold text-gray-400">First Name</Label>
                                            <Input
                                                placeholder="Lebron"
                                                className="bg-white border-gray-200 h-[56px] rounded-xl px-6 font-bold text-gray-900 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-[13px] font-bold text-gray-400">Last Name</Label>
                                            <Input
                                                placeholder="James"
                                                className="bg-white border-gray-200 h-[56px] rounded-xl px-6 font-bold text-gray-900 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-4">
                                    <Button variant="outline" className="h-[52px] px-10 rounded-xl text-[14px] font-black border-gray-200 hover:bg-gray-50 text-gray-600">Cancel</Button>
                                    <Button className="h-[52px] px-10 rounded-xl bg-primary hover:bg-primary/90 text-white text-[14px] font-black shadow-lg shadow-primary/20">Save Changes</Button>
                                </div>
                            </div>

                            {/* Change Password Section */}
                            <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
                                <h3 className="text-[18px] font-black text-gray-900 mb-10">Change Password</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div className="space-y-3">
                                        <Label className="text-[13px] font-bold text-gray-400">Old Password</Label>
                                        <div className="relative group">
                                            <Input
                                                type={showOldPassword ? "text" : "password"}
                                                placeholder="jonsnow007"
                                                className="bg-white border-gray-200 h-[56px] rounded-xl pl-6 pr-14 font-bold text-gray-900 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all shadow-sm"
                                            />
                                            <button
                                                onClick={() => setShowOldPassword(!showOldPassword)}
                                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 transition-colors"
                                            >
                                                {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-[13px] font-bold text-gray-400">New Password</Label>
                                        <div className="relative group">
                                            <Input
                                                type={showNewPassword ? "text" : "password"}
                                                placeholder="********"
                                                className="bg-white border-gray-200 h-[56px] rounded-xl pl-6 pr-14 font-bold text-gray-900 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all shadow-sm"
                                            />
                                            <button
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 transition-colors"
                                            >
                                                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-3">
                                    <Button variant="outline" className="h-[52px] px-10 rounded-xl text-[14px] font-black border-gray-200 hover:bg-gray-50 text-gray-600">Cancel</Button>
                                    <Button className="h-[52px] px-10 rounded-xl bg-primary hover:bg-primary/90 text-white text-[14px] font-black shadow-lg shadow-primary/20">Save Changes</Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {(activeTab === "privacy" || activeTab === "terms") && (
                        <div className="bg-white p-10 md:p-14 rounded-[40px] border border-gray-100 shadow-sm space-y-10">
                            <div className="space-y-8 bg-gray-50/50 p-8 md:p-12 rounded-[32px] border border-gray-100/50">
                                <p className="text-[15px] font-bold text-gray-500 leading-relaxed italic">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris.
                                </p>
                                <p className="text-[15px] font-bold text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris.
                                </p>
                                <p className="text-[15px] font-bold text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris. Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetuer neque mauris.
                                </p>
                            </div>
                            <div className="flex items-center justify-end">
                                <Button className="h-[56px] px-12 rounded-xl bg-primary hover:bg-primary/90 text-white text-[15px] font-black shadow-lg shadow-primary/20 transition-all active:scale-95">
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </RoleGuard>
    );
}
