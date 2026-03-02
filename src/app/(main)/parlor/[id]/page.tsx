"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import ParlorProfileHeader from "@/components/ParlorProfileHeader";
import ProfileMenuCard from "@/components/ProfileMenuCard";
import ServiceCard from "@/components/ServiceCard";
import TrendingServices from "@/components/TrendingServices";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, EditIcon, LogoutIcon, CalendarIcon, StarIcon, UserIcon } from "@/components/Icons";

const mockServices = [
  {
    id: "service-1",
    businessName: "Velora Beauty Lounge",
    businessAvatar: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    serviceTitle: "Bridal Makeup Package",
    serviceDescription: "Complete bridal transformation including makeup, hair styling, and touch-ups throughout the day.",
    media: [
      { type: "image" as const, url: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    price: "$250",
    likes: 3500,
    comments: 245,
    shares: 120,
  },
  {
    id: "service-2",
    businessName: "Velora Beauty Lounge",
    businessAvatar: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    serviceTitle: "Spa Day Package",
    serviceDescription: "Full day relaxation including massage, facial, manicure, pedicure, and refreshments.",
    media: [
      { type: "image" as const, url: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    price: "$180",
    likes: 2100,
    comments: 178,
    shares: 89,
  },
];

const mockBeauticians = [
  {
    id: "beautician-1",
    name: "Nila Akter",
    avatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    specialization: "Nail Technician",
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "beautician-2",
    name: "Sadia Rahman",
    avatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    specialization: "Makeup Artist",
    rating: 4.8,
    reviewCount: 234,
  },
  {
    id: "beautician-3",
    name: "Fatima Khan",
    avatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    specialization: "Hair Stylist",
    rating: 4.7,
    reviewCount: 189,
  },
];

const mockReviews = [
  {
    id: "review-1",
    userName: "Sarah Johnson",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Best salon in town! The ambiance is amazing and the staff is so professional.",
    date: "2 days ago",
  },
  {
    id: "review-2",
    userName: "Maria Garcia",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Had my bridal makeup done here. Absolutely loved the results!",
    date: "1 week ago",
  },
];

export default function ParlorProfilePage() {
  const { role } = useAuth();
  const [activeTab, setActiveTab] = useState<"services" | "beauticians" | "reviews" | "gallery">("services");
  const [currentPage, setCurrentPage] = useState(1);
  const isOwnProfile = role === "parlor";

  const menuItems = isOwnProfile ? [
    {
      id: "appointments",
      label: "Manage Appointments",
      icon: <CalendarIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Manage Appointments"),
      variant: "primary" as const,
    },
    {
      id: "earnings",
      label: "Earnings & Reports",
      icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Earnings"),
    },
    {
      id: "manage-team",
      label: "Manage Team",
      icon: <UserIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Manage Team"),
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: <EditIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Edit Profile"),
    },
    {
      id: "logout",
      label: "Log Out",
      icon: <LogoutIcon width={20} height={20} className="text-current" />,
      onClick: () => console.log("Logout"),
      variant: "danger" as const,
    },
  ] : [];

  const trendingServices = [
    { id: "1", serviceName: "Natural Makeup Service", providerName: "Velora Beauty Lounge" },
    { id: "2", serviceName: "Ombre Gel Nails", providerName: "Velora Beauty Lounge" },
    { id: "3", serviceName: "Bridal Makeup", providerName: "Velora Beauty Lounge" },
    { id: "4", serviceName: "Spa Pedicure", providerName: "Velora Beauty Lounge" },
    { id: "5", serviceName: "Acrylic Nails", providerName: "Velora Beauty Lounge" },
  ];

  return (
    <Container className="py-6 sm:py-8">
      <PageLayout
        layout="three-column"
        stickyRight={true}
        leftColumn={null}
        middleColumn={
          <div className="space-y-6">
            {/* Profile Header */}
            <ParlorProfileHeader
              name="Velora Beauty Lounge"
              avatar="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400"
              coverImage="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Premium beauty parlor offering a wide range of services including bridal makeup, hair styling, nail art, and spa treatments. Our skilled team ensures you leave feeling beautiful and confident."
              joinedDate="2019"
              location="Gulshan, Dhaka"
              rating={4.9}
              reviewCount={523}
              totalServices={45}
              totalBeauticians={12}
              workingHours="9:00 AM - 9:00 PM"
              isOwnProfile={isOwnProfile}
              isVerified={true}
              onEditProfile={() => console.log("Edit Profile")}
              onViewServices={() => console.log("View Services")}
              onContact={() => console.log("Contact")}
            />

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="flex border-b border-black/5 overflow-x-auto">
                {(["services", "beauticians", "reviews", "gallery"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 min-w-[100px] py-4 text-sm font-medium transition-colors capitalize whitespace-nowrap ${
                      activeTab === tab
                        ? "text-purple-500 border-b-2 border-purple-500"
                        : "text-text-primary/60 hover:text-text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-6">
                {activeTab === "services" && (
                  <div className="space-y-4">
                    {mockServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        {...service}
                        onBookNow={() => console.log("Book Now")}
                        onLike={() => console.log("Like")}
                        onComment={() => console.log("Comment")}
                        onShare={() => console.log("Share")}
                        onSave={() => console.log("Save")}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "beauticians" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mockBeauticians.map((beautician) => (
                      <div key={beautician.id} className="p-4 border border-black/5 rounded-xl hover:border-purple-200 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Image
                            src={beautician.avatar}
                            alt={beautician.name}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-text-primary">{beautician.name}</h4>
                            <p className="text-sm text-text-primary/60">{beautician.specialization}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <StarIcon width={14} height={14} fill="#FFD700" />
                              <span className="text-sm font-medium text-text-primary">{beautician.rating}</span>
                              <span className="text-xs text-text-primary/40">({beautician.reviewCount})</span>
                            </div>
                          </div>
                          <button className="px-3 py-1.5 bg-purple-500 text-white text-sm rounded-lg hover:opacity-90 transition-opacity">
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-4">
                    {mockReviews.map((review) => (
                      <div key={review.id} className="p-4 border border-black/5 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Image
                            src={review.userAvatar}
                            alt={review.userName}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-text-primary">{review.userName}</h4>
                              <span className="text-xs text-text-primary/40">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  width={14}
                                  height={14}
                                  fill={i < review.rating ? "#FFD700" : "#E5E7EB"}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-text-primary/70 mt-2">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "gallery" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden bg-black/5">
                        <Image
                          src={`https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400`}
                          alt={`Gallery ${i}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              totalItems={100}
              itemsPerPage={10}
              onPageChange={setCurrentPage}
            />
          </div>
        }
        rightColumn={
          <div className="space-y-4">
            {isOwnProfile && <ProfileMenuCard items={menuItems} />}
            <TrendingServices services={trendingServices} />
          </div>
        }
      />
    </Container>
  );
}
