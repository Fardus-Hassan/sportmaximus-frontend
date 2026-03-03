"use client";

import Container from "@/components/Container";
import RoleGuard from "@/components/RoleGuard";
import { UserIcon, StarIcon, CalendarIcon } from "@/components/Icons";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "12,456", change: "+12%", icon: UserIcon, color: "bg-blue-500" },
    { label: "Total Parlors", value: "234", change: "+8%", icon: StarIcon, color: "bg-purple-500" },
    { label: "Total Beauticians", value: "1,890", change: "+15%", icon: UserIcon, color: "bg-green-500" },
    { label: "Total Bookings", value: "45,670", change: "+22%", icon: CalendarIcon, color: "bg-orange-500" },
  ];

  const recentUsers = [
    { id: 1, name: "Sarah Johnson", email: "sarah@example.com", role: "User", joined: "2 hours ago" },
    { id: 2, name: "Velora Beauty", email: "velora@example.com", role: "Parlor", joined: "5 hours ago" },
    { id: 3, name: "Emma Wilson", email: "emma@example.com", role: "Beautician", joined: "1 day ago" },
  ];

  const pendingApprovals = [
    { id: 1, name: "Glow Studio", type: "Parlor Registration", submitted: "2 hours ago" },
    { id: 2, name: "Lisa Chen", type: "Beautician Verification", submitted: "4 hours ago" },
    { id: 3, name: "Beauty Hub", type: "Parlor Registration", submitted: "1 day ago" },
  ];

  return (
    <RoleGuard allowedRoles={["admin"]} fallbackUrl="/">
      <Container className="py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
          <p className="text-text-primary/60">Welcome back! Here&apos;s what&apos;s happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon width={24} height={24} fill="white" />
                </div>
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-sm text-text-primary/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-5 border-b border-black/5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-text-primary">Recent Users</h2>
              <button className="text-sm text-primary font-medium hover:underline">View All</button>
            </div>
            <div className="divide-y divide-black/5">
              {recentUsers.map((user) => (
                <div key={user.id} className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{user.name}</p>
                      <p className="text-sm text-text-primary/60">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "User" ? "bg-blue-100 text-blue-700" :
                      user.role === "Parlor" ? "bg-purple-100 text-purple-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {user.role}
                    </span>
                    <p className="text-xs text-text-primary/40 mt-1">{user.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-5 border-b border-black/5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-text-primary">Pending Approvals</h2>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                {pendingApprovals.length} pending
              </span>
            </div>
            <div className="divide-y divide-black/5">
              {pendingApprovals.map((item) => (
                <div key={item.id} className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-text-primary">{item.name}</p>
                    <p className="text-sm text-text-primary/60">{item.type}</p>
                    <p className="text-xs text-text-primary/40 mt-1">{item.submitted}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-text-primary mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button className="p-4 border border-black/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-center">
              <UserIcon width={24} height={24} fill="#E32750" className="mx-auto mb-2" />
              <span className="text-sm font-medium text-text-primary">Manage Users</span>
            </button>
            <button className="p-4 border border-black/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-center">
              <StarIcon width={24} height={24} fill="#E32750" className="mx-auto mb-2" />
              <span className="text-sm font-medium text-text-primary">Manage Parlors</span>
            </button>
            <button className="p-4 border border-black/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-center">
              <CalendarIcon width={24} height={24} fill="#E32750" className="mx-auto mb-2" />
              <span className="text-sm font-medium text-text-primary">View Reports</span>
            </button>
            <button className="p-4 border border-black/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-center">
              <UserIcon width={24} height={24} fill="#E32750" className="mx-auto mb-2" />
              <span className="text-sm font-medium text-text-primary">Settings</span>
            </button>
          </div>
        </div>
      </Container>
    </RoleGuard>
  );
}
