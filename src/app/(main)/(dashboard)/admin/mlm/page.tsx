"use client";

import { useState } from "react";
import {
    Users,
    DollarSign,
    Clock,
    Search,
    ChevronDown,
    Eye,
    Check,
    X,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    MapPin,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import RoleGuard from "@/components/RoleGuard";

const commissionRates = ["$ 5.00", "$ 4.00", "$ 3.00", "$ 2.00", "$ 1.00", "$ 0.50", "$ 0.25", "$ 0.12", "$ 0.06", "$ 0.03", "$ 0.01"];

const referralData = [
    { id: "123456", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 310, status: "Paid" },
    { id: "123458", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 300, status: "Achieved" },
    { id: "123456", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 310, status: "Paid" },
    { id: "123456", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 234, status: "Still Pursuing" },
    { id: "123456", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 310, status: "Paid" },
    { id: "123456", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 300, status: "Still Pursuing" },
    { id: "123456", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 310, status: "Paid" },
    { id: "123458", referrer: "Glamour Beauty Lounge", avatar: "/model1.png", total: 234, status: "Still Pursuing" },
];

const topEarners = [
    { rank: "#1", name: "Elite Beauty Parlour", members: 234, earnings: "$12,345", total: "$45,678" },
    { rank: "#2", name: "Glamour Studio", members: 189, earnings: "$10,234", total: "$38,901" },
    { rank: "#3", name: "Beauty Haven", members: 156, earnings: "$8,901", total: "$32,456" },
    { rank: "#4", name: "Radiant Spa", members: 134, earnings: "$7,456", total: "$28,234" },
    { rank: "#5", name: "Serenity Salon", members: 112, earnings: "$6,789", total: "$24,567" },
];

const referrerListData = [
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
    { name: "Velora Beauty Lounge", location: "Gulshan 2, Dhaka", id: "Referral ID: 123456", logo: "/model1.png" },
];

type ViewState = "dashboard" | "settings" | "referrer-list";

export default function MLMPage() {
    const [view, setView] = useState<ViewState>("dashboard");

    return (
        <RoleGuard allowedRoles={["admin", "guest"]} fallbackUrl="/unauthorized">
            <div className="space-y-8 max-w-[1400px] mx-auto animate-in fade-in duration-700 pb-12">
                {/* Stats Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard label="Total Referrals" value="310" icon={<Users className="w-5 h-5" />} bgColor="bg-[#EBF2FF]" iconColor="text-[#3B82F6]" />
                    <StatCard label="Bonuses Paid" value="$45,678" icon={<DollarSign className="w-5 h-5" />} bgColor="bg-[#F5EFFF]" iconColor="text-[#A855F7]" />
                    <StatCard label="Pending Approval" value="$500" icon={<Clock className="w-5 h-5" />} bgColor="bg-[#FFF9EB]" iconColor="text-[#F59E0B]" />
                </div>

                {view === "dashboard" && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Control Bar */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by name or email...."
                                    className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl pl-14 pr-6 py-4 text-sm font-bold text-gray-900 focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                                />
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <button className="flex items-center justify-between gap-2 bg-[#F8FAFC] border border-gray-100 rounded-xl px-6 py-4 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm min-w-[140px]">
                                    Status <ChevronDown className="w-4 h-4 text-gray-400" />
                                </button>
                                <Button
                                    onClick={() => setView("settings")}
                                    className="bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 h-auto rounded-xl shadow-lg shadow-primary/20 transition-all text-sm whitespace-nowrap"
                                >
                                    Commision Setting
                                </Button>
                            </div>
                        </div>

                        {/* Referral Table */}
                        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#F8FAFC]/50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Referral ID</th>
                                        <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Referrer</th>
                                        <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest text-center">Total Referred</th>
                                        <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
                                        <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referralData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0">
                                            <td className="px-8 py-5 text-sm font-bold text-gray-600">{row.id}</td>
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <img src={row.avatar} className="w-8 h-8 rounded-lg object-cover border border-gray-100 shadow-sm" alt="" />
                                                    <span className="text-sm font-black text-[#1A1C1E]">{row.referrer}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-black text-[#1A1C1E] text-center">{row.total}</td>
                                            <td className="px-8 py-5 text-center">
                                                <StatusPill status={row.status} />
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex items-center justify-center gap-3">
                                                    {row.status === "Paid" ? (
                                                        <Button
                                                            onClick={() => setView("referrer-list")}
                                                            variant="outline"
                                                            className="h-[34px] px-5 rounded-lg bg-primary text-white border-none hover:bg-primary/90 text-[12px] font-black"
                                                        >
                                                            View List
                                                        </Button>
                                                    ) : (
                                                        <>
                                                            <button className="w-8 h-8 rounded-lg bg-[#EBF9F1] text-[#22C55E] flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border border-[#DCFCE7]">
                                                                <Check className="w-4 h-4" />
                                                            </button>
                                                            <button className="w-8 h-8 rounded-lg bg-[#FFF0F1] text-primary flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border border-primary/10">
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                            <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border border-gray-100">
                                                                <Eye className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <Pagination />

                        {/* Top Earners Ranked */}
                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                            <h3 className="text-[18px] font-black text-[#1A1C1E] mb-8">Top Commission Earners</h3>
                            <div className="space-y-4">
                                {topEarners.map((earner, i) => (
                                    <div key={i} className="group p-6 rounded-3xl bg-[#F8FAFC]/30 border border-gray-50 hover:bg-[#F8FAFC] hover:border-gray-100 hover:shadow-sm transition-all duration-300 flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className={cn(
                                                "w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shadow-lg",
                                                i === 0 ? "bg-[#FF6D88]" :
                                                    i === 1 ? "bg-[#FFACC0]" :
                                                        i === 2 ? "bg-[#FFC6D2]" : "bg-[#FFE0E7] !text-primary"
                                            )}>
                                                {earner.rank}
                                            </div>
                                            <div>
                                                <h4 className="text-[16px] font-black text-[#1A1C1E] mb-1">{earner.name}</h4>
                                                <p className="text-[13px] font-bold text-gray-500">
                                                    {earner.members} downline members • Direct earnings: {earner.earnings}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="text-right">
                                                <p className="text-[17px] font-black text-[#1A1C1E]">{earner.total}</p>
                                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pt-1">Total commissions</p>
                                            </div>
                                            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {view === "settings" && (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm relative">
                            <button
                                onClick={() => setView("dashboard")}
                                className="absolute top-8 right-12 text-gray-300 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <h3 className="text-[20px] font-black text-[#1A1C1E] mb-10">Commission Settings</h3>
                            <div className="p-10 rounded-[32px] border border-gray-100 bg-[#F8FAFC]/30">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                                    <div className="space-y-4 max-w-lg">
                                        <h4 className="text-[16px] font-black text-[#1A1C1E]">Commission Rate</h4>
                                        <p className="text-[14px] font-bold text-gray-500 leading-relaxed">
                                            Commission percentage for Parlor owners. Adjust the tiered incentive rates below.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-6 w-full md:w-auto">
                                        <div className="relative group w-full md:w-40">
                                            <select className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-[16px] font-black text-[#1A1C1E] appearance-none focus:ring-1 focus:ring-primary/20 cursor-pointer shadow-sm transition-all group-hover:border-gray-300">
                                                {commissionRates.map(rate => (
                                                    <option key={rate} value={rate.replace("$ ", "")}>{rate}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <span className="text-[20px] font-black text-[#1A1C1E]">$</span>
                                        <Button className="bg-primary hover:bg-primary/90 text-white font-black px-12 py-4 h-auto rounded-xl shadow-lg shadow-primary/20 transition-all text-[15px]">
                                            Update
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {view === "referrer-list" && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Referrer List Header */}
                        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setView("dashboard")}
                                    className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <h1 className="text-[22px] font-black text-gray-900 tracking-tight">Referrer List</h1>
                            </div>
                            <div className="relative w-full max-w-sm">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-white border border-gray-100 rounded-full pl-12 pr-6 py-3 text-sm font-bold text-gray-900 focus:ring-1 focus:ring-primary/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Grid of Referrers */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {referrerListData.map((ref, i) => (
                                <ReferrerCard key={i} data={ref} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>
                )}
            </div>
        </RoleGuard>
    );
}

function ReferrerCard({ data }: { data: any }) {
    return (
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-8">
            <div className="flex items-start gap-5">
                <div className="w-24 h-24 rounded-[30px] overflow-hidden border border-gray-50 shadow-inner shrink-0">
                    <img src={data.logo} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="space-y-2 pt-2">
                    <h3 className="text-[19px] font-black text-[#1A1C1E]">{data.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-[14px] font-bold">{data.location}</span>
                    </div>
                    <p className="text-[14px] font-bold text-gray-400">{data.id}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="outline" className="flex-1 h-[52px] rounded-xl border-gray-100 text-[#1A1C1E] font-black text-[14px] gap-2 hover:bg-gray-50 transition-all">
                    <Eye className="w-5 h-5 text-gray-300" /> View Details
                </Button>
                <button className="w-14 h-[52px] rounded-xl bg-[#EBF2FF] text-[#3B82F6] flex items-center justify-center hover:scale-105 transition-all shadow-sm">
                    <Mail className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

function Pagination() {
    return (
        <div className="flex items-center justify-between pt-6 text-xs font-bold text-gray-400">
            <div className="flex items-center gap-2">
                Showing
                <select className="bg-gray-100/50 border-none rounded px-2 py-1 focus:ring-0 cursor-pointer">
                    <option>11</option>
                </select>
                out of 1,450
            </div>
            <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                <button className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-black shadow-lg shadow-primary/20">1</button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">2</button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">3</button>
                <span className="px-1 text-gray-300">...</span>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">16</button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"><ChevronRight className="w-4 h-4" /></button>
                <span className="ml-2 font-black text-gray-900">Next <ChevronRight className="w-3 h-3 inline animate-pulse" /></span>
            </div>
        </div>
    );
}

function StatCard({ label, value, icon, bgColor, iconColor }: { label: string; value: string; icon: React.ReactNode; bgColor: string; iconColor: string }) {
    return (
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-300 group">
            <div className="space-y-3">
                <p className="text-[32px] font-black text-[#1A1C1E] tracking-tighter group-hover:scale-105 transition-transform origin-left duration-300">{value}</p>
                <p className="text-[14px] font-bold text-gray-500">{label}</p>
            </div>
            <div className={cn("w-14 h-14 rounded-[20px] flex items-center justify-center transition-all duration-500 shadow-sm group-hover:rotate-[10deg] group-hover:scale-110", bgColor, iconColor)}>
                {icon}
            </div>
        </div>
    );
}

function StatusPill({ status }: { status: string }) {
    const variants: Record<string, string> = {
        "Paid": "bg-[#EBF9F1] text-[#22C55E]",
        "Achieved": "bg-[#F5EFFF] text-[#A855F7]",
        "Still Pursuing": "bg-[#FFF9EB] text-[#F59E0B]"
    };
    return (
        <span className={cn("px-4 py-1.5 rounded-full text-[11px] font-black tracking-wide inline-block", variants[status] || "bg-gray-100 text-gray-500")}>
            {status}
        </span>
    );
}
