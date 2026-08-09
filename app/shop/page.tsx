import Header from "../components/Header";
import Link from "next/link";

const allProducts = [
  {
    name: "Suede Shirring Hobo Bag",
    slug: "suede-shirring-hobo-bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202602/a446d8e6f8dc912ebe1f019591bf8b32.jpg",
  },
  {
    name: "City Shoulder Bag",
    slug: "city-shoulder-bag",
    price: "₩79,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/33d7a926c810b1e2b4546821007fd954.jpg",
  },
  {
    name: "Nylon Hobo Bag",
    slug: "nylon-hobo-bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/376271244636e15da21ebae1a7117824.jpg",
  },
  {
    name: "Cookie and Cream Bag",
    slug: "cookie-and-cream-bag",
    price: "₩199,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/extra/big/202404/fc3f404a8446315976ad16227541da7d.jpg",
  },
  {
    name: "Black Cookie and Cream Bag",
    slug: "black-cookie-and-cream-bag",
    price: "₩249,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202404/5131bd3774b888d4055a7711bb8b6d2c.jpg",
  },
  {
    name: "Espresso Black Bag",
    slug: "espresso-black-bag",
    price: "₩399,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202404/7d3e78da2eeb49b28b688b885bd2ec09.jpg",
  },
  {
    name: "Espresso Flat White Bag",
    slug: "espresso-flat-white-bag",
    price: "₩399,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202404/074bab1945cffcb7b1b4993a4216f410.jpg",
  },
  {
    name: "Simple Basic Card Wallet Small (Mint)",
    slug: "simple-basic-card-wallet-small-mint",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/5553ae9f436ce915ed6f236c1fb1d679.jpg",
  },
  {
    name: "Simple Basic Card Wallet Small (Orange)",
    slug: "simple-basic-card-wallet-small-orange",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/e5fed65938d083c5487a509a58343221.jpg",
  },
  {
    name: "Simple Basic Card Wallet Small (Soft Black)",
    slug: "simple-basic-card-wallet-small-soft-black",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/da49c82c884a792fa2e74c18610e8bf7.jpg",
  },
  {
    name: "Simple Basic Card Wallet Medium (Lizard Brown)",
    slug: "simple-basic-card-wallet-medium-lizard-brown",
    price: "₩49,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/7b89f1b55c70774dd6acb30903957d44.jpg",
  },
];

export default function ShopPage() {
  return (
    <main className="shopPage">
      <Header />

      <section className="shopHero">
        <p>BLANCYS STORE</p>
        <h1>Shop</h1>
      </section>

      <section className="shopGrid">
        {allProducts.map((product) => (
          <Link
            href={`/shop/${product.slug}`}
            className="shopProduct"
            key={product.slug}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div
              className="shopProductImage"
              style={{
                backgroundImage: `url('${product.image}')`,
              }}
            />

            <div className="shopProductInfo">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
