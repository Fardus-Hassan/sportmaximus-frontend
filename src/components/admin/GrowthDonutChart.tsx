"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
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
import { ArrowUp } from "lucide-react";

const data = [
    { name: "Growth", value: 22 },
    { name: "Remaining", value: 78 },
];

const COLORS = ["#E32750", "#FDE8EB"];

const legendItems = [
    { label: "Client", value: "5.25%", color: "bg-green-100 text-green-600" },
    { label: "Beauticians", value: "5.25%", color: "bg-green-100 text-green-600" },
    { label: "Parlors", value: "5.25%", color: "bg-green-100 text-green-600" },
];

export default function GrowthDonutChart() {
    return (
        <Card className="border-none shadow-sm bg-white rounded-2xl h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between px-6 py-6">
                <Select defaultValue="weekly">
                    <SelectTrigger className="w-[100px] h-8 bg-primary text-white border-none rounded-lg text-xs font-bold ring-offset-0 focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col px-6 pb-6">
                <div className="flex flex-col items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Average Growth</h3>
                </div>

                <div className="flex-1 flex flex-row items-center gap-4">
                    <div className="relative w-40 h-40">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={0}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-black text-gray-900">22%</span>
                        </div>
                    </div>

                    <div className="flex-1 space-y-3">
                        {legendItems.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-500">{item.label}</span>
                                <div className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${item.color}`}>
                                    <ArrowUp className="w-2.5 h-2.5" />
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
