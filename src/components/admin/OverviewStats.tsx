"use client";

import {
    Users,
    CreditCard,
    DollarSign,
    TrendingUp
} from "lucide-react";

const stats = [
    {
        label: "Total Users",
        value: "24,567",
        icon: Users,
        bg: "bg-gray-50",
        iconBg: "bg-white"
    },
    {
        label: "Active Subscriptions",
        value: "8,234",
        icon: CreditCard,
        bg: "bg-gray-50",
        iconBg: "bg-white"
    },
    {
        label: "Total Revenue",
        value: "$100000",
        icon: DollarSign,
        bg: "bg-gray-50",
        iconBg: "bg-white"
    },
    {
        label: "Total Commissions Paid",
        value: "$89,234",
        icon: DollarSign,
        bg: "bg-gray-50",
        iconBg: "bg-white"
    },
];

export default function OverviewStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4"
                >
                    <div className="w-full flex items-center justify-between">
                        <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                            <stat.icon className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-400">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
