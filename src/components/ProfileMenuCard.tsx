"use client";

import { ReactNode } from "react";

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  onClick: () => void;
  variant?: "default" | "primary" | "danger";
}

export interface ProfileMenuCardProps {
  items: ProfileMenuItem[];
  className?: string;
}

export default function ProfileMenuCard({ items, className = "" }: ProfileMenuCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      <div className="divide-y divide-black/5">
        {items.map((item) => {
          const isPrimary = item.variant === "primary";
          const isDanger = item.variant === "danger";
          
          return (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`group w-full flex items-center gap-3 px-5 py-4 text-left transition-colors ${
                isPrimary
                  ? "bg-primary/5 text-primary hover:bg-primary/10"
                  : isDanger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-text-primary/70 hover:bg-black/3 hover:text-primary"
              }`}
            >
              <div className={`transition-colors ${isPrimary ? "text-primary" : isDanger ? "text-red-500" : "text-text-primary/50 group-hover:text-primary"}`}>
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
