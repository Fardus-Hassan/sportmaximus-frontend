"use client";

import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import UserInfoSideBar from "@/components/UserInfoSideBar";
import { EditIcon, CalendarIcon, StarIcon } from "@/components/Icons";

export default function BeauticianDashboard() {
  const todayAppointments = [
    { id: 1, customer: "Sarah Johnson", service: "Bridal Makeup", time: "10:00 AM", status: "In Progress" },
    { id: 2, customer: "Jane Doe", service: "Nail Art", time: "2:00 PM", status: "Upcoming" },
    { id: 3, customer: "Maria Garcia", service: "Hair Styling", time: "4:30 PM", status: "Upcoming" },
  ];

  const stats = [
    { label: "Today's Appointments", value: "5" },
    { label: "This Week", value: "23" },
    { label: "Earnings (Month)", value: "$2,450" },
    { label: "Rating", value: "4.9" },
  ];

  return (
    <Container className="py-8">
      <PageLayout
        layout="three-column"
        stickyLeft={true}
        leftColumn={
          <UserInfoSideBar
            role="beautician"
            profile={{
              name: "Emma Wilson",
              location: "Dhaka, Bangladesh",
              role: "Nail Technician • Bridal & Acrylic",
              coverImage: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1200",
              avatar: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400",
              description: "Certified nail artist with 5+ years of experience. Specializing in bridal and acrylic nails.",
              rating: { value: 4.9, count: 156 },
            }}
            menuItems={[
              { id: "my-services", label: "My Services", icon: <EditIcon width={20} height={20} fill="currentColor" />, onClick: () => {} },
              { id: "availability", label: "Set Availability", icon: <CalendarIcon width={20} height={20} fill="currentColor" />, onClick: () => {} },
              { id: "earnings", label: "My Earnings", icon: <StarIcon width={20} height={20} fill="currentColor" />, onClick: () => {} },
            ]}
            showPremiumTrial={true}
            onPremiumTrialClick={() => console.log("Premium clicked")}
          />
        }
        middleColumn={
          <div className="space-y-6 mt-12">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-text-primary/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-5 border-b border-black/5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-text-primary">Today&apos;s Schedule</h2>
                <span className="text-sm text-primary font-medium">View All</span>
              </div>
              <div className="divide-y divide-black/5">
                {todayAppointments.map((apt) => (
                  <div key={apt.id} className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{apt.customer.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">{apt.customer}</p>
                        <p className="text-sm text-text-primary/60">{apt.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-text-primary">{apt.time}</p>
                      <span className={`text-xs font-medium ${
                        apt.status === "In Progress" 
                          ? "text-green-600" 
                          : "text-text-primary/50"
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-bold text-text-primary mb-4">Recent Reviews</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-primary">Sarah J.</span>
                      <div className="flex items-center gap-1">
                        <StarIcon width={14} height={14} fill="#FFD700" />
                        <span className="text-sm text-text-primary">5.0</span>
                      </div>
                    </div>
                    <p className="text-sm text-text-primary/70 mt-1">
                      Amazing nail art! Emma is so talented and professional. Will definitely come back!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        rightColumn={
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add Portfolio
                </button>
                <button className="w-full py-3 px-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  Update Services
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-text-primary mb-3">Earnings Overview</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-primary/60">This Week</span>
                  <span className="font-semibold text-text-primary">$680</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-primary/60">This Month</span>
                  <span className="font-semibold text-text-primary">$2,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-primary/60">Pending</span>
                  <span className="font-semibold text-yellow-600">$320</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Container>
  );
}
