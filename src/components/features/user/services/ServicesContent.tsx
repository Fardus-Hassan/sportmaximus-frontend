"use client";

import PageLayout from "@/components/layouts/PageLayout";
import SearchBar from "@/components/SearchBar";
import { TrendingServicesCardSkeleton } from "@/components/skeletons";
import TrendingServicesCard from "@/components/TrendingServicesCard";
import UserInfoSideBar from "@/components/UserInfoSideBar";
import { ServiceCard } from "./ServiceCard";

export default function ServicesContent() {
  const isLoading = false;
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
      layout={"three-column"}
      stickyLeft={true}
      stickyRight={true}
      leftColumn={
        <UserInfoSideBar
          role="user"
          href="/user/profile"
          profile={{
            name: "Sarah Johnson",
            location: "Dhaka, Bangladesh",
            distance: "4.5 km",
            coverImage:
              "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1200",
            avatar:
              "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description:
              "Where modern beauty meets neo precision, comfort, confidence, and personalized care.",
          }}
        />
      }
      middleColumn={
        <div className="rounded-lg">
          <div className="mb-6 p-5 shadow-lg rounded-lg bg-white">
            <SearchBar onSearch={(value) => console.log("Search:", value)} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((serv, i) => (
              <ServiceCard
                key={i}
                image={serv.image}
                title={serv.title}
                price={serv.price}
                location={serv.location}
                description={serv.description}
              />
            ))}
          </div>
        </div>
      }
      rightColumn={
        isLoading ? (
          <TrendingServicesCardSkeleton />
        ) : (
          <TrendingServicesCard
            services={[
              {
                id: "trending-1",
                serviceName: "Natural Makeup Service",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-2",
                serviceName: "Ombre Gel Nails",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-3",
                serviceName: "Bridal Makeup",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-4",
                serviceName: "Spa Pedicure",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-5",
                serviceName: "Acrylic Nails",
                providerName: "Velora Beauty Lounge",
              },
            ]}
          />
        )
      }
    />
  );
}
