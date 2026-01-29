"use client";

import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  name: string;
  tagline: string;
  avatarUrl: string;
  backgroundUrl: string;
  joinedDate: string;
  location: string;
  totalServices: number;
  onEditProfile?: () => void;
  onChangeAvatar?: () => void;
  onChangeBackground?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  tagline,
  avatarUrl,
  backgroundUrl,
  joinedDate,
  location,
  totalServices,
  onEditProfile,
  onChangeAvatar,
  onChangeBackground,
}) => {
  return (
    <article
      className="w-full bg-white rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
      }}>
      {/* Background Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200">
        <Image
          src={backgroundUrl || "/placeholder.svg"}
          alt="Profile background"
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
        {/* Camera Icon for Background */}
        <button
          type="button"
          onClick={onChangeBackground}
          className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 p-2 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          aria-label="Change background image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="30"
            viewBox="0 0 37 30"
            className="w-5 h-5 sm:w-7.5 sm:h-7.5"
            fill="none">
            <path
              d="M23.921 17.168C23.921 20.385 21.304 23.002 18.087 23.002C14.87 23.002 12.254 20.385 12.254 17.168C12.254 13.951 14.87 11.334 18.087 11.334C21.304 11.334 23.921 13.952 23.921 17.168ZM36.174 8.884V25.454C36.174 27.663 34.383 29.454 32.174 29.454H4C1.791 29.454 0 27.663 0 25.454V8.884C0 6.675 1.791 4.884 4 4.884H8.92V3.5C8.92 1.567 10.486 0 12.42 0H23.754C25.688 0 27.254 1.567 27.254 3.5V4.883H32.174C34.383 4.884 36.174 6.675 36.174 8.884ZM26.921 17.168C26.921 12.297 22.958 8.334 18.087 8.334C13.217 8.334 9.254 12.297 9.254 17.168C9.254 22.039 13.217 26.002 18.087 26.002C22.958 26.002 26.921 22.039 26.921 17.168Z"
              fill="#FFB2C3"
            />
          </svg>
        </button>
      </div>

      {/* Avatar and Content Section */}
      <div className="relative px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        {/* Avatar - Positioned to overlap background */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          {/* Avatar Container */}
          <div className="relative -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 shrink-0 mx-auto sm:mx-0">
            <div className="relative">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-4 sm:border-5 md:border-6 border-white bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden ">
                <Image
                  src={avatarUrl || "/placeholder.svg"}
                  alt={name}
                  className="w-full h-full object-cover"
                  width={240}
                  height={240}
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                  priority
                />
              </div>
              {/* Camera Icon for Avatar */}
              <button
                type="button"
                onClick={onChangeAvatar}
                className="absolute bottom-2 right-2 sm:bottom-4.5 sm:right-4.5 bg-white hover:bg-gray-100 p-1.5 sm:p-2 rounded-md shadow-md transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-label="Change avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 37 30"
                  className="w-4.5 h-4.5 sm:w-7.5 sm:h-7.5"
                  fill="none">
                  <path
                    d="M23.921 17.168C23.921 20.385 21.304 23.002 18.087 23.002C14.87 23.002 12.254 20.385 12.254 17.168C12.254 13.951 14.87 11.334 18.087 11.334C21.304 11.334 23.921 13.952 23.921 17.168ZM36.174 8.884V25.454C36.174 27.663 34.383 29.454 32.174 29.454H4C1.791 29.454 0 27.663 0 25.454V8.884C0 6.675 1.791 4.884 4 4.884H8.92V3.5C8.92 1.567 10.486 0 12.42 0H23.754C25.688 0 27.254 1.567 27.254 3.5V4.883H32.174C34.383 4.884 36.174 6.675 36.174 8.884ZM26.921 17.168C26.921 12.297 22.958 8.334 18.087 8.334C13.217 8.334 9.254 12.297 9.254 17.168C9.254 22.039 13.217 26.002 18.087 26.002C22.958 26.002 26.921 22.039 26.921 17.168Z"
                    fill="#FFB2C3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Profile Header Info */}
          <div className="flex-1 pt-6 sm:pt-0 w-full">
            {/* Name and Icons Row */}
            <header className="flex items-center justify-between gap-3 mb-3 sm:mb-4 flex-wrap">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 truncate">
                  {name}
                </h1>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded"
                  aria-label="Copy profile link">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </button>
              </div>
              <button
                type="button"
                onClick={onEditProfile}
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded mt-2 sm:mt-0"
                aria-label="Edit profile">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </header>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl warp-words">
              {tagline}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 pb-6 sm:pb-8">
              {/* Joined */}
              <div>
                <p className="text-xs sm:text-[15px] font-semibold text-gray-900 mb-2">
                  Joined
                </p>

                <div className="flex items-center gap-3">
                  <div className="text-gray-400 shrink-0" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M16 2V6M8 2V6M21 12C21 8.229 21 6.343 19.828 5.172C18.656 4.001 16.771 4 13 4H11C7.229 4 5.343 4 4.172 5.172C3.001 6.344 3 8.229 3 12V14C3 17.771 3 19.657 4.172 20.828C5.344 21.999 7.229 22 11 22M3 10H21"
                        stroke="#61758A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.267 18.701L17 18V16.267M21 18C21 19.0609 20.5786 20.0783 19.8284 20.8284C19.0783 21.5786 18.0609 22 17 22C15.9391 22 14.9217 21.5786 14.1716 20.8284C13.4214 20.0783 13 19.0609 13 18C13 16.9391 13.4214 15.9217 14.1716 15.1716C14.9217 14.4214 15.9391 14 17 14C18.0609 14 19.0783 14.4214 19.8284 15.1716C20.5786 15.9217 21 16.9391 21 18Z"
                        stroke="#61758A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <time className="text-sm sm:text-base text-gray-600 truncate">
                    {joinedDate}
                  </time>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs sm:text-[15px] font-semibold text-gray-900 mb-2">
                  Location
                </p>

                <div className="flex items-center gap-3">
                  <div className="text-gray-400 shrink-0" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12 2.5C13.9891 2.5 15.8972 3.28977 17.3037 4.69629C18.7102 6.10281 19.5 8.01088 19.5 10C19.5 13.0563 17.6088 15.9372 15.6309 18.1006C14.6509 19.1724 13.6696 20.0469 12.9326 20.6533C12.5645 20.9563 12.258 21.1917 12.0449 21.3506C12.0296 21.362 12.0143 21.3722 12 21.3828C11.9857 21.3722 11.9704 21.362 11.9551 21.3506C11.742 21.1917 11.4355 20.9563 11.0674 20.6533C10.3304 20.0469 9.34909 19.1724 8.36914 18.1006C6.39118 15.9372 4.5 13.0563 4.5 10C4.5 8.01088 5.28977 6.10281 6.69629 4.69629C8.10281 3.28977 10.0109 2.5 12 2.5ZM12 6.5C11.0717 6.5 10.1818 6.86901 9.52539 7.52539C8.86901 8.18177 8.5 9.07174 8.5 10C8.5 10.9283 8.86901 11.8182 9.52539 12.4746C10.1818 13.131 11.0717 13.5 12 13.5C12.9283 13.5 13.8182 13.131 14.4746 12.4746C15.131 11.8182 15.5 10.9283 15.5 10C15.5 9.07174 15.131 8.18177 14.4746 7.52539C13.8182 6.86901 12.9283 6.5 12 6.5Z"
                        stroke="#61758A"
                      />
                      <path
                        d="M20 10C20 16.5 12 22 12 22C12 22 4 16.5 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                        stroke="#61758A"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10Z"
                        stroke="#61758A"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <time className="text-sm sm:text-base text-gray-600 truncate">
                    {location}
                  </time>
                </div>
              </div>

              {/* Total Services */}
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="text-xs sm:text-[15px] font-semibold text-gray-900 mb-2">
                  Total Services Taken
                </p>

                <div className="flex items-center gap-3">
                  <div className="text-gray-400 shrink-0" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M7.53516 3.06836C9.04863 3.0122 10.5276 3.53081 11.6748 4.51953L12.001 4.80078L12.3271 4.51953C13.4734 3.53247 14.9503 3.015 16.4619 3.07031C17.9736 3.12563 19.4085 3.75014 20.4795 4.81836C21.5504 5.88656 22.179 7.31963 22.2383 8.83105C22.2974 10.3383 21.7853 11.8116 20.8066 12.959L13.0596 20.7314C12.7921 20.9988 12.4336 21.1557 12.0557 21.1699C11.7249 21.1823 11.4008 21.0844 11.1328 20.8945L11.0215 20.8076L10.9385 20.7324H10.9395L3.19238 12.959C2.21446 11.8126 1.7037 10.34 1.76172 8.83398C1.81998 7.32365 2.44579 5.89094 3.51465 4.82227C4.58547 3.75125 6.02169 3.12452 7.53516 3.06836ZM7.59668 4.06738C6.40804 4.10587 5.27202 4.5666 4.39258 5.36719L4.38477 5.37402L4.23145 5.51953H4.23047L4.22168 5.5293C3.31315 6.43807 2.7891 7.66163 2.75879 8.94629C2.72858 10.2311 3.19471 11.4782 4.05957 12.4287V12.4297L4.06641 12.4365L4.21191 12.5908L12 20.3789L12.3535 20.0254L17.6562 14.7197L18.0098 14.3662L17.6562 14.0127L14.1211 10.4795L13.7676 10.126L12.3545 11.5391C11.8858 12.008 11.2499 12.2713 10.5869 12.2715C9.92381 12.2716 9.28736 12.0088 8.81836 11.54C8.34945 11.0713 8.08615 10.4355 8.08594 9.77246C8.08578 9.10937 8.34862 8.4729 8.81738 8.00391L10.9199 5.90137L11.3145 5.50586L10.8779 5.15723C9.94858 4.41523 8.78528 4.02893 7.59668 4.06738ZM16.4199 4.06641C15.1147 4.02061 13.8425 4.48774 12.877 5.36719L12.8691 5.375L12.7158 5.52051L9.52539 8.71094C9.26554 8.97065 9.11053 9.31686 9.08887 9.68359C9.06731 10.0504 9.18065 10.4127 9.4082 10.7012L9.41797 10.7139L9.42871 10.7256L9.50684 10.8125L9.51562 10.8223L9.52539 10.832C9.78514 11.092 10.1312 11.2479 10.498 11.2695C10.8649 11.2911 11.2272 11.1769 11.5156 10.9492L11.5283 10.9395L11.54 10.9287L11.627 10.8506L11.6367 10.8418L11.6465 10.832L13.415 9.06445L13.4141 9.06348C13.5077 8.96995 13.6352 8.91809 13.7676 8.91797C13.9001 8.91797 14.0273 8.97081 14.1211 9.06445L18.3633 13.3066L18.7168 13.6592L19.0703 13.3066L19.7783 12.6006C20.7022 11.6774 21.2286 10.429 21.2441 9.12305C21.2597 7.81731 20.7636 6.55719 19.8623 5.6123C18.9608 4.66744 17.725 4.1123 16.4199 4.06641Z"
                        stroke="#61758A"
                      />
                    </svg>
                  </div>
                  <time className="text-sm sm:text-base text-gray-600">
                    {totalServices}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
