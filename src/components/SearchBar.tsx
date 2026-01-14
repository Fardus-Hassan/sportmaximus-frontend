"use client";

import { useState, FormEvent } from "react";
import { Logo, SearchIcon } from "@/components/Icons";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search beauticians, services...",
  className = "",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch?.(value.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-[999px] bg-black/3 px-4 py-2.5 shadow-sm shadow-black/5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <Logo
          width={28}
          height={28}
          fill="currentColor"
          className="text-primary shrink-0"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 border-none bg-transparent text-sm text-text-primary placeholder:text-text-primary/40 focus:outline-none"
        />

        <button
          type="submit"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-sm hover:opacity-90 transition-opacity shrink-0"
          aria-label="Search"
        >
          <SearchIcon width={14} height={14} fill="#FFFFFF" />
        </button>
      </div>
    </form>
  );
}

