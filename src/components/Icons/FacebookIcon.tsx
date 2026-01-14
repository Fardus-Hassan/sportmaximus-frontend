import { useId } from "react";

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function FacebookIcon({
  width = 36,
  height = 36,
  className = "",
}: IconProps) {
  const id = useId();
  const clipId = `fb-clip-${id}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M36 18.11C36 8.10812 27.9411 0 18 0C8.05887 0 0 8.10812 0 18.11C0 27.1492 6.58234 34.6414 15.1875 36V23.3449H10.6172V18.11H15.1875V14.1201C15.1875 9.58132 17.8748 7.07422 21.9864 7.07422C23.9557 7.07422 26.0156 7.42793 26.0156 7.42793V11.8847H23.7459C21.5098 11.8847 20.8125 13.2807 20.8125 14.7129V18.11H25.8047L25.0066 23.3449H20.8125V36C29.4177 34.6414 36 27.1492 36 18.11Z"
          fill="#1877F2"
        />
        <path
          d="M25.0171 23.6311L25.7945 18.6019H20.9315V15.3383C20.9315 13.9625 21.6108 12.6214 23.789 12.6214H26V8.33981C26 8.33981 23.9934 8 22.075 8C18.0698 8 15.4521 10.4085 15.4521 14.7689V18.6019H11V23.6311H15.4521V35.7886C16.3448 35.9276 17.2597 36 18.1918 36C19.1238 36 20.0388 35.9276 20.9315 35.7886V23.6311H25.0171Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

