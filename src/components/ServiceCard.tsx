"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { StarIcon, HeartIcon, CommentIcon, ShareIcon, BookmarkIcon, CalendarIcon, PlayIcon, MuteIcon } from "@/components/Icons";

export type MediaType = "image" | "video";

export interface MediaItem {
  type: MediaType;
  url: string;
  thumbnail?: string; // For videos
}

export interface ServiceCardProps {
  businessName: string;
  businessAvatar?: string;
  location: string;
  rating: number;
  serviceTitle: string;
  serviceDescription: string;
  media: MediaItem[];
  price: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  isSaved?: boolean;
  onBookNow?: () => void;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onSave?: () => void;
  className?: string;
}

export default function ServiceCard({
  businessName,
  businessAvatar,
  location,
  rating,
  serviceTitle,
  serviceDescription,
  media,
  price,
  likes,
  comments,
  shares,
  isLiked = false,
  isSaved = false,
  onBookNow,
  onLike,
  onComment,
  onShare,
  onSave,
  className = "",
}: ServiceCardProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentMedia = media[currentMediaIndex];
  const isVideo = currentMedia?.type === "video";

  // Disable body scroll when modal is open (but keep modal scrollable)
  useEffect(() => {
    if (isModalOpen) {
      // Lock body scroll
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      // Prevent Lenis from handling body scroll
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      // Resume Lenis smooth scroll
      if (window.lenis) {
        window.lenis.start();
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [isModalOpen]);

  const handlePrevious = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (currentMediaIndex < media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
      setIsPlaying(false);
    }
  };

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore play errors (autoplay policies, etc.)
        });
      }
      // isPlaying is driven by onPlay/onPause handlers
    } else {
      video.pause();
      // onPause handler will update isPlaying
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <>
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer ${className}`}
      onClick={() => setIsModalOpen(true)}
    >
      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-center gap-3">
          {businessAvatar ? (
            <Image
              src={businessAvatar}
              alt={businessName}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">
                {businessName.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary text-sm">{businessName}</h3>
            <div className="flex items-center gap-2 text-xs text-text-primary/70">
              <span>{location}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <StarIcon width={14} height={14} fill="#FFD700" />
                <span>{rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="font-bold text-text-primary text-base mb-1">{serviceTitle}</h4>
          <p className="text-sm text-text-primary/70">{serviceDescription}</p>
        </div>
      </div>

      {/* Media Carousel */}
      <div className="relative w-full aspect-4/3 bg-black/5">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={currentMedia.url}
              poster={currentMedia.thumbnail}
              className="w-full h-full object-cover"
              muted={isMuted}
              playsInline
              loop
              onClick={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                aria-label="Play"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <PlayIcon width={32} height={32} fill="#E32750" />
                </div>
              </button>
            )}
          </>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={currentMedia.url}
              alt={serviceTitle}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        {/* Mute Icon (for videos) */}
        {isVideo && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMuteToggle();
            }}
            className={`absolute bottom-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isMuted ? "bg-black/60 text-white" : "bg-white text-primary"
            }`}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <MuteIcon width={16} height={16} fill={isMuted ? "white" : "#E32750"} />
          </button>
        )}

        {/* Carousel Indicator */}
        {media.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {currentMediaIndex + 1}/{media.length}
          </div>
        )}

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            {currentMediaIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Previous"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {currentMediaIndex < media.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Next"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="p-4">
        {/* Price and Book Button */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookNow?.();
            }}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <CalendarIcon width={18} height={18} fill="white" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike?.();
            }}
            className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
          >
            <HeartIcon
              width={20}
              height={20}
              fill={isLiked ? "#E32750" : "currentColor"}
            />
            <span className="text-sm font-medium">{formatCount(likes)}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onComment?.();
            }}
            className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
          >
            <CommentIcon width={20} height={20} fill="currentColor" />
            <span className="text-sm font-medium">{formatCount(comments)}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onShare?.();
            }}
            className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
          >
            <ShareIcon width={20} height={20} fill="currentColor" />
            <span className="text-sm font-medium">{formatCount(shares)}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave?.();
            }}
            className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
          >
            <BookmarkIcon
              width={20}
              height={20}
              fill={isSaved ? "#E32750" : "currentColor"}
            />
            <span className="text-sm font-medium">Save</span>
          </button>
        </div>
      </div>
    </div>
    {isModalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 h-screen hide-scrollbar modal-overlay"
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="max-w-[592px] w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl bg-white p-6 space-y-4 hide-scrollbar modal-content"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => {
            // Allow native scroll in modal, prevent Lenis from interfering
            e.stopPropagation();
          }}
          style={{ overscrollBehavior: "contain" }}
        >
          <div className="">
            {/* Header (reuse) */}
            <div className="flex items-center gap-3">
              {businessAvatar ? (
                <Image
                  src={businessAvatar}
                  alt={businessName}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {businessName.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary text-sm">{businessName}</h3>
                <div className="flex items-center gap-2 text-xs text-text-primary/70">
                  <span>{location}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <StarIcon width={14} height={14} fill="#FFD700" />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title & description */}
            <div className="my-4">
              <h4 className="font-bold text-text-primary text-base mb-1">{serviceTitle}</h4>
              <p className="text-sm text-text-primary/70">{serviceDescription}</p>
            </div>

            {/* Large media with native controls for video */}
            <div className="relative w-full aspect-4/3 bg-black/5 rounded-xl overflow-hidden">
              {isVideo ? (
                <video
                  src={currentMedia.url}
                  poster={currentMedia.thumbnail}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={currentMedia.url}
                    alt={serviceTitle}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
            </div>

            {/* Price & actions (reuse layout) */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-primary">{price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookNow?.();
                  }}
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <CalendarIcon width={18} height={18} fill="white" />
                  <span>Book Now</span>
                </button>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onLike?.();
                  }}
                  className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
                >
                  <HeartIcon
                    width={20}
                    height={20}
                    fill={isLiked ? "#E32750" : "currentColor"}
                  />
                  <span className="text-sm font-medium">{formatCount(likes)}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onComment?.();
                  }}
                  className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
                >
                  <CommentIcon width={20} height={20} fill="currentColor" />
                  <span className="text-sm font-medium">{formatCount(comments)}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onShare?.();
                  }}
                  className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
                >
                  <ShareIcon width={20} height={20} fill="currentColor" />
                  <span className="text-sm font-medium">{formatCount(shares)}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSave?.();
                  }}
                  className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors"
                >
                  <BookmarkIcon
                    width={20}
                    height={20}
                    fill={isSaved ? "#E32750" : "currentColor"}
                  />
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>

            {/* Simple comments section placeholder */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Sophia Clark</p>
                  <p className="text-xs text-text-primary/60">sophiaclark003@example.com</p>
                  <p className="mt-2 text-sm text-text-primary/80">
                    This nail art is absolutely stunning. The glossy finish and clean details
                    really stand out!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  Y
                </div>
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="flex-1 rounded-full border border-black/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}