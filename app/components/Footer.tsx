"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [showBusiness, setShowBusiness] = useState(false);

  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <div className="footerBrand">
          <Link href="/" className="footerLogo">
            <img src="/BLANCYS_logo.png" alt="BLANCYS" />
          </Link>

          <p>
            Timeless bags designed
            <br />
            for everyday life.
          </p>
        </div>

        <div className="footerColumn">
          <h4>SHOP</h4>
          <Link href="/shop">All Products</Link>
          <Link href="/new">New Arrivals</Link>
          <Link href="/collection">Collection</Link>
        </div>

        <div className="footerColumn">
          <h4>CUSTOMER CARE</h4>
          <Link href="/notice">Notice</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/shipping-returns">Shipping & Returns</Link>
        </div>

        <div className="footerColumn">
          <h4>ABOUT</h4>
          <Link href="/about">Our Story</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footerColumn">
          <h4>FOLLOW</h4>
          <a
            href="https://www.instagram.com/blancys_seoul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

     

      <div className="footerBottom">
      <div className="footerPolicies">
       <Link href="/terms">Terms of Use</Link>
       <Link href="/privacy">Privacy Policy</Link>
       <button
         type="button"
         className="businessInfoButton"
         onClick={() => setShowBusiness(!showBusiness)}
       >
         사업자정보확인
       </button>
     </div>

  <p>© 2026 BLANCYS. All rights reserved.</p>
</div>

{showBusiness && (
  <div className="businessInfoPanel">

    <div className="businessInfoDesktop">
      <p>
      상호명: 블랑시스 (BLANCYS)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;대표자: 이혜미&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;사업자등록번호: 370-16-01194&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;통신판매신고번호: 2021-서울마포-2399&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;주소: 서울특별시 마포구 양화로 186 LC TOWER, 6층 605호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;대표전화: 0507-1337-2470&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;이메일: blancys.kr@gmail.com
      </p>
    </div>

    <div className="businessInfoMobile">
      <p>·&nbsp;상호명: 블랑시스 (BLANCYS)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;대표자: 이혜미</p>
      <p>·&nbsp;사업자등록번호: 370-16-01194&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;통신판매신고번호: 2021-서울마포-2399</p>
      <p>·&nbsp;주소: 서울특별시 마포구 양화로 186 LC TOWER, 6층 605호</p>
      <p>·&nbsp;대표전화: 0507-1337-2470&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;이메일: blancys.kr@gmail.com</p>
    </div>

  </div>
)}
    </footer>
  );
}