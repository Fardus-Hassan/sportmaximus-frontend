// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Container from "@/components/shared/Container";
// import {
//   BellIcon,
//   Logo,
//   MailIcon,
//   MenuIcon,
//   CloseIcon,
//   StarIcon,
//   LocationIcon,
//   UserIcon,
//   BookmarkIcon,
//   EditIcon,
//   DocumentIcon,
// } from "@/components/Icons";

// const navItems = ["Home", "Services", "Beauticians", "Appointments"] as const;

// // Mock profile data - replace with actual data
// const mockProfile = {
//   name: "John Doe",
//   avatar:
//     "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
//   location: "New York, NY",
//   rating: {
//     value: 4.8,
//     count: 124,
//   },
//   distance: "2.5 km",
//   description:
//     "Professional beautician with 5+ years of experience in nail art and styling.",
// };

// const menuItems = [
//   {
//     id: "bookmarks",
//     label: "Bookmarks",
//     icon: <BookmarkIcon width={20} height={20} fill="currentColor" />,
//   },
//   {
//     id: "edit",
//     label: "Edit Profile",
//     icon: <EditIcon width={20} height={20} fill="currentColor" />,
//   },

//   // { id: "documents", label: "Documents", icon: <DocumentIcon width={20} height={20} fill="currentColor" /> },
// ];

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <>
//       <header className="w-full bg-white border-b border-black/10 fixed top-0 left-0 right-0 z-50">
//         <Container className="h-16 flex items-center justify-between">
//           {/* Left: Logo */}
//           <div className="flex items-center gap-3 xl:w-[25%]">
//             <Logo
//               width={28}
//               height={28}
//               fill="currentColor"
//               className="text-primary"
//             />
//             <span className="text-lg font-semibold tracking-tight text-primary">
//               Beautiworx
//             </span>
//           </div>

//           {/* Middle: Nav */}
//           <nav className="hidden lg:flex items-center justify-center gap-10 xl:w-[50%]">
//             {navItems.map((label) => {
//               const isActive = label === "Home";
//               return (
//                 <Link
//                   key={label}
//                   href="#"
//                   className={[
//                     "text-sm font-medium transition-colors",
//                     isActive
//                       ? "text-text-primary font-semibold"
//                       : "text-text-primary/60 hover:text-text-primary",
//                   ].join(" ")}>
//                   {label}
//                   {isActive && (
//                     <span className="block h-[3px] w-full bg-primary rounded" />
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right: Actions */}
//           <div className="flex justify-end items-center gap-4 xl:w-[25%]">
//             <button
//               type="button"
//               className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors cursor-pointer"
//               aria-label="Messages">
//               <MailIcon className="h-5 w-5" />
//             </button>

//             <button
//               type="button"
//               className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors cursor-pointer"
//               aria-label="Notifications">
//               <BellIcon className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-white">
//                 12
//               </span>
//             </button>

//             <Link
//               href="/auth/signup"
//               className="hidden sm:inline-flex text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors">
//               Sign Up
//             </Link>

//             <Link
//               href="/auth/login"
//               className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
//               Log In
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary hover:bg-primary/20 transition-colors"
//               aria-label="Open menu">
//               <MenuIcon width={20} height={20} />
//             </button>
//           </div>
//         </Container>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />

//           {/* Mobile Menu */}
//           <div
//             className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-70 lg:hidden shadow-2xl mobile-menu-enter flex flex-col`}>
//             {/* Header */}
//             {/* <div className="flex items-center justify-between pl-4 pr-2 py-2 border-b border-black/10 shrink-0">
//               <span className="text-lg font-semibold text-text-primary">Menu</span>
//               <button
//                 type="button"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="p-2 rounded-full hover:bg-black/5 transition-colors"
//                 aria-label="Close menu"
//               >
//                 <CloseIcon width={24} height={24} stroke="currentColor" className="text-text-primary" />
//               </button>
//             </div> */}

//             {/* Profile Section - Fixed */}
//             <div className="p-4 border-b border-black/10 shrink-0">
//               <div className="bg-white rounded-lg overflow-hidden">
//                 {/* Avatar */}
//                 <div className="flex items-start gap-4">
//                   {mockProfile.avatar ? (
//                     <Image
//                       src={mockProfile.avatar}
//                       alt={mockProfile.name}
//                       width={64}
//                       height={64}
//                       className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
//                     />
//                   ) : (
//                     <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
//                       <UserIcon width={32} height={32} fill="#E32750" />
//                     </div>
//                   )}

//                   <div className="flex-1 pt-1">
//                     <h3 className="text-base font-bold text-text-primary">
//                       {mockProfile.name}
//                     </h3>

