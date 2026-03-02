"use client";

import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import UserInfoSideBar from "@/components/UserInfoSideBar";
import RoleGuard from "@/components/RoleGuard";
import { useAuth } from "@/contexts/AuthContext";
import { EditIcon, CalendarIcon, StarIcon, UserIcon } from "@/components/Icons";

export default function ParlorDashboard() {
  const { user } = useAuth();
  
  const stats = [
    { label: "Total Bookings", value: "1,234", icon: CalendarIcon, color: "bg-blue-500" },
    { label: "Total Revenue", value: "$45,670", icon: StarIcon, color: "bg-green-500" },
    { label: "Active Beauticians", value: "12", icon: UserIcon, color: "bg-purple-500" },
    { label: "Avg Rating", value: "4.8", icon: StarIcon, color: "bg-yellow-500" },
  ];

  const recentBookings = [
    { id: 1, customer: "Sarah Johnson", service: "Bridal Makeup", beautician: "Emma Wilson", date: "Today, 2:00 PM", status: "Confirmed" },
    { id: 2, customer: "Jane Doe", service: "Nail Art", beautician: "Lisa Chen", date: "Today, 4:00 PM", status: "Pending" },
    { id: 3, customer: "Maria Garcia", service: "Hair Styling", beautician: "Emma Wilson", date: "Tomorrow, 10:00 AM", status: "Confirmed" },
  ];

  return (
    <RoleGuard allowedRoles={["parlor"]} fallbackUrl="/">
      <Container className="py-8">
        <PageLayout
          layout="three-column"
          stickyLeft={true}
          leftColumn={
            <UserInfoSideBar
              role="manager"
              profile={{
                name: user?.firstName + " " + user?.lastName || "Parlor",
                location: user?.location || "Location not set",
                coverImage: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
                avatar: user?.avatar || "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Premium beauty salon offering world-class services.",
                rating: { value: 4.9, count: 342 },
              }}
              menuItems={[
                { id: "manage-services", label: "Manage Services", icon: <EditIcon width={20} height={20} fill="currentColor" />, onClick: () => {} },
                { id: "manage-team", label: "Manage Team", icon: <UserIcon width={20} height={20} fill="currentColor" />, onClick: () => {} },
                { id: "settings", label: "Settings", icon: <EditIcon width={20} height={20} fill="currentColor" />, onClick: () => {} },
              ]}
              showPremiumTrial={true}
              onPremiumTrialClick={() => console.log("Premium clicked")}
            />
          }
          middleColumn={
            <div className="space-y-6 mt-12">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <stat.icon width={24} height={24} fill="white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                        <p className="text-sm text-text-primary/60">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-5 border-b border-black/5">
                  <h2 className="text-lg font-bold text-text-primary">Recent Bookings</h2>
                </div>
                <div className="divide-y divide-black/5">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="p-5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-text-primary">{booking.customer}</p>
                        <p className="text-sm text-text-primary/60">{booking.service} • {booking.beautician}</p>
                        <p className="text-xs text-text-primary/40 mt-1">{booking.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "Confirmed" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
          rightColumn={
            <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
              <h3 className="font-bold text-text-primary">Quick Actions</h3>
              <button className="w-full py-3 px-4 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Add New Service
              </button>
              <button className="w-full py-3 px-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Add Beautician
              </button>
              <button className="w-full py-3 px-4 border border-black/10 text-text-primary rounded-lg font-semibold hover:bg-black/5 transition-colors">
                View Reports
              </button>
            </div>
          }
        />
      </Container>
    </RoleGuard>
  );
}
