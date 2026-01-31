"use client";

import PageLayout from "@/components/layouts/PageLayout";
import { ServiceSummaryCard } from "./ServiceSummaryCard";
import { DescriptionCard } from "./DescriptionCard";
import { ArtistProfileCard } from "./ArtistProfileCard";
import ProductReview from "./ProductReview";
import { ServiceCard } from "../services/ServiceCard";

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

  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop",
      title: "Gel Manicure",
      price: 30,
      location: "Velora Beauty Lounge",
      description:
        "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&auto=format&fit=crop",
      title: "Classic Pedicure",
      price: 40,
      location: "Velora Beauty Lounge",
      description:
        "Relaxing pedicure treatment to soften feet, shape nails, and enhance comfort.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop",
      title: "Facial Glow Therapy",
      price: 55,
      location: "Velora Beauty Lounge",
      description:
        "Deep cleansing facial that rejuvenates skin and restores natural radiance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&auto=format&fit=crop",
      title: "Acrylic Nail Extension",
      price: 65,
      location: "Velora Beauty Lounge",
      description:
        "Durable acrylic extensions styled to perfection for a bold, elegant look.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556228724-4d2cce9b7ed3?w=800&auto=format&fit=crop",
      title: "Hair Spa Treatment",
      price: 50,
      location: "Velora Beauty Lounge",
      description:
        "Nourishing hair spa that repairs damage and restores shine and strength.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&auto=format&fit=crop",
      title: "Bridal Makeup",
      price: 120,
      location: "Velora Beauty Lounge",
      description:
        "Professional bridal makeup for a flawless, camera-ready wedding look.",
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
        //    <div>

        //      {/* <div className="space-y-6 overflow-y-auto">
        //        {services.map((serv, i) => (
        //          <ServiceCard
        //            key={i}
        //            image={serv.image}
        //            title={serv.title}
        //            price={serv.price}
        //            location={serv.location}
        //            description={serv.description}
        //          />
        //        ))}
        //      </div> */}
        //    </div>
      }
    />
  );
}
