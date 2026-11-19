type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 8C9 5.2 23 5.2 29 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3 16C9 13.2 23 13.2 29 16" stroke="var(--accent, #B8F36B)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3 24C9 21.2 23 21.2 29 24" stroke="currentColor" strokeOpacity="0.42" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
