import Header from "../components/Header";
import Link from "next/link";
import { products } from "../data/products";

export default function ShopPage() {
  return (
    <main className="shopPage">
      <Header />

      <section className="shopHero">
        <p>BLANCYS STORE</p>
        <h1>Shop</h1>
      </section>

      <section className="shopGrid">
        {products.map((product) => (
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
