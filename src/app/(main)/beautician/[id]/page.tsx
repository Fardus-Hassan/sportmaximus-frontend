"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import ServiceGridCard from "@/components/ServiceGridCard";
import ReviewForm from "@/components/ReviewForm";
import ReviewCard from "@/components/ReviewCard";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/contexts/AuthContext";
import { StarIcon, BookmarkIcon } from "@/components/Icons";

const BEAUTICIAN = {
  name: "Sarah Johnson",
  avatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  specialties: "Nail Technician • Bridal & Acrylic",
  parlorName: "Velora Beauty Lounge",
  former: "Former Beautician at Beauty Lounge",
  rating: 4.9,
  reviewCount: 124,
  location: "Dhaka • 4.5 km",
  isOnline: true,
};

const SERVICES_OFFERED = [
  { id: "s1", serviceName: "French Tips", serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "s2", serviceName: "Pedicure", serviceImage: "https://images.pexels.com/photos/3738363/pexels-photo-3738363.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "s3", serviceName: "Nail Extensions", serviceImage: "https://images.pexels.com/photos/3738361/pexels-photo-3738361.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "s4", serviceName: "Gel Manicure", serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "s5", serviceName: "Acrylic Nails", serviceImage: "https://images.pexels.com/photos/3738346/pexels-photo-3738346.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "s6", serviceName: "Nail Art", serviceImage: "https://images.pexels.com/photos/3738366/pexels-photo-3738366.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
];

const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738347/pexels-photo-3738347.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738346/pexels-photo-3738346.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738363/pexels-photo-3738363.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738361/pexels-photo-3738361.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
];

const WEEKLY_AVAILABILITY = [
  { day: "Saturday", time: "10:00AM - 09:00PM", available: true },
  { day: "Weekend", time: "—", available: false },
  { day: "Monday", time: "10:00AM - 09:00PM", available: true },
  { day: "Tuesday", time: "10:00AM - 09:00PM", available: true },
  { day: "Wednesday", time: "10:00AM - 09:00PM", available: true },
  { day: "Thursday", time: "10:00AM - 09:00PM", available: true },
  { day: "Friday", time: "10:00AM - 09:00PM", available: true },
];

const EXPERTISE = [
  "8+ years professional experience.",
  "Trained in modern beauty techniques.",
  "Personalized client solutions.",
  "Clean and hygienic service standards.",
];

