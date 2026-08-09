import Header from "../../components/Header";
import AddToCartButton from "../../components/AddToCartButton";

const products: Record<
  string,
  {
    name: string;
    price: string;
    image: string;
    description: string;
  }
> = {
  "light-backpack": {
    name: "Light Backpack",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/5adc0c879d7b004d581f635e5b93742b.jpg",
    description: "Light Backpack",
  },

  "urban3way-bag": {
    name: "Urban3Way Bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/276e0bd3f0239103dc92643d492dd5de.jpg",
    description: "Urban3Way Bag",
  },

  "knot-suede-bag": {
    name: "Knot Suede Bag",
    price: "₩79,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/26aefaac5c5f3def2e2c562d917f88b0.jpg",
    description: "Knot Suede Bag",
  },

  "cookie-and-cream-bag": {
    name: "Cookie and Cream Bag",
    price: "₩199,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/extra/big/202404/fc3f404a8446315976ad16227541da7d.jpg",
    description: "Cookie and Cream Bag",
  },

  "black-cookie-and-cream-bag": {
    name: "Black Cookie and Cream Bag",
    price: "₩249,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202404/5131bd3774b888d4055a7711bb8b6d2c.jpg",
    description: "Black Cookie and Cream Bag",
  },
    "espresso-black-bag": {
    name: "Espresso Black Bag",
    price: "₩399,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202404/7d3e78da2eeb49b28b688b885bd2ec09.jpg",
    description: "Espresso Black Bag",
  },

  "espresso-flat-white-bag": {
    name: "Espresso Flat White Bag",
    price: "₩399,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202404/074bab1945cffcb7b1b4993a4216f410.jpg",
    description: "Espresso Flat White Bag",
  },

  "suede-shirring-hobo-bag": {
    name: "Suede Shirring Hobo Bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202602/a446d8e6f8dc912ebe1f019591bf8b32.jpg",
    description: "Suede Shirring Hobo Bag",
  },

  "city-shoulder-bag": {
    name: "City Shoulder Bag",
    price: "₩79,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/33d7a926c810b1e2b4546821007fd954.jpg",
    description: "City Shoulder Bag",
  },

  "nylon-hobo-bag": {
    name: "Nylon Hobo Bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/376271244636e15da21ebae1a7117824.jpg",
    description: "Nylon Hobo Bag",
  },

  "simple-basic-card-wallet-small-mint": {
    name: "Simple Basic Card Wallet Small (Mint)",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/5553ae9f436ce915ed6f236c1fb1d679.jpg",
    description: "Simple Basic Card Wallet Small (Mint)",
  },

  "simple-basic-card-wallet-small-orange": {
    name: "Simple Basic Card Wallet Small (Orange)",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/e5fed65938d083c5487a509a58343221.jpg",
    description: "Simple Basic Card Wallet Small (Orange)",
  },

  "simple-basic-card-wallet-small-soft-black": {
    name: "Simple Basic Card Wallet Small (Soft Black)",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/da49c82c884a792fa2e74c18610e8bf7.jpg",
    description: "Simple Basic Card Wallet Small (Soft Black)",
  },

  "simple-basic-card-wallet-medium-lizard-brown": {
    name: "Simple Basic Card Wallet Medium (Lizard Brown)",
    price: "₩49,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/7b89f1b55c70774dd6acb30903957d44.jpg",
    description: "Simple Basic Card Wallet Medium (Lizard Brown)",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products[slug] ?? products["cookie-and-cream-bag"];

  return (
    <main className="productDetailPage">
      <Header />

      <section className="productDetail">
        <div
          className="productDetailImage"
          style={{
            backgroundImage: `url('${product.image}')`,
          }}
        />

        <div className="productDetailInfo">
          <p className="productCategory">BLANCYS / BAG</p>

          <h1>{product.name}</h1>

          <p className="productPrice">{product.price}</p>

          <p className="productDescription">{product.description}</p>

          <div className="optionBlock">
            <div className="optionTitle">
              <span>COLOR</span>
              <span>BLACK</span>
            </div>

            <button className="colorOption" aria-label="Black color" />
          </div>

          <AddToCartButton
            slug={slug}
            name={product.name}
            price={product.price}
            image={product.image}
          />
          <div className="detailAccordion">
            <div>
              <span>DETAILS</span>
              <span>+</span>
            </div>

            <div>
              <span>SIZE</span>
              <span>+</span>
            </div>

            <div>
              <span>MATERIAL</span>
              <span>+</span>
            </div>

            <div>
              <span>SHIPPING & RETURNS</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="productEditorial">
        <p>ESSENCE OF BLANCYS</p>

        <h2>
          Designed for
          <br />
          everyday moments.
        </h2>
      </section>
    </main>
  );
}