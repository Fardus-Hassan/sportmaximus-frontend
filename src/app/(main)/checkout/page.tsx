"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon } from "@/components/Icons";

export default function CheckoutPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [billing, setBilling] = useState({
    firstName: "Paolo",
    lastName: "Maldini",
    phone: "+391026476",
    email: "paolomaldini003@gmail.com",
    country: "United State",
    address: "New York",
    streetNumber: "3891 Ranchview",
    streetName: "Ranchview",
    apartment: "Ranchview",
    additionalInfo: "",
  });
  const [payment, setPayment] = useState({
    cardNumber: "4242 5859 5684 2585",
    expiry: "MM/YY",
    cvc: "",
    nameOnCard: "3891 Ranchview Dr. Richardson, California 62639",
    countryOrRegion: "United State",
    postalCode: "10001",
  });

  const menuItems = [
    {
      id: "transaction-history",
      label: "Transaction History",
      icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
      onClick: () => router.push("/checkout"),
      variant: "primary" as const,
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

  const handleBillingChange = (field: string, value: string) => {
    setBilling((prev) => ({ ...prev, [field]: value }));
  };
  const handlePaymentChange = (field: string, value: string) => {
    setPayment((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe", { billing, payment });
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Profile card - compact */}
      <div className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden p-5">
        <div className="relative h-24 w-24 mx-auto rounded-full overflow-hidden bg-black/5 mb-4">
          <Image
            src={user?.avatar || "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400"}
            alt="Profile"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <h2 className="text-center font-semibold text-text-primary text-lg">
          {user ? `${user.firstName} ${user.lastName}` : "Sara Chen"}
        </h2>
        <p className="text-center text-sm text-text-primary/60 mt-1">Dhaka, Bangladesh</p>
        <p className="text-sm text-text-primary/70 mt-3 text-center leading-relaxed">
          Where modern beauty meets neo precision, comfort, confidence, and personalized care.
        </p>
        <Link
          href="/profile"
          className="mt-4 w-full inline-block text-center py-2.5 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
        >
          View Profile
        </Link>
      </div>

      {/* Menu */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-black/5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`group w-full flex items-center gap-3 px-5 py-4 text-left transition-colors ${
                item.variant === "primary"
                  ? "bg-primary/10 text-primary hover:bg-primary/15"
                  : "text-text-primary/70 hover:bg-black/5 hover:text-primary"
              }`}
            >
              <div className={item.variant === "primary" ? "text-primary" : "text-text-primary/50 group-hover:text-primary"}>
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Container className="py-6 sm:py-8 mt-12">
      {/* Mobile: sidebar on top */}
      <div className="md:hidden mb-6">{sidebarContent}</div>
      <PageLayout
        layout="two-column-right-large"
        stickyLeft={true}
        leftColumn={sidebarContent}
        rightColumn={
          <div className="space-y-8">
            {/* Billing Information */}
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                Billing Information
              </h1>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">First Name</label>
                    <input
                      type="text"
                      value={billing.firstName}
                      onChange={(e) => handleBillingChange("firstName", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Last Name</label>
                    <input
                      type="text"
                      value={billing.lastName}
                      onChange={(e) => handleBillingChange("lastName", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={billing.phone}
                    onChange={(e) => handleBillingChange("phone", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                  <input
                    type="email"
                    value={billing.email}
                    onChange={(e) => handleBillingChange("email", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Country/Region</label>
                  <input
                    type="text"
                    value={billing.country}
                    onChange={(e) => handleBillingChange("country", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Address</label>
                  <input
                    type="text"
                    value={billing.address}
                    onChange={(e) => handleBillingChange("address", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Street / No</label>
                    <input
                      type="text"
                      value={billing.streetNumber}
                      onChange={(e) => handleBillingChange("streetNumber", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Street name</label>
                    <input
                      type="text"
                      value={billing.streetName}
                      onChange={(e) => handleBillingChange("streetName", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Apartment, suite, etc.</label>
                    <input
                      type="text"
                      value={billing.apartment}
                      onChange={(e) => handleBillingChange("apartment", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Additional Information</label>
                  <textarea
                    value={billing.additionalInfo}
                    onChange={(e) => handleBillingChange("additionalInfo", e.target.value)}
                    rows={3}
                    placeholder="Lorem ipsum dolor sit amet consectetur. Justo posuere in in non nunc lacinia in consectetur."
                    className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                  <p className="text-xs text-text-primary/50 mt-2">
                    Your billing information is securely stored and encrypted.
                  </p>
                </div>

                {/* Payment Method */}
                <div className="pt-8 border-t border-black/10">
                  <h2 className="text-xl font-bold text-text-primary mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Card Information</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={payment.cardNumber}
                          onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
                          placeholder="4242 5859 5684 2585"
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary pr-24"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <span className="text-xs text-text-primary/50">Visa</span>
                          <span className="text-xs text-text-primary/50">MC</span>
                          <span className="text-xs text-text-primary/50">Amex</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">MM/YY</label>
                        <input
                          type="text"
                          value={payment.expiry}
                          onChange={(e) => handlePaymentChange("expiry", e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">CVC</label>
                        <input
                          type="text"
                          value={payment.cvc}
                          onChange={(e) => handlePaymentChange("cvc", e.target.value)}
                          placeholder="CVC"
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Name On Card</label>
                      <input
                        type="text"
                        value={payment.nameOnCard}
                        onChange={(e) => handlePaymentChange("nameOnCard", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Country or region</label>
                      <input
                        type="text"
                        value={payment.countryOrRegion}
                        onChange={(e) => handlePaymentChange("countryOrRegion", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Postal / ZIP code</label>
                      <input
                        type="text"
                        value={payment.postalCode}
                        onChange={(e) => handlePaymentChange("postalCode", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-black/10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        }
      />
    </Container>
  );
}
