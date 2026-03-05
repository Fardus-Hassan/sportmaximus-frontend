import { Menu, Bell, Search, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
    onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md px-4 lg:px-8">
            {/* Left side: Mobile Toggle */}
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={onMenuClick}
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </div>

            {/* Right side: Actions & Profile */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="relative w-10 h-10 bg-pink-50 text-primary border-none rounded-xl">
                        <Mail className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative w-10 h-10 bg-pink-50 text-primary border-none rounded-xl">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-4 w-4 rounded-full bg-primary text-[10px] font-black text-white flex items-center justify-center border-2 border-white">12</span>
                    </Button>
                </div>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-black text-gray-900 leading-tight">Rich Asia</p>
                        <p className="text-[11px] font-bold text-gray-400">Admin</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                            <User className="h-5 w-5 text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