//                     {/* Rating */}
//                     {mockProfile.rating && (
//                       <div className="flex items-center gap-1 mt-1">
//                         <StarIcon width={14} height={14} fill="#FFD700" />
//                         <span className="text-xs text-text-primary">
//                           {mockProfile.rating.value} ({mockProfile.rating.count}{" "}
//                           reviews)
//                         </span>
//                       </div>
//                     )}

//                     {/* Location */}
//                     {mockProfile.location && (
//                       <div className="flex items-center gap-1 mt-1">
//                         <LocationIcon width={14} height={14} fill="#E32750" />
//                         <span className="text-xs text-text-primary">
//                           {mockProfile.location}
//                           {mockProfile.distance && ` • ${mockProfile.distance}`}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Description */}
//                 {mockProfile.description && (
//                   <div className="mt-3 p-3 bg-black/3 rounded-lg">
//                     <p className="text-xs text-text-primary/70 leading-relaxed">
//                       {mockProfile.description}
//                     </p>
//                   </div>
//                 )}

//                 {/* View Profile Button */}
//                 <button
//                   onClick={() => {
//                     console.log("View Profile");
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full mt-3 py-2 px-4 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
//                   View Profile
//                 </button>
//               </div>
//             </div>

//             {/* Scrollable Navigation and Menu Items */}
//             <div className="flex-1 overflow-y-auto min-h-0">
//               {/* Navigation Items */}
//               <div className="p-2">
//                 <div className="space-y-1">
//                   {navItems.map((label) => {
//                     const isActive = label === "Home";
//                     return (
//                       <Link
//                         key={label}
//                         href="#"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                         className={[
//                           "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
//                           isActive
//                             ? "bg-primary/10 text-primary"
//                             : "text-text-primary/70 hover:bg-black/5 hover:text-text-primary",
//                         ].join(" ")}>
//                         {label}
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Menu Items */}
//               <div className="p-2 border-t border-black/10 mt-2">
//                 <div className="space-y-1">
//                   {menuItems.map((item) => (
//                     <button
//                       key={item.id}
//                       onClick={() => {
//                         console.log(item.label);
//                         setIsMobileMenuOpen(false);
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-text-primary/70 hover:bg-black/5 hover:text-text-primary transition-colors text-left">
//                       <div className="text-text-primary/50">{item.icon}</div>
//                       <span>{item.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Footer Actions */}
//             <div className="p-4 border-t flex justify-center items-center border-black/10 shrink-0">
//               <Link
//                 href="/auth/signup"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block text-center w-full rounded-lg text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors">
//                 Sign Up
//               </Link>
//               <Link
//                 href="/auth/login"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block text-center py-2.5 px-4 w-full rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity">
//                 Log In
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// ===========================================================================//
// ===========================================================================//

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  BellIcon,
  Logo,
  MailIcon,
  MenuIcon,
  StarIcon,
  LocationIcon,
  UserIcon,
  BookmarkIcon,
  EditIcon,
} from "@/components/Icons";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface Rating {
  value: number;
  count: number;
}

interface Profile {
  name: string;
  avatar: string;
  location: string;
  rating: Rating;
  distance: string;
  description: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

// Constants
const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/user" },
  { label: "Services", href: "/user/services" },
  { label: "Beauticians", href: "/beauticians" },
  { label: "Appointments", href: "/appointments" },
] as const;

// Mock profile data - replace with actual data from context/API
const MOCK_PROFILE: Profile = {
  name: "John Doe",
  avatar:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  location: "New York, NY",
  rating: {
    value: 4.8,
    count: 124,
  },
  distance: "2.5 km",
  description:
    "Professional beautician with 5+ years of experience in nail art and styling.",
};

