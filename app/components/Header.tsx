"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="siteHeader">
        <div className="headerLeft">
          <button
            className="menuButton"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="desktopNav">
            <Link href="/shop">SHOP</Link>
            <Link href="/new">NEW</Link>
            <Link href="/collection">COLLECTION</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/journal">JOURNAL</Link>
          </nav>
        </div>

        <Link href="/" className="logo">
          <img src="/BLANCYS_logo.png" alt="BLANCYS" />
        </Link>

        <div className="headerRight">
           <button
            type="button"
            onClick={() => setSearchOpen(true)}
           >
            SEARCH
           </button>
          <Link
  href="/cart"
  aria-label={`Cart with ${cartCount} items`}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "inherit",
    textDecoration: "none",
  }}
>
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7.5 9V7.5C7.5 5.015 9.515 3 12 3C14.485 3 16.5 5.015 16.5 7.5V9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M5.5 8.5H18.5L19.5 21H4.5L5.5 8.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>

  <span>({cartCount})</span>
</Link>
        </div>
      </header>

      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <div className="mobileMenuTop">
          <Link
            href="/"
            className="mobileMenuLogo"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/BLANCYS_logo.png" alt="BLANCYS" />
          </Link>

          <button
            className="mobileMenuClose"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobileMenuNav">
          <Link href="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>

          <Link href="/new" onClick={() => setMenuOpen(false)}>
            New
          </Link>

          <Link href="/collection" onClick={() => setMenuOpen(false)}>
            Collection
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/journal" onClick={() => setMenuOpen(false)}>
            Journal
          </Link>
        </nav>

              <div className="mobileMenuBottom">
        <a
          href="https://www.instagram.com/blancys_seoul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </div>

    <div
      className={`mobileMenuOverlay ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(false)}
    />

    <SearchOverlay
      open={searchOpen}
      onClose={() => setSearchOpen(false)}
    />
  </>
);
}