"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { BellIcon, Logo, MailIcon, MenuIcon, StarIcon, LocationIcon, UserIcon, BookmarkIcon, EditIcon } from "@/components/Icons";

type UserRole = "user" | "parlor" | "beautician" | "admin";

interface NavItem {
  label: string;
  href: string;
}

const roleNavItems: Record<UserRole, NavItem[]> = {
  user: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Beauticians", href: "/beauticians" },
    { label: "My Bookings", href: "/bookings" },
  ],
  parlor: [
    { label: "Dashboard", href: "/parlor" },
    { label: "Bookings", href: "/parlor/bookings" },
    { label: "Team", href: "/parlor/team" },
    { label: "Services", href: "/parlor/services" },
  ],
  beautician: [
    { label: "Dashboard", href: "/beautician" },
    { label: "Schedule", href: "/beautician/schedule" },
    { label: "Portfolio", href: "/beautician/portfolio" },
    { label: "Earnings", href: "/beautician/earnings" },
  ],
  admin: [
    { label: "Dashboard", href: "/admin" },
    { label: "Users", href: "/admin/users" },
    { label: "Parlors", href: "/admin/parlors" },
    { label: "Reports", href: "/admin/reports" },
  ],
};

const mockProfile = {
  name: "John Doe",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  location: "New York, NY",
  rating: {
    value: 4.8,
    count: 124,
  },
  distance: "2.5 km",
  description: "Professional beautician with 5+ years of experience in nail art and styling.",
};

const menuItems = [
  { id: "bookmarks", label: "Bookmarks", icon: <BookmarkIcon width={20} height={20} fill="currentColor" /> },
  { id: "edit", label: "Edit Profile", icon: <EditIcon width={20} height={20} fill="currentColor" /> },
];

function getCurrentRole(pathname: string): UserRole {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/parlor")) return "parlor";
  // Only treat `/beautician/...` detail/dashboard routes as beautician,
  // keep `/beauticians` listing under the default user navigation.
  // if (pathname.startsWith("/beautician/")) return "beautician";
  return "user";
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole>("user");

  useEffect(() => {
    setCurrentRole(getCurrentRole(pathname));
  }, [pathname]);

  const navItems = roleNavItems[currentRole];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white border-b border-black/10 fixed top-0 left-0 right-0 z-50">
        <Container className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 xl:w-[25%] hover:opacity-90 transition-opacity">
            <Logo
              width={28}
              height={28}
              fill="currentColor"
              className="text-primary"
            />
            <span className="text-lg font-semibold tracking-tight text-primary">
              Beautiworx
            </span>
          </Link>

          {/* Middle: Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-10 xl:w-[50%]">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-text-primary font-semibold"
                      : "text-text-primary/60 hover:text-text-primary",
                  ].join(" ")}
                >
                  {item.label}
                  {isActive && (
                    <span className="block h-[3px] w-full bg-primary rounded" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex justify-end items-center gap-4 xl:w-[25%]">
            {/* Role Badge */}
            {/* <div className="hidden lg:flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                currentRole === "admin" ? "bg-red-100 text-red-700" :
                currentRole === "parlor" ? "bg-purple-100 text-purple-700" :
                currentRole === "beautician" ? "bg-green-100 text-green-700" :
                "bg-blue-100 text-blue-700"
              }`}>
                {currentRole}
              </span>
            </div> */}

            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors cursor-pointer"
              aria-label="Messages"
            >
              <MailIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <BellIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-white">
                12
              </span>
            </button>

            <Link
              href="/auth/signup"
              className="hidden sm:inline-flex text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors"
            >
              Sign Up
            </Link>

            <Link
              href="/auth/login"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Log In
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary hover:bg-primary/20 transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon width={20} height={20} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-70 lg:hidden shadow-2xl mobile-menu-enter flex flex-col`}
          >
            {/* Header */}
            {/* <div className="flex items-center justify-between pl-4 pr-2 py-2 border-b border-black/10 shrink-0">
              <span className="text-lg font-semibold text-text-primary">Menu</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon width={24} height={24} stroke="currentColor" className="text-text-primary" />
              </button>
            </div> */}

            {/* Profile Section - Fixed */}
            <div className="p-4 border-b border-black/10 shrink-0">
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Avatar */}
                <div className="flex items-start gap-4">
                  {mockProfile.avatar ? (
                    <Image
                      src={mockProfile.avatar}
                      alt={mockProfile.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <UserIcon width={32} height={32} fill="#E32750" />
                    </div>
                  )}

                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-bold text-text-primary">{mockProfile.name}</h3>

                    {/* Rating */}
                    {mockProfile.rating && (
                      <div className="flex items-center gap-1 mt-1">
                        <StarIcon width={14} height={14} fill="#FFD700" />
                        <span className="text-xs text-text-primary">
                          {mockProfile.rating.value} ({mockProfile.rating.count} reviews)
                        </span>
                      </div>
                    )}

                    {/* Location */}
                    {mockProfile.location && (
                      <div className="flex items-center gap-1 mt-1">
                        <LocationIcon width={14} height={14} fill="#E32750" />
                        <span className="text-xs text-text-primary">
                          {mockProfile.location}
                          {mockProfile.distance && ` • ${mockProfile.distance}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {mockProfile.description && (
                  <div className="mt-3 p-3 bg-black/3 rounded-lg">
                    <p className="text-xs text-text-primary/70 leading-relaxed">
                      {mockProfile.description}
                    </p>
                  </div>
                )}

                {/* View Profile Button */}
                <button
                  onClick={() => {
                    console.log("View Profile");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-3 py-2 px-4 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>

            {/* Scrollable Navigation and Menu Items */}
            <div className="flex-1 overflow-y-auto min-h-0">
              {/* Navigation Items */}
              <div className="p-2">
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || 
                      (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={[
                          "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-text-primary/70 hover:bg-black/5 hover:text-text-primary",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Role Switcher (Demo) */}
              {/* <div className="p-2 border-t border-black/10 mt-2">
                <p className="px-4 py-2 text-xs font-semibold text-text-primary/40 uppercase">Switch Role (Demo)</p>
                <div className="space-y-1">
                  {(["user", "parlor", "beautician", "admin"] as UserRole[]).map((role) => (
                    <Link
                      key={role}
                      href={role === "user" ? "/" : `/${role}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={[
                        "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize",
                        currentRole === role
                          ? "bg-primary/10 text-primary"
                          : "text-text-primary/70 hover:bg-black/5 hover:text-text-primary",
                      ].join(" ")}
                    >
                      {role === "user" ? "User" : role === "parlor" ? "Parlor" : role === "beautician" ? "Beautician" : "Admin"}
                    </Link>
                  ))}
                </div>
              </div> */}

              {/* Menu Items */}
              <div className="p-2 border-t border-black/10 mt-2">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        console.log(item.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-text-primary/70 hover:bg-black/5 hover:text-text-primary transition-colors text-left"
                    >
                      <div className="text-text-primary/50">{item.icon}</div>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t flex justify-center items-center border-black/10 shrink-0">
              <Link
                href="/auth/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full rounded-lg text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-2.5 px-4 w-full rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Log In
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

