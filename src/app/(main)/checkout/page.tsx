"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon } from "@/components/Icons";
import UserInfoSideBar from "@/components/UserInfoSideBar";

const DEFAULT_ARTIST_NAME = "Nila Akter";
const DEFAULT_ARTIST_IMAGE = "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400";
const DEFAULT_APPOINTMENT = "Dec 15, 2025 • 11:00 AM";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, logout } = useAuth();
  const [showBookingConfirmedModal, setShowBookingConfirmedModal] = useState(false);
  const confirmedArtistName = searchParams.get("artist") ?? DEFAULT_ARTIST_NAME;
  const confirmedDateTime = searchParams.get("dateTime") ?? DEFAULT_APPOINTMENT;
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
    setShowBookingConfirmedModal(true);
  };

  const sidebarContent = (
<UserInfoSideBar
              role="user"
              profile={{
                name: "Sarah Johnson",
                location: "Dhaka, Bangladesh",
                distance: "4.5 km",
                coverImage:
                  "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1200",
                avatar:
                  "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Where modern beauty meets neo precision, comfort, confidence, and personalized care.",
              }}
              menuItems={[
                {
                  id: "transaction-history",
                  label: "Transaction History",
                  icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
                  onClick: () => console.log("Transaction History clicked"),
                },
                {
                  id: "bookmarks",
                  label: "Bookmarks",
                  icon: <BookmarkIcon width={20} height={20} fill="currentColor" />,
                  onClick: () => console.log("Bookmarks clicked"),
                },  
                {
                  id: "edit-profile",
                  label: "Edit Profile",
                  icon: <EditIcon width={20} height={20} fill="currentColor" />,
                  onClick: () => router.push("/profile/edit"),
                },
                {
                  id: "log-out",
                  label: "Log Out",
                  icon: <LogoutIcon width={20} height={20} className="text-current" />,
                  onClick: () => console.log("Log Out clicked"),
                },
              ]}
              onViewProfile={() => router.push("/profile")}
            />
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

      {/* Booking Confirmed Modal */}
      {showBookingConfirmedModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowBookingConfirmedModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowBookingConfirmedModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-text-primary/60 hover:text-text-primary hover:bg-black/5"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center mt-2">
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-primary mt-4">Booking Confirmed!</h3>
            <p className="text-sm text-text-primary/70 mt-1">Your appointment with {confirmedArtistName}</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-center mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-text-primary text-sm font-medium w-fit">
                <span className="relative h-6 w-6 rounded-full overflow-hidden bg-black/10 shrink-0">
                  <Image
                    src={DEFAULT_ARTIST_IMAGE}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </span>
                {confirmedArtistName}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-text-primary text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {confirmedDateTime}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowBookingConfirmedModal(false);
                router.push("/profile");
              }}
              className="w-full mt-6 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              See all appointments
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}

function CheckoutFallback() {
  return (
    <Container className="py-6 sm:py-8 mt-12">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-48 rounded-lg bg-black/10" />
        <div className="h-64 rounded-xl bg-black/5" />
      </div>
    </Container>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutContent />
    </Suspense>
  );
}
