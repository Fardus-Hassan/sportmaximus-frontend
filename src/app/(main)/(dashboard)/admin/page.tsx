"use client";

import OverviewStats from "@/components/admin/OverviewStats";
import RevenueStatsChart from "@/components/admin/RevenueStatsChart";
import GrowthDonutChart from "@/components/admin/GrowthDonutChart";
import ActivityTable from "@/components/admin/ActivityTable";

export default function AdminDashboardOverview() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Overview</h2>
      </div>

      {/* Stats Grid */}
      <OverviewStats />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RevenueStatsChart />
        </div>
        <div className="lg:col-span-1">
          <GrowthDonutChart />
        </div>
      </div>

      {/* Table Section */}
      <div className="pb-12">
        <ActivityTable />
      </div>
    </div>
  );
}
