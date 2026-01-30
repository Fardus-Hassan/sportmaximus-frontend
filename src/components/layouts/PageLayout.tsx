import React from "react";

type LayoutType =
  | "three-column"
  | "two-column-left-large"
  | "two-column-right-large";

interface PageLayoutProps {
  layout?: LayoutType;
  leftColumn?: React.ReactNode;
  middleColumn?: React.ReactNode;
  rightColumn?: React.ReactNode;
  stickyLeft?: boolean;
  stickyMiddle?: boolean;
  stickyRight?: boolean;
  className?: string;
}

export default function PageLayout({
  layout = "three-column",
  leftColumn,
  middleColumn,
  rightColumn,
  stickyLeft = false,
  stickyMiddle = false,
  stickyRight = false,
  className = "",
}: PageLayoutProps) {
  // Three column layout: middle large, sides small and equal
  // Responsive: Large (lg+) = 3 columns, Medium (md) = 2 columns (left small + middle large), Small = 1 column (middle only)
  if (layout === "three-column") {
    return (
      <div
        className={`flex flex-col md:flex-row gap-6 min-h-screen mt-12 ${className}`}>
        {/* Left Column - Hidden on small, visible on medium+ */}
        {leftColumn && (
          <aside
            className={`hidden md:block w-1/4 shrink-0 ${
              stickyLeft ? "sticky top-20 h-screen overflow-y-auto" : ""
            }`}>
            {leftColumn}
          </aside>
        )}

        {/* Middle Column - Full width on small, flex-1 on medium+ */}
        <main
          className={`w-full md:flex-1 ${
            stickyMiddle ? "sticky top-20 h-screen overflow-y-auto" : ""
          }`}>
          {middleColumn}
        </main>

        {/* Right Column - Hidden on small and medium, visible on large+ */}
        {rightColumn && (
          <aside
            className={`hidden lg:block w-1/4 shrink-0 ${
              stickyRight ? "sticky top-20 h-screen overflow-y-auto" : ""
            }`}>
            {rightColumn}
          </aside>
        )}
      </div>
    );
  }

  // Two column layout: left large, right small
  // Responsive: Medium+ = 2 columns, Small = 1 column (left only)
  if (layout === "two-column-left-large") {
    return (
      <div
        className={`flex flex-col md:flex-row gap-6 min-h-screen mt-12 ${className}`}>
        {/* Left Column - Large, full width on small */}
        <main
          className={`w-full md:flex-1 ${
            stickyLeft ? "sticky top-20 h-screen overflow-y-auto" : ""
          }`}>
          {leftColumn}
        </main>

        {/* Right Column - Small, hidden on small screens */}
        {rightColumn && (
          <aside
            className={`hidden md:block w-1/4 shrink-0 ${
              stickyRight ? "sticky top-20 h-screen overflow-y-auto" : ""
            }`}>
            {rightColumn}
          </aside>
        )}
      </div>
    );
  }

  // Two column layout: right large, left small
  // Responsive: Medium+ = 2 columns, Small = 1 column (right only)
  if (layout === "two-column-right-large") {
    return (
      <div
        className={`flex flex-col md:flex-row gap-6 min-h-screen ${className}`}>
        {/* Left Column - Small, hidden on small screens */}
        {leftColumn && (
          <aside
            className={`hidden md:block w-1/4 shrink-0 ${
              stickyLeft ? "sticky top-20 h-screen overflow-y-auto" : ""
            }`}>
            {leftColumn}
          </aside>
        )}

        {/* Right Column - Large, full width on small */}
        <main
          className={`w-full md:flex-1 ${
            stickyRight ? "sticky top-20 h-screen overflow-y-auto" : ""
          }`}>
          {rightColumn}
        </main>
      </div>
    );
  }

  return null;
}
