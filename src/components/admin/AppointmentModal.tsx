"use client";

import {
    X,
    Calendar,
    Clock,
    DollarSign,
    Timer,
    User,
    MapPin,
    Star,
    Phone,
    Mail,
    CheckCircle2,
    FileText
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

export default function AppointmentModal({ isOpen, onClose, data }: AppointmentModalProps) {
    if (!data) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[850px] p-0 overflow-hidden rounded-[24px] border-none shadow-2xl">
                <div className="bg-white flex flex-col max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="px-8 pt-8 pb-6 flex items-start justify-between bg-white">
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <h2 className="text-[20px] font-bold text-[#1A1C1E]">Appointment Details</h2>
                                <span className="bg-[#EAF7F1] text-[#27AE60] px-4 py-1 rounded-full text-[12px] font-medium">
                                    {data.status || 'Completed'}
                                </span>
                            </div>
                            <p className="text-[14px] text-[#64748B] font-medium">Acrylic Nails</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-[#64748B] hover:text-[#1A1C1E] transition-colors p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="px-8 pb-8 space-y-6">
                        {/* Top Info Cards */}
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { icon: Calendar, label: "Date", value: "2024-06-10", color: "#3B82F6", bg: "#EFF6FF" },
                                { icon: Clock, label: "Time", value: "10:00 AM", color: "#A855F7", bg: "#FAF5FF" },
                                { icon: DollarSign, label: "Amount", value: "$125", color: "#22C55E", bg: "#F0FDF4" },
                                { icon: Timer, label: "Duration", value: "2 hours", color: "#F97316", bg: "#FFF7ED" },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#F8FAFC] p-4 rounded-[16px] flex items-center gap-4 border border-[#F1F5F9]">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: item.bg, color: item.color }}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-[#94A3B8] font-bold uppercase tracking-wider">{item.label}</p>
                                        <p className="text-[15px] text-[#1A1C1E] font-black">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Client Info */}
                                <div className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 bg-[#EFF6FF] rounded-lg flex items-center justify-center text-[#3B82F6]">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[15px] font-black text-[#1A1C1E]">Client Information</h3>
                                    </div>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#F1F5F9] rounded-full overflow-hidden flex items-center justify-center">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-black text-[#1A1C1E] text-[16px]">Sarah Johnson</p>
                                            <p className="text-[12px] text-[#94A3B8] font-semibold">Member since Jan 2024</p>
                                            <div className="bg-[#F8FAFC] px-3 py-1 rounded-md mt-1 inline-block">
                                                <span className="text-[11px] font-bold text-[#64748B]">24 bookings</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-center gap-3 text-[13px] font-semibold text-[#64748B]">
                                            <Mail className="w-4 h-4 text-[#94A3B8]" /> sarah.j@email.com
                                        </div>
                                        <div className="flex items-center gap-3 text-[13px] font-semibold text-[#64748B]">
                                            <Phone className="w-4 h-4 text-[#94A3B8]" /> +1 (555) 123-4567
                                        </div>
                                    </div>
                                </div>

                                {/* Beautician Info */}
                                <div className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 bg-[#FAF5FF] rounded-lg flex items-center justify-center text-[#A855F7]">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[15px] font-black text-[#1A1C1E]">Beautician Information</h3>
                                    </div>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#F1F5F9] rounded-full overflow-hidden flex items-center justify-center">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-black text-[#1A1C1E] text-[16px]">Maya Patel</p>
                                            <p className="text-[12px] text-[#94A3B8] font-semibold">Hair Styling & Makeup</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="bg-[#F8FAFC] px-2 py-0.5 rounded">
                                                    <span className="text-[10px] font-bold text-[#64748B]">342 services</span>
                                                </div>
                                                <div className="bg-[#FFFBEB] px-2 py-0.5 rounded flex items-center gap-1">
                                                    <Star className="w-2.5 h-2.5 text-[#F59E0B] fill-[#F59E0B]" />
                                                    <span className="text-[10px] font-black text-[#92400E]">4.8 rating</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-center gap-3 text-[13px] font-semibold text-[#64748B]">
                                            <Mail className="w-4 h-4 text-[#94A3B8]" /> maya.p@email.com
                                        </div>
                                        <div className="flex items-center gap-3 text-[13px] font-semibold text-[#64748B]">
                                            <Phone className="w-4 h-4 text-[#94A3B8]" /> +1 (555) 123-4567
                                        </div>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 bg-[#F0FDF4] rounded-lg flex items-center justify-center text-[#22C55E]">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[15px] font-black text-[#1A1C1E]">Service Details</h3>
                                    </div>
                                    <div className="space-y-5">
                                        <div>
                                            <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wide mb-1">Service Name</p>
                                            <p className="font-black text-[#1A1C1E] text-[15px]">Bridal Hair Styling</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wide mb-1">Category</p>
                                                <p className="font-black text-[#1A1C1E] text-[14px]">Hair</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wide mb-1">Duration</p>
                                                <p className="font-black text-[#1A1C1E] text-[14px]">2 hours</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wide mb-1">Description</p>
                                            <p className="text-[14px] text-[#64748B] font-medium leading-[22px]">
                                                Complete bridal hair styling including consultation, styling, and finishing touches.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                {/* Location Details */}
                                <div className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 bg-[#FFF7ED] rounded-lg flex items-center justify-center text-[#F97316]">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[15px] font-black text-[#1A1C1E]">Location Details</h3>
                                    </div>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#F1F5F9] rounded-full overflow-hidden flex items-center justify-center">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-black text-[#1A1C1E] text-[16px]">Velora Beauty Parlor</p>
                                            <p className="text-[12px] text-[#94A3B8] font-semibold">Member since Jan 2024</p>
                                            <div className="bg-[#F8FAFC] px-2 py-0.5 rounded mt-1 inline-block">
                                                <span className="text-[10px] font-bold text-[#64748B]">4.5 average ratings</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-1 pt-2">
                                        <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wide">Address</p>
                                        <p className="text-[14px] font-semibold text-[#1A1C1E]">123 Main St, Suite 100, New York, NY 10001</p>
                                    </div>
                                </div>

                                {/* Payment Details */}
                                <div className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 bg-[#F0FDF4] rounded-lg flex items-center justify-center text-[#22C55E]">
                                            <DollarSign className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[15px] font-black text-[#1A1C1E]">Payment Details</h3>
                                    </div>
                                    <div className="space-y-4 pt-1">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <span className="font-semibold text-[#64748B]">Service Charge</span>
                                            <span className="text-[#1A1C1E] font-black">$125.00</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[14px]">
                                            <span className="font-semibold text-[#64748B]">Platform Fee (15%)</span>
                                            <span className="text-[#1A1C1E] font-black">$18.75</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[14px]">
                                            <span className="font-semibold text-[#64748B]">Tax</span>
                                            <span className="text-[#1A1C1E] font-black">$11.25</span>
                                        </div>
                                        <div className="pt-4 mt-2 border-t border-dashed border-[#E2E8F0] flex justify-between items-center">
                                            <span className="text-[15px] font-black text-[#1A1C1E]">Total Amount</span>
                                            <span className="text-[20px] font-black text-[#1A1C1E]">$111.25</span>
                                        </div>
                                        <div className="pt-2 flex items-center justify-between">
                                            <div>
                                                <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wide mb-1 leading-none">Payment Method</p>
                                                <p className="text-[13px] font-black text-[#1A1C1E]">Credit Card ending in 4242</p>
                                            </div>
                                            <div className="bg-[#EAF7F1] text-[#27AE60] px-3 py-1 rounded-full text-[11px] font-black flex items-center gap-1">
                                                <CheckCircle2 className="w-3.5 h-3.5" /> Paid
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Notes & Comments */}
                                <div className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 bg-[#FEF3C7] rounded-lg flex items-center justify-center text-[#F59E0B]">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[15px] font-black text-[#1A1C1E]">Notes & Comments</h3>
                                    </div>
                                    <div className="bg-[#F8FAFC] p-5 rounded-[16px] relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[12px] font-bold text-[#64748B] uppercase tracking-wide">Client</span>
                                            <span className="text-[11px] font-bold text-[#94A3B8]">09:45 AM</span>
                                        </div>
                                        <p className="text-[14px] text-[#475569] font-medium leading-relaxed">
                                            Need hair styling for evening wedding ceremony. Prefer elegant updo style.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
