"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  showIcon?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Ask to cancel this appointment?",
  confirmText = "Send Request",
  cancelText = "Cancel",
  showIcon = true,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when dialog is open
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const dialogContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/0"
      style={{
        zIndex: 9999,
        animation: "fadeIn 0.3s ease-out forwards",
      }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title">
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md opacity-0 scale-95 translate-y-2"
        style={{
          animation: "scaleIn 0.3s ease-out forwards",
        }}>
        <div className="p-8 sm:p-10 text-center">
          {/* Icon */}
          {showIcon && (
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Title */}
          <h2
            id="dialog-title"
            className="text-2xl sm:text-[28px] font-semibold text-gray-900 mb-8 leading-tight px-2">
            {title}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Send Request Button */}
            <button
              onClick={onConfirm}
              className="flex-1 bg-primary hover:bg-[#ce2348] text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] transform focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:ring-offset-2"
              type="button">
              {confirmText}
            </button>

            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-medium py-3.5 px-6 rounded-xl border-2 border-gray-300 transition-all duration-200 hover:border-gray-400 active:scale-[0.98] transform focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              type="button">
              {cancelText}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );

  // Use portal to render at document body level
  return typeof document !== "undefined"
    ? createPortal(dialogContent, document.body)
    : null;
};

export default Dialog;
