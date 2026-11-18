export function ThreadsVisual() {
  return (
    <div className="threads-visual" aria-hidden="true">
      <div className="threads-visual__glow" />
      <svg viewBox="0 0 460 460" fill="none" className="threads-visual__svg">
        <circle cx="230" cy="230" r="204" stroke="rgba(242,244,239,0.07)" />
        <circle
          cx="230"
          cy="230"
          r="158"
          stroke="rgba(242,244,239,0.06)"
          strokeDasharray="2 9"
        />

        <path
          d="M88 84C88 186 230 190 230 252C230 322 184 352 184 414"
          stroke="#B8F36B"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="thread thread--one"
        />
        <path
          d="M230 62C230 158 230 198 230 252C230 326 230 362 230 422"
          stroke="#F2F4EF"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="thread thread--two"
        />
        <path
          d="M372 84C372 186 230 190 230 252C230 322 276 352 276 414"
          stroke="#8C9188"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="thread thread--three"
        />

        <circle cx="88" cy="84" r="5" fill="#B8F36B" />
        <circle cx="230" cy="62" r="5" fill="#F2F4EF" />
        <circle cx="372" cy="84" r="5" fill="#8C9188" />
        <circle cx="230" cy="252" r="14" fill="#101110" stroke="#B8F36B" />
        <circle cx="230" cy="252" r="4" fill="#B8F36B" />
      </svg>

      <div className="threads-visual__legend">
        <span>Design</span>
        <span>Technology</span>
        <span>Sound</span>
      </div>
    </div>
  );
}

export function VennMark() {
  return (
    <div className="venn" aria-hidden="true">
      <svg viewBox="0 0 400 350" fill="none" className="venn__svg">
        <circle cx="152" cy="132" r="104" stroke="#B8F36B" strokeWidth="1.5" />
        <circle
          cx="248"
          cy="132"
          r="104"
          stroke="#F2F4EF"
          strokeOpacity="0.75"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="220"
          r="104"
          stroke="#8C9188"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="186" r="62" fill="#101110" />
        <circle cx="200" cy="186" r="4" fill="#B8F36B" />
        <text x="200" y="213" textAnchor="middle" className="venn__center">
          ONE VISION
        </text>
        <text x="106" y="20" className="venn__label">
          DESIGN
        </text>
        <text x="294" y="20" className="venn__label">
          TECHNOLOGY
        </text>
        <text x="200" y="346" textAnchor="middle" className="venn__label">
          SOUND
        </text>
      </svg>
    </div>
  );
}

type ServiceIconProps = {
  kind: "design" | "technology" | "sound";
};

export function ServiceIcon({ kind }: ServiceIconProps) {
  if (kind === "design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2.5 21.5 12 12 21.5 2.5 12 12 2.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2.5v6M21.5 12h-6M12 21.5v-6M2.5 12h6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (kind === "technology") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="4" width="19" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 9h19" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5.5" cy="6.5" r="0.8" fill="currentColor" />
        <circle cx="8" cy="6.5" r="0.8" fill="currentColor" />
        <path d="M7 13h5M7 16.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12h2l2-6 3 12 3-15 3 18 2-9h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
