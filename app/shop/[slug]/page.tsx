import Header from "../../components/Header";
import AddToCartButton from "../../components/AddToCartButton";
import ProductAccordion from "../../components/ProductAccordion";
import { getProductBySlug } from "../../data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

 const product = getProductBySlug(slug);

if (!product) {
  notFound();
}

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
          <p className="productCategory">
             BLANCYS / {product.category}
         </p>

          <h1>{product.name}</h1>

          <p className="productPrice">{product.price}</p>

          <p className="productDescription">{product.description}</p>

          <div className="optionBlock">
          <div className="optionTitle">
            <span>COLOR</span>
            <span>{product.color}</span>
          </div>

  <button
    className="colorOption"
    aria-label={`${product.color} color`}
  />
</div>

          <AddToCartButton
            slug={slug}
            name={product.name}
            price={product.price}
            image={product.image}
          />
          <ProductAccordion
            description={product.description}
            size={product.size}
            material={product.material}
          />
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