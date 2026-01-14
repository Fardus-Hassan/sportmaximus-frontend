interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export default function TrendingIcon({
  width = 24,
  height = 24,
  className = "",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
        fill={fill}
      />
    </svg>
  );
}
