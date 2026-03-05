"use client";

import { useState } from "react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const data = {
    weekly: [
        { name: "Mon", total: 2400 },
        { name: "Tue", total: 1398 },
        { name: "Wed", total: 9800 },
        { name: "Thu", total: 3908 },
        { name: "Fri", total: 4800 },
        { name: "Sat", total: 3800 },
        { name: "Sun", total: 4300 },
    ],
    monthly: [
        { name: "Week 1", total: 15400 },
        { name: "Week 2", total: 12100 },
        { name: "Week 3", total: 18900 },
        { name: "Week 4", total: 23400 },
    ],
    yearly: [
        { name: "Jan", total: 45000 },
        { name: "Feb", total: 52000 },
        { name: "Mar", total: 48000 },
        { name: "Apr", total: 61000 },
        { name: "May", total: 55000 },
        { name: "Jun", total: 67000 },
        { name: "Jul", total: 72000 },
        { name: "Aug", total: 69000 },
        { name: "Sep", total: 75000 },
        { name: "Oct", total: 82000 },
        { name: "Nov", total: 88000 },
        { name: "Dec", total: 95000 },
    ],
};

export default function OverviewChart() {
    const [timeframe, setTimeframe] = useState<keyof typeof data>("weekly");

    return (
        <Card className="col-span-4 border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-gray-900 leading-none">Revenue Overview</CardTitle>
                    <CardDescription className="text-gray-500">
                        Monitor your platform earnings and performance.
                    </CardDescription>
                </div>
                <Select
                    value={timeframe}
                    onValueChange={(value) => setTimeframe(value as keyof typeof data)}
                >
                    <SelectTrigger className="w-[140px] bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="weekly">Weekly View</SelectItem>
                        <SelectItem value="monthly">Monthly View</SelectItem>
                        <SelectItem value="yearly">Yearly View</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data[timeframe]}>
                            <defs>
                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#E32750" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#E32750" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis
                                dataKey="name"
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-lg">
                                                <p className="text-sm font-semibold text-gray-900 mb-1">{payload[0].payload.name}</p>
                                                <p className="text-sm text-primary font-bold">
                                                    Revenue: ${payload[0].value?.toLocaleString()}
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#E32750"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorTotal)"
                                animationDuration={1500}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
