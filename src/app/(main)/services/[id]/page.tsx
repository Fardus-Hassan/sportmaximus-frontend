"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import ProviderCard from "@/components/ProviderCard";
import ServiceGridCard from "@/components/ServiceGridCard";
import ReviewForm from "@/components/ReviewForm";
import ReviewCard from "@/components/ReviewCard";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/contexts/AuthContext";
import { StarIcon, BookmarkIcon } from "@/components/Icons";

const mockReviews = [
  {
    id: "review-1",
    userName: "Sophia Clark",
    userEmail: "sophiaclark003@gmail.com",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 4,
    comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process.",
  },
  {
    id: "review-2",
    userName: "Sophia Clark",
    userEmail: "sophiaclark003@gmail.com",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 4,
    comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process.",
  },
  {
    id: "review-3",
    userName: "Sophia Clark",
    userEmail: "sophiaclark003@gmail.com",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 4,
    comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process.",
  },
  {
    id: "review-4",
    userName: "Sophia Clark",
    userEmail: "sophiaclark003@gmail.com",
    userAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 4,
    comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process.",
  },
];

const relatedServices = [
  {
    id: "related-1",
    serviceName: "Gel Manicure",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "related-2",
    serviceName: "French Tips",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "related-3",
    serviceName: "Nail Art",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
];

const makeupArtists = [
  {
    id: "artist-1",
    name: "Nila Akter",
    role: "Nail Artist",
    experience: "8+ Years of experience",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "artist-2",
    name: "Nila Akter",
    role: "Makeup Artist",
    experience: "8+ Years of experience",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "artist-3",
    name: "Nila Akter",
    role: "Hair Dresser",
    experience: "8+ Years of experience",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "artist-4",
    name: "Nila Akter",
    role: "Hair specialist",
    experience: "8+ Years of experience",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const galleryImages = [
  "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738363/pexels-photo-3738363.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738361/pexels-photo-3738361.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3738384/pexels-photo-3738384.jpeg?auto=compress&cs=tinysrgb&w=400",
];

type Artist = (typeof makeupArtists)[number];
const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
  "7:00 PM", "8:00 PM", "9:00 PM",
];
const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const daysInMonth = last.getDate();
  const pad = Array.from({ length: startPad }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const total = pad.length + days.length;
  const endPad = total % 7 === 0 ? 0 : 7 - (total % 7);
  return { pad, days, endPad: endPad ? Array.from({ length: endPad }, () => null) : [] };
}

export default function ServiceDetailsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [showBookingFlow, setShowBookingFlow] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [calendarMonth, setCalendarMonth] = useState(() => ({ year: 2025, month: 7 })); // Aug 2025
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentConfirmType, setPaymentConfirmType] = useState<"pay_now" | "walk_in" | null>(null);
  const bookingSectionRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 11;
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const calendar = getCalendarDays(calendarMonth.year, calendarMonth.month);
  const prevMonth = () => {
    if (calendarMonth.month === 0) setCalendarMonth({ year: calendarMonth.year - 1, month: 11 });
    else setCalendarMonth({ ...calendarMonth, month: calendarMonth.month - 1 });
  };
  const nextMonth = () => {
    if (calendarMonth.month === 11) setCalendarMonth({ year: calendarMonth.year + 1, month: 0 });
    else setCalendarMonth({ ...calendarMonth, month: calendarMonth.month + 1 });
  };
  const formatBookingDateTime = () => {
    if (selectedDate == null || !selectedTime) return "—";
    const d = new Date(calendarMonth.year, calendarMonth.month, selectedDate);
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    return `${dateStr} • ${selectedTime}`;
  };

  const handleBookSlot = () => {
    setShowBookingFlow(true);
    if (bookingSectionRef.current) {
      // slight delay so section is rendered before scrolling
      requestAnimationFrame(() => {
        bookingSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  const serviceData = {
    name: "Gel Manicure",
    rating: 4.9,
    duration: "45-60 Min(Approx)",
    reviewCount: 150,
    bookedCount: 178,
    price: 199,
    originalPrice: 219,
    discount: "25% Off",
    image: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Lorem ipsum dolor sit amet consectetur. Justo posuere in in non nunc lacinia in consectetur. Elementum lobortis eros arcu scelerisque. Vitae tristique suscipit iaculis nibh. Mauris sodales interdum dictumst enim vulputate. Vitae molestie ac dignissim gravida malesuada.",
    whatsIncluded: "Lorem ipsum dolor sit amet consectetur. Justo posuere in in non nunc lacinia in consectetur. Elementum lobortis eros arcu scelerisque. Vitae tristique suscipit iaculis nibh.",
    whyYoullLoveIt: "Lorem ipsum dolor sit amet consectetur. Justo posuere in in non nunc lacinia in consectetur. Elementum lobortis eros arcu scelerisque. Vitae tristique suscipit iaculis nibh.",
    perfectFor: "Lorem ipsum dolor sit amet consectetur. Justo posuere in in non nunc lacinia in consectetur. Elementum lobortis eros arcu scelerisque. Vitae tristique suscipit iaculis nibh.",
  };

  const providerData = {
    name: "Velora Beauty Lounge",
    avatar: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=200",
    coverImage: "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Dhaka, Bangladesh",
    rating: 4,
    description: "Where modern beauty meets neo precision, comfort, confidence, and personalized care.",
  };

  return (
    <Container className="py-6 sm:py-8 mt-12">
      <PageLayout
        layout="three-column"
        stickyLeft={true}
        stickyRight={true}
        hideScrollbar={true}
        leftColumn={
          <div className="space-y-6">
            {/* Left: Image + Description */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-black/5">
              <div className="relative aspect-square w-full overflow-hidden bg-black/5">
                <Image
                  src={serviceData.image}
                  alt={serviceData.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-text-primary mb-3">Description</h3>
                <p className="text-sm text-text-primary/70 leading-relaxed">
                  {serviceData.description}
                </p>
              </div>
            </div>
          </div>
        }
        middleColumn={
          <div className="space-y-6">
            {/* Middle: Service info card */}
            <div className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden p-5 sm:p-6">
              {/* Title and Rating */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="text-xl font-bold text-text-primary">{serviceData.name}</h1>
                <div className="flex items-center gap-1">
                  <StarIcon width={18} height={18} fill="#FFD700" />
                  <span className="font-semibold text-text-primary">{serviceData.rating}</span>
                </div>
              </div>
              {/* Selected artist name + image (when in booking step) */}
              {selectedArtist && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative h-8 w-8 shrink-0 rounded-full overflow-hidden bg-black/5">
                    <Image
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{selectedArtist.name}</span>
                </div>
              )}

              {/* Duration */}
              <p className="text-sm text-text-primary/60 mb-4">
                Duration: {serviceData.duration}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1.5 bg-black/5 rounded-full text-xs font-medium text-text-primary">
                  {serviceData.reviewCount} Reviews
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 rounded-full text-xs font-medium text-yellow-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                  </svg>
                  {serviceData.bookedCount} Booked in last 10 days
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-text-primary">${serviceData.price}</span>
                <span className="text-sm text-text-primary/40 line-through">
                  ${serviceData.originalPrice}
                </span>
                <span className="text-sm font-medium text-green-600">{serviceData.discount}</span>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    className="p-2 text-text-primary/40 hover:text-text-primary transition-colors"
                    aria-label="Share"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-2 transition-colors ${
                      isSaved ? "text-primary" : "text-text-primary/40 hover:text-primary/50"
                    }`}
                    aria-label="Save"
                  >
                    <BookmarkIcon width={20} height={20} />
                  </button>
                </div>
              </div>

              {/* Book Button + details: hide after booking flow starts */}
              {!showBookingFlow && (
                <>
                  <button
                    type="button"
                    onClick={handleBookSlot}
                    className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity mb-6"
                  >
                    Book a Slot
                  </button>

                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-semibold text-text-primary mb-2">What&apos;s Included</h4>
                      <p className="text-sm text-text-primary/60 leading-relaxed">
                        {serviceData.whatsIncluded}
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-semibold text-text-primary mb-2">Why You&apos;ll Love It</h4>
                      <p className="text-sm text-text-primary/60 leading-relaxed">
                        {serviceData.whyYoullLoveIt}
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-semibold text-text-primary mb-2">Perfect For</h4>
                      <p className="text-sm text-text-primary/60 leading-relaxed">
                        {serviceData.perfectFor}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Booking Flow: Select artist + Gallery OR Date/Time/Payment (after artist selected) */}
            {showBookingFlow && !selectedArtist && (
              <div ref={bookingSectionRef} className="space-y-5 sm:space-y-6">
                <section>
                  <h2 className="text-base sm:text-lg font-bold text-text-primary mb-4">
                    Select makeup artist
                  </h2>
                  <div className="space-y-4">
                    {makeupArtists.map((artist) => (
                      <div
                        key={artist.id}
                        className="bg-white flex gap-4 rounded-xl border border-black/5 p-0 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative shrink-0">
                          <div className="relative h-40 w-32 sm:h-40 sm:w-40 rounded-l-lg overflow-hidden bg-black/5">
                            <Image
                              src={artist.image}
                              alt={artist.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <button
                            type="button"
                            className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-text-primary/60 shadow-sm hover:text-primary"
                            aria-label="Save artist"
                          >
                            <BookmarkIcon width={16} height={16} />
                          </button>
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-4 pr-4 pl-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div>
                              <h3 className="text-base font-semibold text-text-primary">
                                {artist.name}
                              </h3>
                              <p className="text-sm text-text-primary/60">{artist.role}</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-text-primary shrink-0">
                              <StarIcon width={14} height={14} fill="#FFD700" />
                              <span>4/5</span>
                            </div>
                          </div>
                          <p className="text-sm text-text-primary/60 mb-3">
                            {artist.experience}
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setSelectedArtist(artist)}
                              className="flex-1 sm:flex-none py-2.5 px-4 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            >
                              Book Now
                            </button>
                            <button
                              type="button"
                              className="p-2.5 rounded-lg border border-black/10 text-text-primary/60 hover:text-text-primary"
                              aria-label="View profile"
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-base sm:text-lg font-bold text-text-primary mb-4">
                    Gallary
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {galleryImages.slice(0, 6).map((src, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden bg-black/5"
                      >
                        <Image
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* After artist selected: Select date, time, payment, summary */}
            {showBookingFlow && selectedArtist && (
              <div ref={bookingSectionRef} className="space-y-5 sm:space-y-6">
                {/* Select a date */}
                <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 sm:p-6">
                  <h2 className="text-base sm:text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Select a date
                  </h2>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-text-primary">
                      {MONTHS[calendarMonth.month]} {calendarMonth.year}
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="p-2 rounded-lg border border-black/10 text-text-primary hover:bg-black/5"
                        aria-label="Previous month"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                      </button>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="p-2 rounded-lg border border-black/10 text-text-primary hover:bg-black/5"
                        aria-label="Next month"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {WEEKDAYS.map((d) => (
                      <div key={d} className="text-xs font-medium text-text-primary/60 py-1">
                        {d}
                      </div>
                    ))}
                    {calendar.pad.map((_, i) => (
                      <div key={`pad-${i}`} className="aspect-square" />
                    ))}
                    {calendar.days.map((d) => {
                      const disabled = [1, 2, 3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26].includes(d);
                      const selected = selectedDate === d;
                      return (
                        <button
                          key={d}
                          type="button"
                          disabled={disabled}
                          onClick={() => !disabled && setSelectedDate(d)}
                          className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                            disabled
                              ? "text-text-primary/30 cursor-not-allowed"
                              : selected
                                ? "bg-primary text-white"
                                : "text-text-primary hover:bg-black/5"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                    {calendar.endPad?.map((_, i) => (
                      <div key={`end-${i}`} className="aspect-square" />
                    ))}
                  </div>
                </div>

                {/* Select Time */}
                <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 sm:p-6">
                  <h2 className="text-base sm:text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Select Time
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-3 rounded-lg text-sm font-medium border transition-colors ${
                          selectedTime === slot
                            ? "bg-primary text-white border-primary"
                            : "border-black/10 text-text-primary hover:border-primary/50"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 sm:p-6">
                  <h2 className="text-base sm:text-lg font-bold text-text-primary mb-4">
                    Payment Method
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`flex items-center justify-center gap-2 py-4 px-4 rounded-xl border-2 transition-colors ${
                        paymentMethod === "card"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-black/10 text-text-primary hover:border-black/20"
                      }`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      <span className="font-semibold">Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cash")}
                      className={`flex items-center justify-center gap-2 py-4 px-4 rounded-xl border-2 transition-colors ${
                        paymentMethod === "cash"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-black/10 text-text-primary hover:border-black/20"
                      }`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span className="font-semibold">Cash</span>
                    </button>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 sm:p-6">
                  <div className="space-y-2 text-sm">
                    <p className="text-text-primary/70">
                      <span className="font-medium text-text-primary">Service Provider:</span> {providerData.name}
                    </p>
                    <p className="text-text-primary/70">
                      <span className="font-medium text-text-primary">Makeup Artist:</span> {selectedArtist.name}
                    </p>
                    <p className="text-text-primary/70">
                      <span className="font-medium text-text-primary">Date & Time:</span> {formatBookingDateTime()}
                    </p>
                    <p className="text-text-primary/70">
                      <span className="font-medium text-text-primary">Payment Method:</span> {paymentMethod === "card" ? "Card" : "Cash"}
                    </p>
                    <p className="pt-3 border-t border-black/10 font-semibold text-text-primary text-base">
                      Total Amount: ${serviceData.price}
                    </p>
                  </div>
                  <div className="flex flex-col-reverse sm:flex-row gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedArtist(null)}
                      className="flex-1 py-3 px-4 rounded-lg font-semibold border border-black/20 text-text-primary hover:bg-black/5 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => router.push("/checkout")}
                      className="flex-1 py-3 px-4 rounded-lg font-semibold bg-primary text-white hover:opacity-90 transition-opacity"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Product Reviews Section - hide after booking starts */}
            {!showBookingFlow && (
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">
                  Product Reviews
                  <span className="text-text-primary/40 font-normal">
                    ({mockReviews.length * 39} Reviews)
                  </span>
                </h2>

                <ReviewForm
                  userName={user ? `${user.firstName} ${user.lastName}` : "Sara Chen"}
                  userEmail={user?.email || "sophiaclark003@gmail.com"}
                  userAvatar={user?.avatar}
                  onSubmit={(rating, comment) =>
                    console.log("Review submitted:", { rating, comment })
                  }
                  className="mb-4"
                />

                <div className="space-y-4">
                  {mockReviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      {...review}
                      canDelete={true}
                      onDelete={() => console.log("Delete review", review.id)}
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            )}
          </div>
        }
        rightColumn={
          <div className="space-y-4">
            {/* Provider Card */}
            <ProviderCard
              {...providerData}
              onViewProfile={() => router.push("/parlor/1")}
              onMessage={() => console.log("Message provider")}
            />

            {/* You may also like */}
            <div>
              <h3 className="text-base font-bold text-text-primary mb-4">You may also like</h3>
              <div className="space-y-4">
                {relatedServices.map((service) => (
                  <ServiceGridCard
                    key={service.id}
                    {...service}
                    onBookNow={() => router.push(`/services/${service.id}`)}
                    onMessage={() => console.log("Message", service.id)}
                    onSave={() => console.log("Save", service.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      />

      {/* Payment Confirmation Modal */}
      {showPaymentModal && selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowPaymentModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-text-primary/60 hover:text-text-primary hover:bg-black/5"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-text-primary pr-8">Payment Confirmation</h3>
            <p className="text-sm text-text-primary/70 mt-2">
              Your appointment with {selectedArtist.name}
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                onClick={() => setPaymentConfirmType("pay_now")}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-colors ${
                  paymentConfirmType === "pay_now"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-black/10 bg-black/2 text-text-primary hover:border-black/20"
                }`}
              >
                Pay Now
              </button>
              <button
                type="button"
                onClick={() => setPaymentConfirmType("walk_in")}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-colors ${
                  paymentConfirmType === "walk_in"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-black/10 bg-black/2 text-text-primary hover:border-black/20"
                }`}
              >
                Walk In Pay
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowPaymentModal(false);
                setPaymentConfirmType(null);
                setSelectedArtist(null);
                setShowBookingFlow(false);
              }}
              className="w-full mt-6 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