const MENU_ITEMS: readonly MenuItem[] = [
  {
    id: "bookmarks",
    label: "Bookmarks",
    icon: <BookmarkIcon width={20} height={20} fill="currentColor" />,
    href: "/bookmarks",
  },
  {
    id: "edit",
    label: "Edit Profile",
    icon: <EditIcon width={20} height={20} fill="currentColor" />,
    href: "/profile/edit",
  },
] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Open mobile menu
  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

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

  // Handle click outside menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Handle navigation
  const handleNavigation = useCallback(
    (href: string) => {
      setActiveRoute(href);
      closeMobileMenu();
    },
    [closeMobileMenu],
  );

  // Handle menu item click
  const handleMenuItemClick = useCallback(
    (item: MenuItem) => {
      console.log(`${item.label} clicked`);
      closeMobileMenu();
      // Add navigation logic here
      // router.push(item.href);
    },
    [closeMobileMenu],
  );

  // Handle view profile
  const handleViewProfile = useCallback(() => {
    console.log("View Profile");
    closeMobileMenu();
    // Add navigation logic here
    // router.push('/profile');
  }, [closeMobileMenu]);

  return (
    <>
      <header className="w-full bg-white border-b border-black/10 fixed top-0 left-0 right-0 z-50">
        <Container className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 xl:w-[25%]">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Beautiworx Home">
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
          </div>

          {/* Middle: Nav */}
          <nav
            className="hidden lg:flex items-center justify-center gap-10 xl:w-[50%]"
            aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeRoute === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={[
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-text-primary font-semibold"
                      : "text-text-primary/60 hover:text-text-primary",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}>
                  {item.label}
                  {isActive && (
                    <span className="block h-0.75 w-full bg-primary rounded" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex justify-end items-center gap-4 xl:w-[25%]">
            <Link
              href="/messages"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors cursor-pointer"
              aria-label="Messages">
              <MailIcon className="h-5 w-5" />
            </Link>

            <Link
              href="/notifications"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary/70 hover:text-text-primary hover:bg-black/3 transition-colors cursor-pointer"
              aria-label="Notifications">
              <BellIcon className="h-5 w-5" />
              <span
                className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-white"
                aria-label="12 unread notifications">
                12
              </span>
            </Link>

            <Link
              href="/auth/signup"
              className="hidden sm:inline-flex text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors">
              Sign Up
            </Link>

            <Link
              href="/auth/login"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
              Log In
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={openMobileMenu}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-text-primary hover:bg-primary/20 transition-colors"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu">
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
            className="fixed inset-0 bg-black/50 z-60 lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-70 lg:hidden shadow-2xl mobile-menu-enter flex flex-col`}>
            {/* Profile Section - Fixed */}
            <div className="p-4 border-b border-black/10 shrink-0">
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Avatar */}
                <div className="flex items-start gap-4">
                  {MOCK_PROFILE.avatar ? (
                    <Image
                      src={MOCK_PROFILE.avatar}
                      alt={MOCK_PROFILE.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      priority
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <UserIcon width={32} height={32} fill="#E32750" />
                    </div>
                  )}

                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-bold text-text-primary">
                      {MOCK_PROFILE.name}
                    </h3>

                    {/* Rating */}
                    {MOCK_PROFILE.rating && (
                      <div className="flex items-center gap-1 mt-1">
                        <StarIcon
                          width={14}
                          height={14}
                          fill="#FFD700"
                          aria-hidden="true"
                        />
                        <span className="text-xs text-text-primary">
                          {MOCK_PROFILE.rating.value} (
                          {MOCK_PROFILE.rating.count} reviews)
                        </span>
                      </div>
                    )}

                    {/* Location */}
                    {MOCK_PROFILE.location && (
                      <div className="flex items-center gap-1 mt-1">
                        <LocationIcon
                          width={14}
                          height={14}
                          fill="#E32750"
                          aria-hidden="true"
                        />
                        <span className="text-xs text-text-primary">
                          {MOCK_PROFILE.location}
                          {MOCK_PROFILE.distance &&
                            ` • ${MOCK_PROFILE.distance}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {MOCK_PROFILE.description && (
                  <div className="mt-3 p-3 bg-black/3 rounded-lg">
                    <p className="text-xs text-text-primary/70 leading-relaxed">
                      {MOCK_PROFILE.description}
                    </p>
                  </div>
                )}

                {/* View Profile Button */}
                <button
                  onClick={handleViewProfile}
                  className="w-full mt-3 py-2 px-4 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
                  View Profile
                </button>
              </div>
            </div>

            {/* Scrollable Navigation and Menu Items */}
            <div className="flex-1 overflow-y-auto min-h-0">
              {/* Navigation Items */}
              <nav className="p-2" aria-label="Mobile navigation">
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeRoute === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={[
                          "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-text-primary/70 hover:bg-black/5 hover:text-text-primary",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Menu Items */}
              <div className="p-2 border-t border-black/10 mt-2">
                <div className="space-y-1">
                  {MENU_ITEMS.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => handleMenuItemClick(item)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-text-primary/70 hover:bg-black/5 hover:text-text-primary transition-colors text-left">
                      <div className="text-text-primary/50" aria-hidden="true">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t flex justify-center items-center border-black/10 shrink-0">
              <Link
                href="/auth/signup"
                onClick={closeMobileMenu}
                className="block text-center w-full rounded-lg text-sm font-medium text-text-primary/70 hover:text-text-primary transition-colors">
                Sign Up
              </Link>
              <Link
                href="/auth/login"
                onClick={closeMobileMenu}
                className="block text-center py-2.5 px-4 w-full rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                Log In
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
