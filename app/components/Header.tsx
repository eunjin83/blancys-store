"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <Link href="/#new">NEW</Link>
            <Link href="/#collection">COLLECTION</Link>
            <Link href="/#story">ABOUT</Link>
            <Link href="/#journal">JOURNAL</Link>
          </nav>
        </div>

        <Link href="/" className="logo">
          <img src="/BLANCYS_logo.png" alt="BLANCYS" />
        </Link>

        <div className="headerRight">
          <button>SEARCH</button>
          <Link href="/cart">CART ({cartCount})</Link>
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

          <Link href="/#new" onClick={() => setMenuOpen(false)}>
            New
          </Link>

          <Link href="/#collection" onClick={() => setMenuOpen(false)}>
            Collection
          </Link>

          <Link href="/#story" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/#journal" onClick={() => setMenuOpen(false)}>
            Journal
          </Link>
        </nav>

        <div className="mobileMenuBottom">
          <a href="#">Instagram</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div
        className={`mobileMenuOverlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}