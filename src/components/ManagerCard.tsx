"use client";

import Image from "next/image";
import { MailIcon } from "@/components/Icons";

export interface ManagerCardProps {
  name: string;
  role: string;
  avatar?: string;
  email: string;
  phone: string;
  className?: string;
}

export default function ManagerCard({
  name,
  role,
  avatar,
  email,
  phone,
  className = "",
}: ManagerCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Avatar */}
      <div className="relative h-[200px] w-full bg-gradient-to-r from-gray-100 to-gray-50">
        {avatar && (
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-base font-bold text-text-primary">{name}</h3>
        <p className="text-sm text-text-primary/60 mt-0.5">{role}</p>

        {/* Contact Info */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MailIcon width={16} height={16} className="text-text-primary/40" />
            <span className="text-text-primary/70">{email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-text-primary/40">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-text-primary/70">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
