interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export default function BookmarkOutlineIcon({
  width = 24,
  height = 24,
  className = "",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}>
      <path
        d="M5 17.3827V9.93678C5 6.66674 5 5.03173 6.02512 4.01587C7.05026 3 8.70017 3 12 3C15.2998 3 16.9498 3 17.9748 4.01587C19 5.03173 19 6.66674 19 9.93678V17.3827C19 19.458 19 20.4956 18.3238 20.8671C17.0142 21.5863 14.5578 19.1867 13.3913 18.4642C12.7147 18.0451 12.3764 17.8356 12 17.8356C11.6236 17.8356 11.2853 18.0451 10.6087 18.4642C9.4422 19.1867 6.98579 21.5863 5.67624 20.8671C5 20.4956 5 19.458 5 17.3827Z"
        stroke="#61758A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
