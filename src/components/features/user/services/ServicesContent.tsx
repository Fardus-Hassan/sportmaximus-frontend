"use client";

import PageLayout from "@/components/layouts/PageLayout";
import SearchBar from "@/components/SearchBar";
import { TrendingServicesCardSkeleton } from "@/components/skeletons";
import TrendingServicesCard from "@/components/TrendingServicesCard";
import UserInfoSideBar from "@/components/UserInfoSideBar";

export default function ServicesContent() {
  const isLoading = false;
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
          <div className="space-y-6"></div>
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
