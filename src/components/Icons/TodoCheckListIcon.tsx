interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export default function TodoCheckListIcon({
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
        d="M18.75 5H6.25C5.91848 5 5.60054 5.1317 5.36612 5.36612C5.1317 5.60054 5 5.91848 5 6.25V18.75C5 19.0815 5.1317 19.3995 5.36612 19.6339C5.60054 19.8683 5.91848 20 6.25 20H18.75C19.0815 20 19.3995 19.8683 19.6339 19.6339C19.8683 19.3995 20 19.0815 20 18.75V6.25C20 5.91848 19.8683 5.60054 19.6339 5.36612C19.3995 5.1317 19.0815 5 18.75 5Z"
        stroke="#61758A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2497 15.4167L13.333 17.0833L16.6663 12.9167M8.33301 8.75H16.6663M8.33301 12.0833H11.6663"
        stroke="#61758A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
