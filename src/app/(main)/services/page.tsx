"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import UserInfoSideBar from "@/components/UserInfoSideBar";
import SearchBar from "@/components/SearchBar";
import ServiceGridCard from "@/components/ServiceGridCard";
import TrendingServices from "@/components/TrendingServices";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon } from "@/components/Icons";

const mockServices = [
  {
    id: "service-1",
    serviceName: "Gel Manicure",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "service-2",
    serviceName: "Pedicure",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "service-3",
    serviceName: "Acrylic Nails",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "service-4",
    serviceName: "French Tips",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "service-5",
    serviceName: "Acrylic Nails",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
  {
    id: "service-6",
    serviceName: "French Tips",
    serviceImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$30",
    providerName: "Velora Beauty Lounge",
    description: "A long-lasting, glossy manicure that keeps your nails flawless for weeks.",
  },
];

export default function ServicesPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [savedServices, setSavedServices] = useState<string[]>([]);
  const itemsPerPage = 11;
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const toggleSave = (serviceId: string) => {
    setSavedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const menuItems = [
    {
      id: "transaction-history",
      label: "Transaction History",
      icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Transaction History"),
    },
    {
      id: "bookmarks",
      label: "Bookmarks",
      icon: <BookmarkIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Bookmarks"),
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: <EditIcon width={20} height={20} fill="currentColor" />,
      onClick: () => router.push("/profile/edit"),
    },
    {
      id: "logout",
      label: "Log Out",
      icon: <LogoutIcon width={20} height={20} className="text-current" />,
      onClick: logout,
    },
  ];

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
        stickyLeft={true}
        stickyRight={true}
        leftColumn={
          <UserInfoSideBar
            role="user"
            profile={{
              name: user ? `${user.firstName} ${user.lastName}` : "Sara Chen",
              location: "Dhaka, Bangladesh",
              distance: "4.5 km",
              coverImage: "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1200",
              avatar: user?.avatar || "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
              description: "Where modern beauty meets neo precision, comfort, confidence, and personalized care.",
            }}
            menuItems={menuItems}
            onViewProfile={() => router.push("/profile")}
          />
        }
        middleColumn={
          <div>
            {/* Search Bar */}
            <div className="mb-6 p-5 shadow-lg rounded-xl bg-white mt-12">
              <SearchBar 
                onSearch={(value) => console.log("Search:", value)} 
                placeholder="Search beauticians, services..."
              />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {mockServices.map((service) => (
                <ServiceGridCard
                  key={service.id}
                  {...service}
                  isSaved={savedServices.includes(service.id)}
                  onBookNow={() => router.push(`/services/${service.id}`)}
                  onMessage={() => console.log("Message", service.id)}
                  onSave={() => toggleSave(service.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        }
        rightColumn={
          <TrendingServices services={trendingServices} />
        }
      />
    </Container>
  );
}
