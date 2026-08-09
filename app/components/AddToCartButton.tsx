"use client";

import { useCart } from "./CartContext";

type AddToCartButtonProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function AddToCartButton({
  slug,
  name,
  price,
  image,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      className="addToCartButton"
      onClick={() =>
        addToCart({
          slug,
          name,
          price,
          image,
        })
      }
    >
      ADD TO CART
    </button>
  );
}