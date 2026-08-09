import Header from "../components/Header";
import Link from "next/link";

const collectionProducts = [
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
    name: "Black Cookie and Cream Bag",
    slug: "black-cookie-and-cream-bag",
    price: "₩249,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202404/5131bd3774b888d4055a7711bb8b6d2c.jpg",
  },
];

export default function CollectionPage() {
  return (
    <main className="shopPage">
      <Header />

      <section className="shopHero">
        <p>BLANCYS COLLECTION</p>
        <h1>Collection</h1>
      </section>

      <section className="shopGrid">
        {collectionProducts.map((product) => (
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