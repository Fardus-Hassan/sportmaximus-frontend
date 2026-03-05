"use client";

import { Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EmptyStateProps {
    title: string;
    description?: string;
}

export default function EmptyState({
    title,
    description = "We are currently working hard to bring this feature to life. Please check back later!"
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 animate-in fade-in zoom-in duration-500">
            <div className="relative mb-6">
                <div className="absolute -inset-1 rounded-full bg-primary/20 blur-xl animate-pulse" />
                <div className="relative h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <Construction className="h-12 w-12 text-primary" />
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                {description}
            </p>

            <div className="flex items-center gap-4">
                <Link href="/admin">
                    <Button variant="default" className="gap-2 px-6">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Button>
                </Link>
                <Button variant="outline" className="px-6">Notify Me</Button>
            </div>
        </div>
    );
}
