"use client";

import { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const data = {
    weekly: [
        { name: "Fri", client: 4000, beautician: 2400, parlor: 2400 },
        { name: "Sat", client: 3000, beautician: 1398, parlor: 2210 },
        { name: "Sun", client: 2000, beautician: 9800, parlor: 2290 },
        { name: "Tue", client: 2780, beautician: 3908, parlor: 2000 },
        { name: "Wed", client: 1890, beautician: 4800, parlor: 2181 },
        { name: "Thu", client: 2390, beautician: 3800, parlor: 2500 },
    ],
    months: [
        { name: "Jan", client: 15400, beautician: 12100, parlor: 10000 },
        { name: "Feb", client: 12100, beautician: 18900, parlor: 12000 },
        { name: "Mar", client: 18900, beautician: 23400, parlor: 15000 },
        { name: "Apr", client: 23400, beautician: 15400, parlor: 18000 },
        { name: "May", client: 15400, beautician: 23400, parlor: 21000 },
        { name: "Jun", client: 23400, beautician: 18900, parlor: 24000 },
    ],
    yearly: [
        { name: "2020", client: 45000, beautician: 52000, parlor: 40000 },
        { name: "2021", client: 52000, beautician: 48000, parlor: 45000 },
        { name: "2022", client: 48000, beautician: 61000, parlor: 50000 },
        { name: "2023", client: 61000, beautician: 55000, parlor: 55000 },
        { name: "2024", client: 55000, beautician: 67000, parlor: 60000 },
        { name: "2025", client: 67000, beautician: 72000, parlor: 65000 },
    ],
};

export default function RevenueStatsChart() {
    const [timeframe, setTimeframe] = useState<keyof typeof data>("weekly");

    return (
        <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between px-6 py-6">
                <CardTitle className="text-lg font-bold text-gray-800">Revenue Stats</CardTitle>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
                            Client
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            Beauticians
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                            Parlors
                        </div>
                    </div>
                    <Select
                        value={timeframe}
                        onValueChange={(value) => setTimeframe(value as keyof typeof data)}
                    >
                        <SelectTrigger className="w-[110px] h-9 bg-primary text-white border-none rounded-lg text-xs font-bold ring-offset-0 focus:ring-0">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="months">Months</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data[timeframe]} margin={{ left: -20 }}>
                            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F3F4F6" />
                            <XAxis
                                dataKey="name"
                                stroke="#9CA3AF"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#9CA3AF"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => value === 0 ? "0" : `${value}`}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-gray-900 text-white p-2.5 rounded-lg shadow-xl text-[11px] font-bold">
                                                <p className="mb-1 border-b border-white/10 pb-1">{payload[0].payload.name}</p>
                                                <div className="space-y-1">
                                                    {payload.map((p, i) => (
                                                        <div key={i} className="flex items-center justify-between gap-4">
                                                            <span className="opacity-70">{p.name}:</span>
                                                            <span>${p.value?.toLocaleString()}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Bar dataKey="client" name="Client" fill="#F3F4F6" radius={[4, 4, 0, 0]} barSize={12} />
                            <Bar dataKey="beautician" name="Beauticians" fill="#E32750" radius={[4, 4, 0, 0]} barSize={12} />
                            <Bar dataKey="parlor" name="Parlors" fill="#F9A8B6" radius={[4, 4, 0, 0]} barSize={12} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
