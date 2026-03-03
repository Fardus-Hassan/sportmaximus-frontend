"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import ProfileMenuCard from "@/components/ProfileMenuCard";
import SearchBar from "@/components/SearchBar";
import TrendingServices from "@/components/TrendingServices";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon, StarIcon } from "@/components/Icons";

const mockBeauticians = [
  {
    id: "1",
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    role: "Nail Technician",
    parlorName: "Velora Beauty Lounge",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    role: "Nail Technician",
    parlorName: "Velora Beauty Lounge",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    role: "Nail Technician",
    parlorName: "Velora Beauty Lounge",
  },
  {
    id: "4",
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    role: "Nail Technician",
    parlorName: "Velora Beauty Lounge",
  },
];

const trendingServices = [
  { id: "1", serviceName: "Natural Makeup Service", providerName: "Velora Beauty Lounge" },
  { id: "2", serviceName: "Ombre Gel Nails", providerName: "Velora Beauty Lounge" },
  { id: "3", serviceName: "Bridal Makeup", providerName: "Velora Beauty Lounge" },
  { id: "4", serviceName: "Spa Pedicure", providerName: "Velora Beauty Lounge" },
  { id: "5", serviceName: "Acrylic Nails", providerName: "Velora Beauty Lounge" },
];

export default function BeauticiansPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    {
      id: "transaction-history",
      label: "Transaction History",
      icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
      onClick: () => router.push("/checkout"),
    },
    {
      id: "bookmarks",
      label: "Bookmarks",
      icon: <BookmarkIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Bookmarks"),
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: <EditIcon width={20} height={20} fill="currentColor" />,
      onClick: () => router.push("/profile/edit"),
    },
    {
      id: "logout",
      label: "Log Out",
      icon: <LogoutIcon width={20} height={20} className="text-current" />,
      onClick: logout,
    },
  ];

  const leftContent = (
    <div className="space-y-6 md:block hidden">
      {/* Compact profile card: banner + avatar + name + location + description + View Profile */}
      <div className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
        <div className="relative h-28 sm:h-32 w-full bg-gradient-to-r from-primary/20 to-primary/10">
          <Image
            src="https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Cover"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative px-4 pb-4">
          <div className="relative -mt-12 flex justify-center sm:justify-start">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-black/5">
              <Image
                src={user?.avatar || "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400"}
                alt="Profile"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <h2 className="text-center sm:text-left font-semibold text-text-primary text-lg mt-3">
            {user ? `${user.firstName} ${user.lastName}` : "Sara Chen"}
          </h2>
          <p className="text-center sm:text-left text-sm text-text-primary/60 mt-0.5">
            Dhaka, Bangladesh
          </p>
          <p className="text-sm text-text-primary/70 mt-2 leading-relaxed">
            Where modern beauty meets neo precision, comfort, confidence, and personalized care.
          </p>
          <Link
            href="/profile"
            className="mt-4 w-full inline-block text-center py-2.5 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
      <ProfileMenuCard items={menuItems} />
    </div>
  );

  return (
    <Container className="py-6 sm:py-8 mt-12">
      {/* <div className="md:hidden mb-6">{leftContent}</div> */}
      <PageLayout
        layout="three-column"
        stickyLeft={true}
        stickyRight={true}
        leftColumn={leftContent}
        middleColumn={
          <div className="space-y-6">
            <div className="mb-6 p-5 shadow-lg rounded-xl bg-white sm:mt-0 -mt-5">
            <SearchBar
              placeholder="Search beauticians, services..."
              onSearch={(value) => setSearchQuery(value)}
                className="max-w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {mockBeauticians.map((beautician) => (
                <div
                  key={beautician.id}
                  className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-black/5">
                    <Image
                      src={beautician.image}
                      alt={beautician.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-text-primary/60 shadow-sm hover:text-primary hover:bg-white transition-colors"
                      aria-label="Save"
                    >
                      <BookmarkIcon width={18} height={18} />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-semibold text-text-primary">
                        {beautician.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <StarIcon width={16} height={16} fill="#FFD700" />
                        <span className="text-sm font-medium text-text-primary">
                          {beautician.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-text-primary/60 mb-2">{beautician.role}</p>
                    <div className="flex items-center gap-1.5 text-sm text-text-primary/60 mb-4">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{beautician.parlorName}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => router.push(`/beautician/${beautician.id}`)}
                      className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
        rightColumn={
          <TrendingServices services={trendingServices} />
        }
      />
    </Container>
  );
}
