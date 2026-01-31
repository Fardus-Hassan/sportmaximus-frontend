"use client";
import React from "react";
import Image from "next/image";

const OnBoardingPages: React.FC = () => {
  const INVERTED_CORNERS_CLIP = "inverted-corners-clip";

  return (
    <div className="bg-white p-2 h-screen overflow-hidden">
      <svg width={0} height={0} className="absolute" aria-hidden>
        <defs>
          <clipPath
            id={INVERTED_CORNERS_CLIP}
            clipPathUnits="objectBoundingBox">
            <path
              d="M 0.12,0 L 1,0 L 1,0.88 A 0.12,0.12 0 0 1 0.88,1 L 0,1 L 0,0.12 A 0.12,0.12 0 0 1 0.12,0 Z"
              fill="black"
            />
          </clipPath>
          {/* polygon(100% 8%, 100% 100%, 40% 100%, 40% 90%, 0% 90%, 0% 0%, 90% 0%, 90% 8%) with rounded corners */}
          <clipPath id="hero-polygon-rounded" clipPathUnits="objectBoundingBox">
            <path
              d="
                    M 0.9 0.08

                    L 0.96 0.08
                    Q 1 0.08 1 0.12

                    L 1 0.96
                    Q 1 1 0.96 1

                    L 0.44 1
                    Q 0.4 1 0.4 0.96

                    L 0.4 0.92
                    Q 0.4 0.9 0.36 0.9

                    L 0.06 0.9
                    Q 0 0.9 0 0.84

                    L 0 0.06
                    Q 0 0 0.06 0

                    L 0.84 0
                    Q 0.9 0 0.9 0.06

                    Q 0.9 0.08 0.92 0.08
                    Z
                    "
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/40 to-black/30 backdrop-blur-sm"></div>

        {/* Animated gradient orbs for depth */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 p-4 sm:p-6 h-full flex items-center overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full h-[calc(100vh-4rem)]">
            {/* Left Column - Text Content */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10 w-full h-full flex flex-col justify-center overflow-y-auto hover:bg-white/10 transition-all duration-500 group">
              <div className="space-y-4 md:space-y-6">
                {/* Accent line */}
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:w-32 transition-all duration-500"></div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 leading-tight">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-300%">
                    Digital Experience
                  </span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium">
                  Next-Generation Solutions for Modern Businesses
                </h2>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                  Elevate your brand with cutting-edge technology and innovative
                  design. We create seamless digital experiences that captivate
                  your audience and drive meaningful results.
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
                  <div className="flex items-center gap-2 text-gray-200">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Fast & Reliable</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                    <span className="text-sm">Scalable</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                    <span className="text-sm">Secure</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button className="group/btn relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto overflow-hidden">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Learn More
                  </button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      10K+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">
                      Active Users
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      98%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">
                      Satisfaction
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden ">
              <div
                className="absolute inset-0 md:inset-y-0 md:left-0 md:right-0 overflow-hidden rounded-b-3xl md:rounded-none group/image"
                style={{ clipPath: "url(#hero-polygon-rounded)" }}>
                <Image
                  src="/images/top.jpg"
                  alt="Hero illustration"
                  fill
                  className="object-cover object-center transition-transform "
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute right-4 top-0">
                <button className="bg-red-300 h-14 w-14 rounded-full">
                  Skip
                </button>
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-4">
                  <button className="bg-red-300 w-full py-3 px-9 rounded-xl">
                    Prev
                  </button>
                  <button className="bg-red-300 w-full py-3 px-9 rounded-xl">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .bg-300\% {
          background-size: 300% 300%;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default OnBoardingPages;
