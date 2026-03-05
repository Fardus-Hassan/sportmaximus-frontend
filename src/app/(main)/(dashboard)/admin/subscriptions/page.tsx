"use client";

import { useState } from "react";
import {
    Save,
    X,
    DollarSign,
    Calendar,
    Clock,
    Timer,
    LayoutGrid,
    FileText,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import RoleGuard from "@/components/RoleGuard";

const plans = [
    { id: "parlor", label: "Parlor Plan" },
    { id: "beautician", label: "Beautician plan" }
];

export default function SubscriptionsPage() {
    const [activeTab, setActiveTab] = useState("parlor");

    return (
        <RoleGuard allowedRoles={["admin", "guest"]} fallbackUrl="/unauthorized">
            <div className="space-y-8 max-w-[1200px] mx-auto animate-in fade-in duration-700">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-6">Subscription plan</h1>

                {/* Tab Selector */}
                <div className="bg-white p-1.5 rounded-[18px] shadow-sm border border-gray-100 flex items-center max-w-4xl mx-auto mb-10">
                    {plans.map((plan) => (
                        <button
                            key={plan.id}
                            onClick={() => setActiveTab(plan.id)}
                            className={cn(
                                "flex-1 py-3 px-6 rounded-[14px] text-sm font-black transition-all duration-300",
                                activeTab === plan.id
                                    ? "bg-[#EBF2FF] text-[#3B82F6]"
                                    : "text-gray-400 hover:text-gray-600"
                            )}
                        >
                            {plan.label}
                        </button>
                    ))}
                </div>

                {/* Monthly Subscription Section */}
                <SubscriptionSection title="Monthly Subscription" />

                {/* Yearly Subscription Section */}
                <SubscriptionSection title="Yearly Subscription" />

                {/* Bottom Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Current Plans Summary */}
                    <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="w-16 h-16 bg-[#F8FAFC] border border-gray-100 rounded-2xl flex items-center justify-center text-[#334155]">
                                <div className="relative">
                                    <LayoutGrid className="w-8 h-8" />
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Current Plans</p>
                                <p className="text-4xl font-black text-gray-900 tracking-tighter">2</p>
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <p className="text-[13px] font-bold text-gray-500">Basic Plan— $30.00(Monthly)</p>
                            <p className="text-[13px] font-bold text-gray-500">Standard Plan — $300.00(Yearly)</p>
                        </div>
                    </div>

                    {/* Free Trial Setting */}
                    <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <p className="text-[15px] font-black text-gray-900">Free Trial(Days)</p>
                        </div>
                        <div className="space-y-8">
                            <div className="relative group">
                                <select className="w-full bg-[#F8FAFC] border border-gray-100 rounded-2xl px-8 py-5 text-sm font-black text-gray-900 focus:ring-1 focus:ring-primary/20 appearance-none transition-all cursor-pointer">
                                    <option>03</option>
                                    <option>07</option>
                                    <option>14</option>
                                    <option>30</option>
                                </select>
                                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-4 h-4 rotate-45" />
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                <Button variant="outline" className="h-[52px] px-10 rounded-2xl text-[14px] font-black border-gray-200 hover:bg-gray-50 text-gray-600">Cancel</Button>
                                <Button className="h-[52px] px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white text-[14px] font-black shadow-lg shadow-primary/20">Save Changes</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RoleGuard>
    );
}

function SubscriptionSection({ title }: { title: string }) {
    return (
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm animate-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-[16px] font-black text-gray-900 mb-8 pb-4 border-b border-gray-100/50">{title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Plan Title */}
                <div className="space-y-3">
                    <Label className="text-[13px] font-black text-gray-900 tracking-tight">Plan Title</Label>
                    <Input
                        placeholder="Type here..."
                        className="bg-[#F8FAFC] border border-gray-50 h-[60px] rounded-2xl px-8 font-bold placeholder:text-gray-300 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all"
                    />
                </div>

                {/* Plan Price */}
                <div className="space-y-3">
                    <Label className="text-[13px] font-black text-gray-900 tracking-tight">Plan Price/Per Audit</Label>
                    <div className="flex items-stretch overflow-hidden rounded-2xl bg-[#F8FAFC] border border-gray-50 h-[60px] focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                        <div className="w-[60px] flex items-center justify-center bg-[#FFD6DD] text-primary font-black">
                            $
                        </div>
                        <Input
                            value="9.95.00"
                            readOnly
                            className="bg-transparent border-none h-full px-8 font-bold text-gray-900 shadow-none focus-visible:ring-0"
                        />
                    </div>
                </div>

                {/* Facilities 01 & 02 */}
                <div className="space-y-3">
                    <Label className="text-[13px] font-black text-gray-900 tracking-tight">Plan Facilities 01</Label>
                    <Input
                        placeholder="Type here..."
                        className="bg-[#F8FAFC] border border-gray-50 h-[60px] rounded-2xl px-8 font-bold placeholder:text-gray-300 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                </div>
                <div className="space-y-3">
                    <Label className="text-[13px] font-black text-gray-900 tracking-tight">Plan Facilities 02</Label>
                    <Input
                        placeholder="Type here..."
                        className="bg-[#F8FAFC] border border-gray-50 h-[60px] rounded-2xl px-8 font-bold placeholder:text-gray-300 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                </div>

                {/* Facilities 03 & 04 */}
                <div className="space-y-3">
                    <Label className="text-[13px] font-black text-gray-900 tracking-tight">Plan Facilities 03</Label>
                    <Input
                        placeholder="Type here..."
                        className="bg-[#F8FAFC] border border-gray-50 h-[60px] rounded-2xl px-8 font-bold placeholder:text-gray-300 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                </div>
                <div className="space-y-3">
                    <Label className="text-[13px] font-black text-gray-900 tracking-tight">Plan Facilities 04</Label>
                    <Input
                        placeholder="Type here..."
                        className="bg-[#F8FAFC] border border-gray-50 h-[60px] rounded-2xl px-8 font-bold placeholder:text-gray-300 focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                </div>
            </div>

            {/* Footer with Toggle and Buttons */}
            <div className="mt-12 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-[11px] font-black text-gray-900 tracking-widest">BEST OFFER</span>
                    <Switch className="data-[state=checked]:bg-primary h-6 w-11 transition-all" />
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-[52px] px-12 rounded-2xl text-[14px] font-black border-gray-200 hover:bg-gray-50 text-gray-600 transition-all">Cancel</Button>
                    <Button className="h-[52px] px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white text-[14px] font-black shadow-lg shadow-primary/20 transition-all">Save Changes</Button>
                </div>
            </div>
        </div>
    );
}
