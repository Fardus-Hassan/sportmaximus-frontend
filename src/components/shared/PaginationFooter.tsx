"use client";

import { useId, useState, useEffect } from "react";
import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface PaginationFooterProps {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPageOptions?: string[];
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (items: string) => void;
  defaultItemsPerPage?: string;
}

const PaginationFooter = ({
  currentPage = 1,
  totalPages = 16,
  totalItems = 1450,
  itemsPerPageOptions = ["10", "25", "50"],
  onPageChange = () => {},
  onItemsPerPageChange = () => {},
  defaultItemsPerPage = "11",
}: PaginationFooterProps) => {
  const id = useId();
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [page, setPage] = useState(currentPage);
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize with a function to avoid issues during SSR
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call handleResize to ensure state is synced on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    onPageChange(newPage);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(value);
    onItemsPerPageChange(value);
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = isMobile ? 3 : 7;

    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (isMobile) {
        // Mobile: Show first, current (if not first or last), last
        if (page > 2 && page < totalPages - 1) {
          pages.push("...");
          pages.push(page);
          pages.push("...");
        } else if (page === 2) {
          pages.push(2);
          pages.push("...");
        } else if (page > 2) {
          pages.push("...");
        }
      } else {
        // Desktop: Show more context
        const leftSiblingIndex = Math.max(page - 1, 2);
        const rightSiblingIndex = Math.min(page + 1, totalPages - 1);

        const showLeftEllipsis = leftSiblingIndex > 2;
        const showRightEllipsis = rightSiblingIndex < totalPages - 1;

        if (showLeftEllipsis) {
          pages.push("...");
        }

        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pages.push(i);
        }

        if (showRightEllipsis) {
          pages.push("...");
        }
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const startItem = Math.min(
    (page - 1) * parseInt(itemsPerPage) + 1,
    totalItems,
  );
  const endItem = Math.min(page * parseInt(itemsPerPage), totalItems);

  return (
    <div className="w-full mt-4">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:gap-6 lg:px-6">
        {/* Left: Items info and per-page selector */}
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-start">
          <div className="flex items-center gap-2">
            <label
              htmlFor={id}
              className="text-sm text-muted-foreground whitespace-nowrap">
              Showing
            </label>
            <Select
              value={itemsPerPage}
              onValueChange={handleItemsPerPageChange}>
              <SelectTrigger
                id={id}
                className="h-9 w-17.5 focus:ring-2 focus:ring-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {itemsPerPageOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Item count - shows on mobile too */}
          <div className="text-sm text-muted-foreground whitespace-nowrap">
            <span className="font-medium text-foreground">
              {startItem}-{endItem}
            </span>
            <span className="mx-1">of</span>
            <span className="font-medium text-foreground">
              {totalItems.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Right: Pagination controls */}
        <Pagination className="mx-0 w-auto">
          <PaginationContent className="gap-1">
            {/* First page button - hidden on mobile */}
            <PaginationItem className="hidden sm:inline-flex">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-primary/10 hover:text-accent-foreground ${
                  page === 1 ? "pointer-events-none opacity-50" : ""
                }`}
                aria-label="Go to first page">
                <ChevronsLeftIcon className="h-4 w-4" />
              </Link>
            </PaginationItem>

            {/* Previous button */}
            <PaginationItem>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page - 1);
                }}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-primary/10 hover:text-accent-foreground ${
                  page === 1 ? "pointer-events-none opacity-50" : ""
                }`}
                aria-label="Go to previous page">
                <ChevronLeftIcon className="h-4 w-4" />
              </Link>
            </PaginationItem>

            {/* Page numbers */}
            {getVisiblePages().map((p, idx) => (
              <PaginationItem key={`${p}-${idx}`}>
                {p === "..." ? (
                  <PaginationEllipsis className="h-9 w-9" />
                ) : (
                  <PaginationLink
                    href="#"
                    isActive={p === page}
                    onClick={(e) => {
                      e.preventDefault();
                      if (typeof p === "number") {
                        handlePageChange(p);
                      }
                    }}
                    className={`h-9 w-9 transition-colors ${
                      p === page
                        ? "bg-primary text-primary-foreground hover:bg-primary/10  font-medium"
                        : "hover:bg-primary/10 hover:text-accent-foreground"
                    }`}
                    aria-label={`Go to page ${p}`}
                    aria-current={p === page ? "page" : undefined}>
                    {p}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            {/* Next button */}
            <PaginationItem>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page + 1);
                }}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-primary/10 hover:text-accent-foreground ${
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }`}
                aria-label="Go to next page">
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </PaginationItem>

            {/* Last page button - hidden on mobile */}
            <PaginationItem className="hidden sm:inline-flex">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-primary/10 hover:text-accent-foreground ${
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }`}
                aria-label="Go to last page">
                <ChevronsRightIcon className="h-4 w-4" />
              </Link>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default PaginationFooter;

// const TablePaginationDemo = () => {
//   return (
//     <div className='w-full'>
//       <PaginationFooter
//         currentPage={1}
//         totalPages={16}
//         totalItems={1450}
//         itemsPerPageOptions={['10', '11', '25', '50']}
//         defaultItemsPerPage='11'
//         onPageChange={(page) => console.log('Page changed to:', page)}
//         onItemsPerPageChange={(items) => console.log('Items per page changed to:', items)}
//       />
//     </div>
//   )
// }
