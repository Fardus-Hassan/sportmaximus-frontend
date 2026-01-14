interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export default function XIcon({
  width = 34,
  height = 34,
  className = "",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.7631 0H31.9518L20.6185 14.4311L34 34H23.4859L15.2932 22.1378L5.87149 34H0.682731L12.8353 18.5867L0 0H10.7871L18.2289 10.88L26.7631 0ZM24.9197 30.5244H27.7871L9.21687 3.24889H6.0763L24.9197 30.5244Z"
        fill={fill}
      />
    </svg>
  );
}

