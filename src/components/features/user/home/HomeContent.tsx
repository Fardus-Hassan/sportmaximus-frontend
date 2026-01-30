"use client";

import PageLayout from "@/components/layouts/PageLayout";
import SearchBar from "@/components/SearchBar";
import UserInfoSideBar from "@/components/UserInfoSideBar";
import ServiceCard from "@/components/ServiceCard";
import TrendingServices from "@/components/TrendingServicesCard";

export default function HomeContent() {
  const services = [
    {
      id: "service-1",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Natural Glow Makeup Service",
      serviceDescription:
        "Professional makeup that enhances your natural beauty. Available for events!",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          thumbnail:
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$50",
      likes: 51800,
      comments: 4500,
      shares: 1900,
    },
    {
      id: "service-2",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Bridal Glam Makeup Package",
      serviceDescription:
        "Full bridal glam including trial session, lashes, and on-location service.",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail:
            "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$120",
      likes: 71200,
      comments: 5200,
      shares: 2300,
    },
    {
      id: "service-3",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Natural Glow Makeup Service",
      serviceDescription:
        "Professional makeup that enhances your natural beauty. Available for events!",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          thumbnail:
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$50",
      likes: 51800,
      comments: 4500,
      shares: 1900,
    },
    {
      id: "service-4",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Bridal Glam Makeup Package",
      serviceDescription:
        "Full bridal glam including trial session, lashes, and on-location service.",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail:
            "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$120",
      likes: 71200,
      comments: 5200,
      shares: 2300,
    },
    {
      id: "service-5",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Natural Glow Makeup Service",
      serviceDescription:
        "Professional makeup that enhances your natural beauty. Available for events!",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          thumbnail:
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$50",
      likes: 51800,
      comments: 4500,
      shares: 1900,
    },
    {
      id: "service-6",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Bridal Glam Makeup Package",
      serviceDescription:
        "Full bridal glam including trial session, lashes, and on-location service.",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail:
            "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$120",
      likes: 71200,
      comments: 5200,
      shares: 2300,
    },
    {
      id: "service-7",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Natural Glow Makeup Service",
      serviceDescription:
        "Professional makeup that enhances your natural beauty. Available for events!",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          thumbnail:
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$50",
      likes: 51800,
      comments: 4500,
      shares: 1900,
    },
    {
      id: "service-8",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Bridal Glam Makeup Package",
      serviceDescription:
        "Full bridal glam including trial session, lashes, and on-location service.",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail:
            "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$120",
      likes: 71200,
      comments: 5200,
      shares: 2300,
    },
    {
      id: "service-9",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Natural Glow Makeup Service",
      serviceDescription:
        "Professional makeup that enhances your natural beauty. Available for events!",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          thumbnail:
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$50",
      likes: 51800,
      comments: 4500,
      shares: 1900,
    },
    {
      id: "service-10",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Bridal Glam Makeup Package",
      serviceDescription:
        "Full bridal glam including trial session, lashes, and on-location service.",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail:
            "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$120",
      likes: 71200,
      comments: 5200,
      shares: 2300,
    },
    {
      id: "service-11",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Natural Glow Makeup Service",
      serviceDescription:
        "Professional makeup that enhances your natural beauty. Available for events!",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          thumbnail:
            "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$50",
      likes: 51800,
      comments: 4500,
      shares: 1900,
    },
    {
      id: "service-12",
      businessName: "Velora Beauty Lounge",
      businessAvatar:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      serviceTitle: "Bridal Glam Makeup Package",
      serviceDescription:
        "Full bridal glam including trial session, lashes, and on-location service.",
      media: [
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "video" as const,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail:
            "https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          type: "image" as const,
          url: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      price: "$120",
      likes: 71200,
      comments: 5200,
      shares: 2300,
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
          <div className="mb-6 p-5 shadow-lg rounded-lg bg-white mt-12">
            <SearchBar onSearch={(value) => console.log("Search:", value)} />
          </div>
          <div className="space-y-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                businessName={service.businessName}
                businessAvatar={service.businessAvatar}
                location={service.location}
                rating={service.rating}
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
                media={service.media}
                price={service.price}
                likes={service.likes}
                comments={service.comments}
                shares={service.shares}
                isLiked={false}
                isSaved={false}
                onBookNow={() => console.log("Book Now clicked", service.id)}
                onLike={() => console.log("Like clicked", service.id)}
                onComment={() => console.log("Comment clicked", service.id)}
                onShare={() => console.log("Share clicked", service.id)}
                onSave={() => console.log("Save clicked", service.id)}
              />
            ))}
          </div>
        </div>
      }
      rightColumn={
        <TrendingServices
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
      }
    />
  );
}
