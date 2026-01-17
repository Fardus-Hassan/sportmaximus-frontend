interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  stroke?: string;
}

export default function CloseIcon({
  width = 24,
  height = 24,
  className = "",
  stroke = "currentColor",
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
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="6"
        x2="6"
        y2="18"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
