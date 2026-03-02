"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import ParlorProfileHeader from "@/components/ParlorProfileHeader";
import ServiceCardSimple from "@/components/ServiceCardSimple";
import ArtistCard from "@/components/ArtistCard";
import ReviewForm from "@/components/ReviewForm";
import ReviewCard from "@/components/ReviewCard";
import Pagination from "@/components/Pagination";
import ManagerCard from "@/components/ManagerCard";
import TrendingServices from "@/components/TrendingServices";
import Container from "@/components/Container";

export default function ParlorProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"services" | "artists" | "reviews">("services");
  const [serviceCurrentPage, setServiceCurrentPage] = useState(1);
  const [serviceItemsPerPage, setServiceItemsPerPage] = useState(11);
  const [artistCurrentPage, setArtistCurrentPage] = useState(1);
  const [artistItemsPerPage, setArtistItemsPerPage] = useState(11);
  const [reviewCurrentPage, setReviewCurrentPage] = useState(1);
  const [reviewItemsPerPage, setReviewItemsPerPage] = useState(11);

  // Mock Parlor Data
  const parlorData = {
    id: "1",
    name: "Velora Beauty Lounge",
    avatar: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop",
    description: "Where modern beauty meets neo-precision, comfort, confidence, and personalized care.",
    referenceId: "123456",
    rating: 4.9,
    totalServices: 225,
    totalArtists: 50,
    joinedDate: "21 Aug,2025",
    location: "Dhaka,Bangladesh",
    email: "velorap03@gmailcom",
    phone: "+8801695202314",
    facebookUrl: "https://facebook.com/velora",
    twitterUrl: "https://twitter.com/velora",
    instagramUrl: "https://instagram.com/velora",
  };

  // Mock Manager Data
  const managerData = {
    name: "Payel Ahmed",
    role: "Shop Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    email: "payelahmed03@gmail.com",
    phone: "+8801695202314",
  };

  // Mock Services Data
  const services = Array.from({ length: 12 }, (_, i) => ({
    id: `service-${i + 1}`,
    serviceName: ["French Tips", "Nail Art", "Acrylic Nails", "Gel Manicure", "Nail Extensions", "Pedicure"][i % 6],
    serviceImage: `https://images.unsplash.com/photo-${[
      "1604654894610-df63bc536371",
      "1519014816548-bf5fe059798b",
      "1571290274554-2d8dc79f8eb9",
      "1610992015732-2449b2b3ddef",
      "1634726282030-3e0c2d17e7e4",
      "1607779097040-26e80aa27daa"
    ][i % 6]}?w=400&h=300&fit=crop`,
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
    isSaved: i === 0 || i === 3,
  }));

  // Mock Artists Data
  const artists = Array.from({ length: 12 }, (_, i) => ({
    id: `artist-${i + 1}`,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
    specialization: "Nail Technician",
    parlorName: "Velora Beauty Lounge",
    rating: 4.9,
    isSaved: i === 2 || i === 5,
  }));

  // Mock Reviews Data
  const reviews = Array.from({ length: 10 }, (_, i) => ({
    id: `review-${i + 1}`,
    userName: "Sophia Clark",
    userEmail: "sophiaclark003@gmail.com",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process.",
  }));

  // Mock Trending Services
  const trendingServices = [
    { id: "1", serviceName: "Natural Makeup Service", providerName: "Velora Beauty Lounge" },
    { id: "2", serviceName: "Ombre Gel Nails", providerName: "Velora Beauty Lounge" },
    { id: "3", serviceName: "Bridal Makeup", providerName: "Velora Beauty Lounge" },
    { id: "4", serviceName: "Spa Pedicure", providerName: "Velora Beauty Lounge" },
    { id: "5", serviceName: "Acrylic Nails", providerName: "Velora Beauty Lounge" },
  ];

  const totalServicePages = Math.ceil(1450 / serviceItemsPerPage);
  const totalArtistPages = Math.ceil(1450 / artistItemsPerPage);
  const totalReviewPages = Math.ceil(1450 / reviewItemsPerPage);

  const handleReviewSubmit = (rating: number, comment: string) => {
    console.log("Review submitted:", { rating, comment });
  };

  return (
    <Container className="py-6 sm:py-8 mt-12">
      <PageLayout
        layout="two-column-left-large"
        stickyRight={true}
        hideScrollbar={true}
        leftColumn={
          <div className="space-y-6">
            {/* Parlor Header */}
            <ParlorProfileHeader
              {...parlorData}
              onMessage={() => console.log("Message")}
              onShare={() => console.log("Share")}
            />

            {/* Available Services Section */}
            <div className="">
              <h2 className="text-lg font-bold text-text-primary mb-4">Available Services</h2>

              {/* Services Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {services.slice(0, 6).map((service) => (
                  <ServiceCardSimple
                    key={service.id}
                    {...service}
                    onBookNow={() => router.push(`/services/${service.id}`)}
                    onSave={() => console.log("Save", service.id)}
                  />
                ))}
              </div>

              {/* Services Pagination */}
              <div className="mt-6">
                <Pagination
                  currentPage={serviceCurrentPage}
                  totalPages={totalServicePages}
                  totalItems={1450}
                  itemsPerPage={serviceItemsPerPage}
                  onPageChange={setServiceCurrentPage}
                  onItemsPerPageChange={setServiceItemsPerPage}
                />
              </div>
            </div>

            {/* Available Artists Section */}
            <div className="">
              <h2 className="text-lg font-bold text-text-primary mb-4">Available Artists</h2>

              {/* Artists Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {artists.slice(0, 6).map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    {...artist}
                    onBookNow={() => router.push(`/beautician/${artist.id}`)}
                    onSave={() => console.log("Save", artist.id)}
                  />
                ))}
              </div>

              {/* Artists Pagination */}
              <div className="mt-6">
                <Pagination
                  currentPage={artistCurrentPage}
                  totalPages={totalArtistPages}
                  totalItems={1450}
                  itemsPerPage={artistItemsPerPage}
                  onPageChange={setArtistCurrentPage}
                  onItemsPerPageChange={setArtistItemsPerPage}
                />
              </div>
            </div>

            {/* Public Reviews Section */}
            <div className="">
              <h2 className="text-lg font-bold text-text-primary mb-1">
                Public Reviews
                <span className="text-primary font-normal ml-1">({reviews.length * 15} Reviews)</span>
              </h2>

              {/* Review Form */}
              <div className="mt-4">
                <ReviewForm
                  userName="Sara Chen"
                  userEmail="sophiaclark003@gmail.com"
                  userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  onSubmit={handleReviewSubmit}
                  className="shadow-none border border-black/5"
                />
              </div>

              {/* Reviews List */}
              <div className="mt-4 space-y-4">
                {reviews.slice(0, 3).map((review) => (
                  <ReviewCard
                    key={review.id}
                    {...review}
                    className="shadow-none border border-black/5"
                  />
                ))}
              </div>

              {/* Reviews Pagination */}
              <div className="mt-6">
                <Pagination
                  currentPage={reviewCurrentPage}
                  totalPages={totalReviewPages}
                  totalItems={1450}
                  itemsPerPage={reviewItemsPerPage}
                  onPageChange={setReviewCurrentPage}
                  onItemsPerPageChange={setReviewItemsPerPage}
                />
              </div>
            </div>
          </div>
        }
        rightColumn={
          <div className="space-y-4">
            {/* Manager Card */}
            <ManagerCard {...managerData} />

            {/* Trending Services */}
            <TrendingServices services={trendingServices} />
          </div>
        }
      />
    </Container>
  );
}
