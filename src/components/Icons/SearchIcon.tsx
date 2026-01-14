interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export default function SearchIcon({
  width = 19,
  height = 19,
  className = "",
  fill = "#FEFEFE",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.34668 0C12.9563 0.000196884 16.6933 3.73704 16.6934 8.34668C16.6933 10.291 16.0259 12.0783 14.9111 13.4971L18.2373 16.8223C18.6278 17.2128 18.6277 17.8468 18.2373 18.2373C17.8469 18.6277 17.2138 18.6274 16.8232 18.2373L13.4971 14.9111C12.0783 16.0258 10.291 16.6933 8.34668 16.6934C3.73708 16.6933 0.000246751 12.9563 0 8.34668C7.96305e-05 3.73698 3.73697 0.000106685 8.34668 0ZM8.34668 2C4.84153 2.00011 2.00008 4.84156 2 8.34668C2.00025 11.8517 4.84163 14.6933 8.34668 14.6934C11.8517 14.6932 14.6931 11.8516 14.6934 8.34668C14.6933 4.84162 11.8518 2.0002 8.34668 2Z"
        fill={fill}
      />
    </svg>
  );
}

