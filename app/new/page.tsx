import Header from "../components/Header";
import Link from "next/link";

const newProducts = [
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
];

export default function NewPage() {
  return (
    <main className="shopPage">
      <Header />

      <section className="shopHero">
        <p>BLANCYS COLLECTION</p>
        <h1>New Arrivals</h1>
      </section>

      <section className="shopGrid">
        {newProducts.map((product) => (
          <Link
            href={`/shop/${product.slug}`}
            className="shopProduct"
            key={product.slug}
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