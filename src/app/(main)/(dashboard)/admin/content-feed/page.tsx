"use client";

import { useState } from "react";
import { Search, ChevronDown, Clock, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RoleGuard from "@/components/RoleGuard";
import DeleteContentModal from "@/components/admin/DeleteContentModal";
import Image from "next/image";

const feedData = [
    {
        id: 1,
        author: "Maya Patel",
        role: "Beautician",
        time: "2:00 PM",
        content: "Check out this amazing bridal makeup look I created today!",
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba495?q=80&w=400",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400"
        ]
    },
    {
        id: 2,
        author: "Maya Patel",
        role: "Beautician",
        time: "2:00 PM",
        content: "Check out this amazing bridal makeup look I created today!",
        images: [
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba495?q=80&w=400",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400"
        ]
    },
    {
        id: 3,
        author: "Maya Patel",
        role: "Beautician",
        time: "2:00 PM",
        content: "Check out this amazing bridal makeup look I created today!",
        images: [
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba495?q=80&w=400"
        ]
    },
    {
        id: 4,
        author: "Maya Patel",
        role: "Beautician",
        time: "2:00 PM",
        content: "Check out this amazing bridal makeup look I created today!",
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba495?q=80&w=400",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400"
        ]
    }
];

export default function ContentFeedPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleRemove = (id: number) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const confirmRemove = () => {
        console.log("Removing content:", selectedId);
        setIsModalOpen(false);
        setSelectedId(null);
    };

    return (
        <RoleGuard allowedRoles={["admin", "guest"]} fallbackUrl="/unauthorized">
            <div className="space-y-8 max-w-[1400px] mx-auto animate-in fade-in duration-700">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-8">Content feed</h1>

                {/* Search & Filter */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="relative flex-1 max-w-lg">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search ..."
                            className="w-full bg-white border border-gray-100 rounded-full pl-14 pr-6 py-4 text-sm font-bold text-gray-900 focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-6 py-4 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
                        Sort by <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {feedData.map((post) => (
                        <Card key={post.id} post={post} onRemove={() => handleRemove(post.id)} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between pt-10 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                        Showing
                        <select className="bg-gray-50 border-none rounded px-2 py-1 focus:ring-0 cursor-pointer">
                            <option>11</option>
                        </select>
                        out of 1,450
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-gray-50 group">
                            <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
                        </Button>
                        <button className="w-10 h-10 rounded-xl bg-primary text-white text-sm font-black shadow-lg shadow-primary/20">1</button>
                        <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-gray-900 text-sm font-black transition-all">2</button>
                        <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-gray-900 text-sm font-black transition-all">3</button>
                        <span className="text-gray-300 px-2">...</span>
                        <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-gray-900 text-sm font-black transition-all">16</button>
                        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-gray-50 group">
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
                        </Button>
                    </div>
                </div>
            </div>

            <DeleteContentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmRemove}
            />
        </RoleGuard>
    );
}

function Card({ post, onRemove }: { post: any; onRemove: () => void }) {
    return (
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Image
                        src="/model1.png"
                        width={64}
                        height={64}
                        alt={post.author}
                        className="w-16 h-16 rounded-[20px] object-cover"
                    />
                    <div>
                        <h3 className="text-[17px] font-black text-[#1A1C1E]">{post.author}</h3>
                        <p className="text-[13px] font-bold text-gray-400 mb-1">{post.role}</p>
                        <div className="flex items-center gap-1.5 text-[12px] font-black text-gray-900">
                            <Clock className="w-4 h-4 text-blue-500" /> {post.time}
                        </div>
                    </div>
                </div>
                <Button
                    variant="outline"
                    onClick={onRemove}
                    className="h-11 px-5 rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-white font-black text-[13px] gap-2 transition-all active:scale-95"
                >
                    <XCircle className="w-4 h-4" /> Remove
                </Button>
            </div>

            <p className="text-[15px] font-bold text-gray-600 mb-6 leading-relaxed">
                {post.content}
            </p>

            <div className="grid grid-cols-3 gap-4">
                {post.images.map((img: string, i: number) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-[20px]">
                        <Image
                            src={img}
                            fill
                            alt="Content"
                            className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
