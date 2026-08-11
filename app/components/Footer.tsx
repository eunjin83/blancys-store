import Link from "next/link";

export default function Footer() {
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

      <div className="footerBusiness">
        <span>Company: 블랑시스 (BLANCYS)</span>
        <span>Owner: 이혜미</span>
        <span>Business Registration No.: 370-16-01194</span>
        <span>Online Sales Registration: 2021-서울마포-2399</span>
        <span>Address: 서울특별시 마포구 양화로 186 LC TOWER, 6층 605호</span>
        <span>Tel: 0507-1337-2470</span>
       <span>Email: blancys.kr@gmail.com</span>
      </div>

      <div className="footerBottom">
        <div className="footerPolicies">
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <p>© 2026 BLANCYS. All rights reserved.</p>
      </div>
    </footer>
  );
}