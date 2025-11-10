// components/Header.js
"use client";

import Image from 'next/image';
import Find from "../components/Find";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo-link">
          <Image
            src="/images/ggc-logo.png"
            alt="GGC Logo"
            // Use the original image intrinsic dimensions so Next.js knows the aspect ratio
            width={200}
            height={113}
            className="header-logo-img"
            priority
          />
        </div>
        <div className="header-search">
          <Find />
        </div>
        <div className="header-spacer"></div>
      </nav>
    </header>
  );
}

// Note: Logo Image is responsive via srcSet by default in Next.js Image
// Mobile breakpoints are handled via CSS media queries in global.css