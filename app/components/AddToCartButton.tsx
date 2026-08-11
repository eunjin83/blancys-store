"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      slug,
      name,
      price,
      image,
    });

    setIsOpen(true);
  };

  return (
    <>
      <button
        className="addToCartButton"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>

      {isOpen && (
        <div className="cartAddedOverlay">
          <div className="cartAddedModal">
            <button
              type="button"
              className="cartAddedClose"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <p className="cartAddedLabel">ADDED TO CART</p>

            <h2>{name}</h2>

            <p className="cartAddedText">
              상품이 장바구니에 추가되었습니다.
            </p>

            <div className="cartAddedActions">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cartAddedContinue"
              >
                CONTINUE SHOPPING
              </button>

              <Link
                href="/cart"
                className="cartAddedViewCart"
              >
                VIEW CART
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}