"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white p-2 h-screen overflow-hidden">
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
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group/image">
              {/* Image with overlay gradient and custom clip-path */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>

              <Image
                src="/images/top.jpg"
                alt="Hero illustration"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover/image:scale-110"
                style={{
                  clipPath: "polygon(0 8%, 8% 0, 100% 0, 100% 100%, 0 100%)",
                }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating badge */}
              <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">
                    Live Now
                  </span>
                </div>
              </div>

              {/* Glassmorphism Overlay with Enhanced Text */}
              <div className="absolute inset-0 flex items-end justify-center z-20 p-6 md:p-8">
                <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 border border-white/20 max-w-md w-full transform transition-all duration-500 hover:scale-105 hover:bg-white/15">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-8 bg-linear-to-b from-blue-400 to-purple-600 rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      Innovation Meets Design
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-4">
                    Experience the future of technology with our cutting-edge
                    solutions that blend creativity with functionality.
                  </p>

                  {/* Progress indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-200 mb-1">
                      <span>Performance</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-linear-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
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

export default HeroSection;
