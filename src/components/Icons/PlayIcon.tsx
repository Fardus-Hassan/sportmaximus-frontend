interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export default function PlayIcon({
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
        d="M8 5V19L19 12L8 5Z"
        fill={fill}
      />
    </svg>
  );
}
