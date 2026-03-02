"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import BeauticianProfileHeader from "@/components/BeauticianProfileHeader";
import ProfileMenuCard from "@/components/ProfileMenuCard";
import ServiceCard from "@/components/ServiceCard";
import TrendingServices from "@/components/TrendingServices";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon, CalendarIcon, StarIcon } from "@/components/Icons";

const mockServices = [
  {
    id: "service-1",
    businessName: "Nila Akter",
    businessAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    serviceTitle: "Gel Manicure",
    serviceDescription: "Beautiful gel nail art with long-lasting finish. Perfect for any occasion!",
    media: [
      { type: "image" as const, url: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    price: "$35",
    likes: 1200,
    comments: 89,
    shares: 45,
  },
  {
    id: "service-2",
    businessName: "Nila Akter",
    businessAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    serviceTitle: "Bridal Nail Art",
    serviceDescription: "Exclusive bridal nail designs with premium quality products.",
    media: [
      { type: "image" as const, url: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ],
    price: "$75",
    likes: 2300,
    comments: 156,
    shares: 78,
  },
];

const mockReviews = [
  {
    id: "review-1",
    userName: "Sarah Johnson",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Amazing service! Nila is so talented and professional. My nails look absolutely stunning!",
    date: "2 days ago",
  },
  {
    id: "review-2",
    userName: "Maria Garcia",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Best nail artist in town! Highly recommend her bridal package.",
    date: "1 week ago",
  },
];

export default function BeauticianProfilePage() {
  const { role } = useAuth();
  const [activeTab, setActiveTab] = useState<"services" | "reviews" | "portfolio">("services");
  const [currentPage, setCurrentPage] = useState(1);
  const isOwnProfile = role === "beautician";

  const menuItems = isOwnProfile ? [
    {
      id: "my-schedule",
      label: "My Schedule",
      icon: <CalendarIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("My Schedule"),
      variant: "primary" as const,
    },
    {
      id: "my-earnings",
      label: "My Earnings",
      icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("My Earnings"),
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
            <BeauticianProfileHeader
              name="Nila Akter"
              avatar="https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400"
              coverImage="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1200"
              specialization="Nail Technician • Bridal & Acrylic Expert"
              description="Certified nail artist with 5+ years of experience. Specializing in bridal and acrylic nails. Available for home service."
              joinedDate="Jan 2020"
              location="Dhaka, Bangladesh"
              rating={4.9}
              reviewCount={156}
              totalServices={12}
              totalClients={450}
              parlorName="Velora Beauty Lounge"
              isOwnProfile={isOwnProfile}
              isVerified={true}
              onEditProfile={() => console.log("Edit Profile")}
              onBookNow={() => console.log("Book Now")}
              onMessage={() => console.log("Message")}
            />

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="flex border-b border-black/5">
                {(["services", "reviews", "portfolio"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm font-medium transition-colors capitalize ${
                      activeTab === tab
                        ? "text-green-500 border-b-2 border-green-500"
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

                {activeTab === "portfolio" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden bg-black/5">
                        <Image
                          src={`https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400`}
                          alt={`Portfolio ${i}`}
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