const RELATED_SERVICES = [
  { id: "r1", serviceName: "French Tips", serviceImage: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "r2", serviceName: "Nail Art", serviceImage: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
  { id: "r3", serviceName: "Nail Art", serviceImage: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400", price: "$30", providerName: "Velora Beauty Lounge", description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks." },
];

const MOCK_REVIEWS = [
  { id: "rev1", userName: "Sophia Clark", userEmail: "sophiaclark003@gmail.com", userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100", rating: 4, comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process." },
  { id: "rev2", userName: "Sophia Clark", userEmail: "sophiaclark003@gmail.com", userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100", rating: 4, comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process." },
  { id: "rev3", userName: "Sophia Clark", userEmail: "sophiaclark003@gmail.com", userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100", rating: 4, comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process." },
];

export default function BeauticianProfilePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [saved, setSaved] = useState(false);
  const totalReviews = 156;
  const itemsPerPage = 11;
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const sidebarBlock = (
    <div className="space-y-6">
      {/* Weekly Availability */}
      <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5">
        <h3 className="text-base font-bold text-text-primary mb-4">Weekly Availability</h3>
        <ul className="space-y-2">
          {WEEKLY_AVAILABILITY.map((item) => (
            <li key={item.day} className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-sm text-text-primary/80">{item.day}</span>
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${item.available ? "bg-green-100 text-green-800" : "bg-primary/10 text-text-primary/70"}`}>
                {item.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Experience & Expertise */}
      <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5">
        <h3 className="text-base font-bold text-text-primary mb-4">Experience & Expertise</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-text-primary/80">
            <span className="text-primary mt-0.5 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </span>
            {EXPERTISE[0]}
          </li>
          <li className="flex items-start gap-2 text-sm text-text-primary/80">
            <span className="text-primary mt-0.5 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </span>
            {EXPERTISE[1]}
          </li>
          <li className="flex items-start gap-2 text-sm text-text-primary/80">
            <span className="text-primary mt-0.5 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </span>
            {EXPERTISE[2]}
          </li>
          <li className="flex items-start gap-2 text-sm text-text-primary/80">
            <span className="text-primary mt-0.5 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </span>
            {EXPERTISE[3]}
          </li>
        </ul>
      </div>
      {/* You may also like */}
      <div>
        <h3 className="text-base font-bold text-text-primary mb-4">You may also like</h3>
        <div className="space-y-4">
          {RELATED_SERVICES.map((s) => (
            <ServiceGridCard
              key={s.id}
              {...s}
              onBookNow={() => router.push(`/services/${s.id}`)}
              onMessage={() => {}}
              onSave={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Container className="py-6 sm:py-8 mt-12">
      {/* Profile header - full width */}
      <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 sm:p-6 mb-6 md:hidden block">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1">
            <div className="relative shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-black/5 border-2 border-white shadow-md">
                <Image src={BEAUTICIAN.avatar} alt={BEAUTICIAN.name} fill className="object-cover" unoptimized />
              </div>
              {BEAUTICIAN.isOnline && (
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" aria-hidden />
              )}
            </div>
            <div className="text-center sm:text-left flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{BEAUTICIAN.name}</h1>
              <p className="text-sm text-text-primary/70 mt-1">{BEAUTICIAN.specialties}</p>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-text-primary/60">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span>{BEAUTICIAN.parlorName}</span>
              </div>
              <p className="text-sm text-text-primary/50 mt-0.5">{BEAUTICIAN.former}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                <span className="flex items-center gap-1 text-sm font-medium text-text-primary">
                  <StarIcon width={16} height={16} fill="#FFD700" />
                  {BEAUTICIAN.rating} ({BEAUTICIAN.reviewCount} reviews)
                </span>
                <span className="flex items-center gap-1 text-sm text-text-primary/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {BEAUTICIAN.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2 shrink-0">
            <button type="button" className="p-2.5 rounded-lg border border-black/10 text-text-primary/60 hover:text-primary hover:bg-primary/5 transition-colors" aria-label="Message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </button>
            <button type="button" onClick={() => setSaved(!saved)} className={`p-2.5 rounded-lg border transition-colors ${saved ? "border-primary bg-primary/10 text-primary" : "border-black/10 text-text-primary/60 hover:text-primary hover:bg-primary/5"}`} aria-label="Save">
              <BookmarkIcon width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: sidebar content on top */}
      <div className="md:hidden mb-6">{sidebarBlock}</div>

      <PageLayout
        layout="two-column-left-large"
        stickyRight={true}
        leftColumn={
          <div className="space-y-6">
                  {/* Profile header - full width */}
      <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 sm:p-6 mb-6 md:block hidden">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1">
            <div className="relative shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-black/5 border-2 border-white shadow-md">
                <Image src={BEAUTICIAN.avatar} alt={BEAUTICIAN.name} fill className="object-cover" unoptimized />
              </div>
              {BEAUTICIAN.isOnline && (
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" aria-hidden />
              )}
            </div>
            <div className="text-center sm:text-left flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{BEAUTICIAN.name}</h1>
              <p className="text-sm text-text-primary/70 mt-1">{BEAUTICIAN.specialties}</p>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-text-primary/60">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span>{BEAUTICIAN.parlorName}</span>
              </div>
              <p className="text-sm text-text-primary/50 mt-0.5">{BEAUTICIAN.former}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                <span className="flex items-center gap-1 text-sm font-medium text-text-primary">
                  <StarIcon width={16} height={16} fill="#FFD700" />
                  {BEAUTICIAN.rating} ({BEAUTICIAN.reviewCount} reviews)
                </span>
                <span className="flex items-center gap-1 text-sm text-text-primary/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {BEAUTICIAN.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2 shrink-0">
            <button type="button" className="p-2.5 rounded-lg border border-black/10 text-text-primary/60 hover:text-primary hover:bg-primary/5 transition-colors" aria-label="Message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </button>
            <button type="button" onClick={() => setSaved(!saved)} className={`p-2.5 rounded-lg border transition-colors ${saved ? "border-primary bg-primary/10 text-primary" : "border-black/10 text-text-primary/60 hover:text-primary hover:bg-primary/5"}`} aria-label="Save">
              <BookmarkIcon width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
            {/* Services Offered */}
            <div>
              <h2 className="text-lg font-bold text-text-primary mb-4">Services Offered</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES_OFFERED.map((s) => (
                  <ServiceGridCard
                    key={s.id}
                    {...s}
                    onBookNow={() => router.push(`/services/${s.id}`)}
                    onMessage={() => {}}
                    onSave={() => {}}
                  />
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-lg font-bold text-text-primary mb-4">Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GALLERY_IMAGES.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-black/5">
                    <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" unoptimized />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Reviews */}
            <div>
              <h2 className="text-lg font-bold text-text-primary mb-4">
                Product Reviews <span className="text-text-primary/50 font-normal">({totalReviews} Reviews)</span>
              </h2>
              <ReviewForm
                userName={user ? `${user.firstName} ${user.lastName}` : "Sara Chen"}
                userEmail={user?.email || "sophiaclark003@gmail.com"}
                userAvatar={user?.avatar}
                onSubmit={(rating, comment) => console.log("Review", { rating, comment })}
                className="mb-4"
              />
              <div className="space-y-4">
                {MOCK_REVIEWS.map((r) => (
                  <ReviewCard key={r.id} {...r} canDelete={false} />
                ))}
              </div>
              <div className="mt-6">
                <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} />
              </div>
            </div>
          </div>
        }
        rightColumn={<div className="hidden md:block">{sidebarBlock}</div>}
      />
    </Container>
  );
}
