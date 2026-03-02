"use client";

import { useState } from "react";
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

export default function ServiceDetailsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const itemsPerPage = 11;
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
        layout="two-column-left-large"
        stickyRight={true}
        hideScrollbar={true}
        leftColumn={
          <div className="space-y-6">
            {/* Service Details Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left - Image and Description */}
                <div className="p-5 sm:p-6">
                  {/* Service Image */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/5 mb-6">
                    <Image
                      src={serviceData.image}
                      alt={serviceData.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-3">Description</h3>
                    <p className="text-sm text-text-primary/70 leading-relaxed">
                      {serviceData.description}
                    </p>
                  </div>
                </div>

                {/* Right - Service Info */}
                <div className="p-5 sm:p-6 border-t lg:border-t-0 lg:border-l border-black/5">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h1 className="text-xl font-bold text-text-primary">{serviceData.name}</h1>
                    <div className="flex items-center gap-1">
                      <StarIcon width={18} height={18} fill="#FFD700" />
                      <span className="font-semibold text-text-primary">{serviceData.rating}</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <p className="text-sm text-text-primary/60 mb-4">
                    Duration: {serviceData.duration}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 bg-black/5 rounded-full text-xs font-medium text-text-primary">
                      {serviceData.reviewCount} Reviews
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 rounded-full text-xs font-medium text-yellow-700">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                      </svg>
                      {serviceData.bookedCount} Booked in last 10 days
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-text-primary">${serviceData.price}</span>
                    <span className="text-sm text-text-primary/40 line-through">${serviceData.originalPrice}</span>
                    <span className="text-sm font-medium text-green-600">{serviceData.discount}</span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button className="p-2 text-text-primary/40 hover:text-text-primary transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="18" cy="5" r="3"/>
                          <circle cx="6" cy="12" r="3"/>
                          <circle cx="18" cy="19" r="3"/>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                      </button>
                      <button 
                        onClick={() => setIsSaved(!isSaved)}
                        className={`p-2 transition-colors ${isSaved ? "text-primary" : "text-text-primary/40 hover:text-primary"}`}
                      >
                        <BookmarkIcon width={20} height={20} fill={isSaved ? "currentColor" : "none"} />
                      </button>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity mb-6">
                    Book a Slot
                  </button>

                  {/* What's Included */}
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-semibold text-text-primary mb-2">What's Included</h4>
                      <p className="text-sm text-text-primary/60 leading-relaxed">
                        {serviceData.whatsIncluded}
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-semibold text-text-primary mb-2">Why You'll Love It</h4>
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
                </div>
              </div>
            </div>

            {/* Product Reviews Section */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                Product Reviews<span className="text-text-primary/40 font-normal">({mockReviews.length * 39} Reviews)</span>
              </h2>

              {/* Review Form */}
              <ReviewForm
                userName={user ? `${user.firstName} ${user.lastName}` : "Sara Chen"}
                userEmail={user?.email || "sophiaclark003@gmail.com"}
                userAvatar={user?.avatar}
                onSubmit={(rating, comment) => console.log("Review submitted:", { rating, comment })}
                className="mb-4"
              />

              {/* Reviews List */}
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

              {/* Pagination */}
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
            <div className="">
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
    </Container>
  );
}
