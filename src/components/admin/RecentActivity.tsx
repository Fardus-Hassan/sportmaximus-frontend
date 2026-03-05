"use client";

import { useState } from "react";
import {
    UserPlus,
    CalendarCheck,
    Store,
    Clock,
    Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const activities = [
    {
        id: 1,
        type: "user_reg",
        title: "New User Registered",
        description: "Sarah Johnson created a new account.",
        time: "2 minutes ago",
        icon: UserPlus,
        iconColor: "text-blue-500",
        iconBg: "bg-blue-50",
        details: {
            name: "Sarah Johnson",
            email: "sarah.j@example.com",
            role: "User",
            location: "New York, USA",
            joinedAt: "2024-03-05 10:55 AM"
        }
    },
    {
        id: 2,
        type: "booking",
        title: "New Booking Confirmed",
        description: "Parlor 'Glow Studio' received a booking from Mike.",
        time: "45 minutes ago",
        icon: CalendarCheck,
        iconColor: "text-green-500",
        iconBg: "bg-green-50",
        details: {
            client: "Mike Peterson",
            parlor: "Glow Studio",
            service: "Premium Haircut",
            amount: "$45.00",
            time: "Today, 02:00 PM"
        }
    },
    {
        id: 3,
        type: "parlor_reg",
        title: "Parlor Request Received",
        description: "Beauty Hub submitted a registration request.",
        time: "2 hours ago",
        icon: Store,
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50",
        details: {
            parlorName: "Beauty Hub",
            owner: "Lisa Chen",
            address: "123 Fashion Ave",
            documentStatus: "Pending Verification"
        }
    },
];

export default function RecentActivity() {
    const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-transparent overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">View All</Button>
            </div>

            <div className="divide-y divide-gray-100">
                {activities.map((activity) => (
                    <div key={activity.id} className="p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
                        <div className={`h-10 w-10 min-w-[40px] rounded-full ${activity.iconBg} flex items-center justify-center`}>
                            <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-semibold text-gray-900 truncate">{activity.title}</p>
                                <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                                    <Clock className="h-3 w-3" />
                                    {activity.time}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed mb-3">{activity.description}</p>

                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 text-xs font-semibold gap-2 border-gray-200 hover:bg-gray-100"
                                onClick={() => setSelectedActivity(activity)}
                            >
                                <Eye className="h-3 w-3" />
                                View Details
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedActivity} onOpenChange={(open) => !open && setSelectedActivity(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{selectedActivity?.title}</DialogTitle>
                        <DialogDescription>
                            Detailed information about this event.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4 space-y-4">
                        {selectedActivity?.details && Object.entries(selectedActivity.details).map(([key, value]) => (
                            <div key={key} className="flex flex-col border-b border-gray-100 pb-2">
                                <label className="text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                                <p className="text-sm font-medium text-gray-900">{value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button onClick={() => setSelectedActivity(null)} className="px-8">Close</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
