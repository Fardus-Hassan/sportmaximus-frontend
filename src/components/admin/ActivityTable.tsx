"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AppointmentModal from "./AppointmentModal";

const activities = [
    { id: 1, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Completed", amount: "$300" },
    { id: 2, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Canceled", amount: "$300" },
    { id: 3, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Booked", amount: "$300" },
    { id: 4, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Reschedule", amount: "$300" },
    { id: 5, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "In Progress", amount: "$300" },
    { id: 6, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Completed", amount: "$300" },
    { id: 7, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Completed", amount: "$300" },
    { id: 8, time: "03:35PM, Jun 25,2025", client: "Nila Akter", beautician: "Rob Stark", parlor: "Glamour Beauty Lounge", service: "Acrylic Nails", status: "Completed", amount: "$300" },
];

const statusStyles: Record<string, string> = {
    "Completed": "bg-green-100 text-green-600",
    "Canceled": "bg-red-100 text-red-600",
    "Booked": "bg-blue-100 text-blue-600",
    "Reschedule": "bg-pink-100 text-pink-600",
    "In Progress": "bg-orange-100 text-orange-600",
};

export default function ActivityTable() {
    const [selectedActivity, setSelectedActivity] = useState<any>(null);

    return (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100/50">
            <div className="p-8 pb-4 flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent activity</h3>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-50 border-none rounded-2xl pl-11 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/20 w-64"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-50/50 border-b border-gray-50 uppercase text-[11px] font-black text-gray-500 tracking-wider">
                            <th className="px-8 py-4 text-left">Date & Time</th>
                            <th className="px-4 py-4 text-left">Client</th>
                            <th className="px-4 py-4 text-left">Beautician</th>
                            <th className="px-4 py-4 text-left">Parlor</th>
                            <th className="px-4 py-4 text-left">Service</th>
                            <th className="px-4 py-4 text-center">Status</th>
                            <th className="px-4 py-4 text-center">Amount</th>
                            <th className="px-8 py-4 text-right">Appointment</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {activities.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/30 transition-colors group">
                                <td className="px-8 py-4 text-[13px] font-bold text-gray-600">{item.time}</td>
                                <td className="px-4 py-4 text-[13px] font-bold text-gray-600">{item.client}</td>
                                <td className="px-4 py-4 text-[13px] font-bold text-gray-600">{item.beautician}</td>
                                <td className="px-4 py-4 text-[13px] font-bold text-gray-600">{item.parlor}</td>
                                <td className="px-4 py-4 text-[13px] font-bold text-gray-600">{item.service}</td>
                                <td className="px-4 py-4 text-center">
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-[10px] font-black inline-block min-w-[100px]",
                                        statusStyles[item.status]
                                    )}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 text-center text-[13px] font-black text-gray-900">{item.amount}</td>
                                <td className="px-8 py-4 text-right">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 px-4 rounded-xl text-[10px] font-black border-gray-100 hover:bg-gray-100 bg-gray-50 text-gray-900"
                                        onClick={() => setSelectedActivity(item)}
                                    >
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Container */}
            <div className="p-8 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    Showing
                    <select className="bg-gray-50 border-none rounded px-1 py-0.5 focus:ring-0">
                        <option>11</option>
                    </select>
                    out of 1,450
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg">
                        <ChevronLeft className="w-4 h-4 text-gray-400" />
                    </Button>
                    <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-black shadow-lg shadow-primary/20">1</button>
                    <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-400 text-xs font-bold">2</button>
                    <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-400 text-xs font-bold">3</button>
                    <span className="text-gray-300">...</span>
                    <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-400 text-xs font-bold">16</button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Button>
                </div>
            </div>

            <AppointmentModal
                isOpen={!!selectedActivity}
                onClose={() => setSelectedActivity(null)}
                data={selectedActivity}
            />
        </div>
    );
}
