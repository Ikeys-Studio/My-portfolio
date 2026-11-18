type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 7C8.5 4.5 21.5 4.5 27 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 15C8.5 12.5 21.5 12.5 27 15"
        stroke="#B8F36B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 23C8.5 20.5 21.5 20.5 27 23"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
