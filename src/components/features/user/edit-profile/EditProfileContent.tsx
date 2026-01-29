"use client";

import PageLayout from "@/components/layouts/PageLayout";
import ChangePasswordFormCard from "./ChangePasswordFormCard";
import EditFormCard from "./EditFormCard";
import { TrendingServicesCardSkeleton } from "@/components/skeletons";
import TrendingServicesCard from "@/components/TrendingServicesCard";
import AccountMenuItemsCard from "@/components/shared/AccountMenuCard";

export default function EditProfileContent() {
  const isLoading = false;
  return (
    <PageLayout
      layout="two-column-left-large"
      stickyRight={true}
      leftColumn={
        <div className="space-y-6">
          <EditFormCard />
          <ChangePasswordFormCard />
        </div>
      }
      rightColumn={
        <div className="space-y-6">
          {/* Menu Items */}

          <AccountMenuItemsCard />

          {isLoading ? (
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
          )}
        </div>
      }
    />
  );
}
