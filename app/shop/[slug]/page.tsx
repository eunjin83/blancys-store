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

  "simple-basic-card-wallet-small-mint": {
    name: "Simple Basic Card Wallet Small (Mint)",
    price: "₩39,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202309/5553ae9f436ce915ed6f236c1fb1d679.jpg",
    description: "Simple Basic Card Wallet Small (Mint)",
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

  const product = products[slug] ?? products["mini-bucket-bag"];

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