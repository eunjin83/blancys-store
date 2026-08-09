import Header from "../components/Header";
import Link from "next/link";

const shopProducts = [
  {
    name: "Cookie and Cream Bag",
    slug: "cookie-and-cream-bag",
    price: "₩199,000",
    image: "https://pinkloveu7.cafe24.com/web/product/extra/big/202404/fc3f404a8446315976ad16227541da7d.jpg",
  },
  { name: "Daily Shoulder Bag",
  slug: "daily-shoulder-bag",
  price: "₩249,000",
  image: "https://pinkloveu7.cafe24.com/web/product/big/202404/5131bd3774b888d4055a7711bb8b6d2c.jpg",
  },
  {
  name: "Espresso Black Bag",
  slug: "espresso-black-bag",
  price: "₩399,000",
  image: "https://pinkloveu7.cafe24.com/web/product/medium/202404/7d3e78da2eeb49b28b688b885bd2ec09.jpg",
},
  {
  name: "Espresso Flat White Bag",
  slug: "espresso-flat-white-bag",
  price: "₩399,000",
  image: "https://pinkloveu7.cafe24.com/web/product/medium/202404/074bab1945cffcb7b1b4993a4216f410.jpg",
},
  {
  name: "Simple Basic Card Wallet Small (Mint)",
  slug: "simple-basic-card-wallet-small-mint",
  price: "₩39,000",
  image: "https://pinkloveu7.cafe24.com/web/product/medium/202309/5553ae9f436ce915ed6f236c1fb1d679.jpg",
},
  {
  name: "Simple Basic Card Wallet Medium (Lizard Brown)",
  slug: "simple-basic-card-wallet-medium-lizard-brown",
  price: "₩49,000",
  image: "https://pinkloveu7.cafe24.com/web/product/medium/202309/7b89f1b55c70774dd6acb30903957d44.jpg",
},
];

export default function ShopPage() {
  return (
    <main className="shopPage">
        <Header />

      <section className="shopHero">
        <p>BLANCYS COLLECTION</p>
        <h1>Shop All</h1>
      </section>

      <section className="shopToolbar">
        <div className="shopCategories">
          <button className="active">ALL</button>
          <button>NEW</button>
          <button>SHOULDER</button>
          <button>TOTE</button>
          <button>MINI</button>
        </div>
        <button className="filterButton">FILTER +</button>
      </section>

      <section className="shopGrid">
        {shopProducts.map((product) => (
      <Link
       href={`/shop/${product.slug}`}
       className="shopProduct"
       key={product.name}
      >
     <div
       className="shopProductImage"
       style={{ backgroundImage: `url('${product.image}')` }}
     />
    <div className="shopProductInfo">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  </Link>
))}
      </section>

      <footer className="footer shopFooter">
        <div className="footerIntro">
          <a className="logo footerLogo" href="/">
            <img src="/BLANCYS_logo.png" alt="BLANCYS" />
          </a>
          <p>Timeless bags designed<br />for everyday life.</p>
        </div>

        <div>
          <h4>SHOP</h4>
          <a href="/shop">All Products</a>
          <a href="/#new">New Arrivals</a>
          <a href="/shop">Bags</a>
        </div>

        <div>
          <h4>CUSTOMER CARE</h4>
          <a href="#">Notice</a>
          <a href="#">FAQ</a>
          <a href="#">Shipping & Returns</a>
        </div>

        <div>
          <h4>ABOUT</h4>
          <a href="/#story">Our Story</a>
          <a href="/#journal">Journal</a>
          <a href="#">Contact</a>
        </div>

        <div className="newsletter">
          <h4>NEWSLETTER</h4>
          <p>Get updates on new collections.</p>
          <div className="emailBox"><span>Your email</span><span>→</span></div>
        </div>

        <div className="copyright">© 2026 BLANCYS. All rights reserved.</div>
      </footer>
    </main>
  );
}
