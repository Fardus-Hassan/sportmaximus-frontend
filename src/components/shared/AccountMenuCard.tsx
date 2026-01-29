"use client";

import TodoCheckListIcon from "@/components/Icons/TodoCheckListIcon";
import BookmarkOutlineIcon from "@/components/Icons/BookmarkOutlineIcon";
import { EditIcon } from "@/components/Icons";
import LogoutIcon from "@/components/Icons/LogoutIcon";
import Link from "next/link";
import { useState } from "react";
import Dialog from "./Dialogs";

export default function AccountMenuItemsCard() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");

    // For example, if you're using NextAuth:
    // signOut({ callbackUrl: '/' });

    // Or if you're using token-based auth:
    // localStorage.removeItem('token');
    // router.push('/login');

    // Show confirmation dialog or directly log out
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    // Perform actual logout here
    console.log("User confirmed logout");

    // Close the dialog
    setShowLogoutDialog(false);

    // Redirect or perform actual logout
    // router.push('/login');
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  const accountMenuItems = [
    {
      id: "profile",
      label: "Transaction History",
      icon: <TodoCheckListIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      id: "bookmarks",
      label: "Bookmarks",
      icon: <BookmarkOutlineIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: <EditIcon width={20} height={20} fill="currentColor" />,
      href: "/user/edit-profile",
    },
    {
      id: "logout",
      label: "Logout",
      icon: <LogoutIcon width={20} height={20} fill="currentColor" />,
      onClick: handleLogout,
    },
  ];

  return (
    <div
      className="bg-white rounded-xl overflow-hidden"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
      }}>
      {accountMenuItems.map((item) =>
        item.href ? (
          <Link
            key={item.id}
            href={item.href}
            className="w-full flex items-center gap-3 p-4 text-left hover:bg-black/3 transition-colors">
            <div className="text-text-primary/50">{item.icon}</div>
            <span className="text-sm font-medium text-text-primary">
              {item.label}
            </span>
          </Link>
        ) : (
          <button
            key={item.id}
            onClick={item.onClick}
            className="w-full flex items-center gap-3 p-4 text-left hover:bg-black/3 transition-colors">
            <div className="text-text-primary/50">{item.icon}</div>
            <span className="text-sm font-medium text-text-primary">
              {item.label}
            </span>
          </button>
        ),
      )}

      <Dialog
        isOpen={showLogoutDialog}
        onClose={cancelLogout}
        onConfirm={confirmLogout}
        cancelText="Cancel"
        confirmText="Logout"
        showIcon={true}
        title="Are you sure you want to logout?"
      />
    </div>
  );
}
