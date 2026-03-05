"use client";

import { AlertCircle, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteContentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function DeleteContentModal({ isOpen, onClose, onConfirm }: DeleteContentModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[400px] p-10 rounded-[24px] border-none shadow-2xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                    <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">i</span>
                    </div>
                </div>

                <h2 className="text-[22px] font-bold text-[#1A1C1E] leading-tight mb-8">
                    Are you sure you want to delete this content?
                </h2>

                <div className="grid grid-cols-2 gap-4 w-full pt-2">
                    <Button
                        onClick={onConfirm}
                        className="h-[52px] rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/10 transition-all"
                    >
                        Remove
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="h-[52px] rounded-xl border-[#64748B]/20 text-[#64748B] font-bold text-sm hover:bg-gray-50 transition-all"
                    >
                        Cancel
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
