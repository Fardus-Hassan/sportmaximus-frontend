"use client";

import PageLayout from "@/components/layouts/PageLayout";
import { ServiceSummaryCard } from "./ServiceSummaryCard";
import { DescriptionCard } from "./DescriptionCard";
import { ArtistProfileCard } from "./ArtistProfileCard";
import ProductReview from "./ProductReview";

export default function ServiceDetailsContent() {
  const makeupServices = [
    {
      title: "HD Makeup",
      description:
        "High-definition makeup for a smooth, camera-ready finish ideal for photography and videography.",
    },
    {
      title: "Airbrush Makeup",
      description:
        "Lightweight, waterproof airbrush makeup for a flawless and long-lasting look.",
    },
    {
      title: "Traditional Makeup",
      description:
        "Classic makeup styles with rich colors, perfect for cultural and traditional occasions.",
    },
  ];
  return (
    <PageLayout
      layout={"two-column-left-large"}
      stickyRight={true}
      leftColumn={
        <div className="w-full space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DescriptionCard
              image="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
              title="Description"
              description="Lorem ipsum dolor sit amet consectetur. Justo posuere in in non nunc lacinia in consectetur. Elementum lobortis eros arcu scelerisque. Vitae tristique suscipit iaculis nibh. Mauris sodales interdum dictumst enim vulputate. Vitae molestie ac dignissim gravida malesuada."
            />

            <ServiceSummaryCard
              serviceName="Gel Manicure"
              rating={4.9}
              duration="45-60 Min(Approx)"
              reviewsCount={150}
              bookedCount={178}
              bookedDays={10}
              currentPrice={199}
              originalPrice={219}
              discountPercentage={25}
              about_sections={makeupServices}
              onBookSlot={() => console.log("Book Slot clicked")}
              onShare={() => console.log("Share clicked")}
              onBookmark={() => console.log("Bookmark clicked")}
            />
          </div>

          <ProductReview />
        </div>
      }
      rightColumn={
        <ArtistProfileCard
          coverImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
          logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
          name="Velora Beauty Lounge"
          location="Dhaka, Bangladesh"
          rating={4}
          description="Where modern beauty meets neo precision, comfort, confidence, and personalized care."
          onViewProfile={() => console.log("View Profile clicked")}
          onContact={() => console.log("Contact clicked")}
        />
      }
    />
  );
}
