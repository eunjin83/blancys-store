"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useCart } from "../components/CartContext";

export default function CartPage() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^\d]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <main className="cartPage">
      <Header />

      <section className="cartContainer">
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="emptyCart">
            <p>Your cart is currently empty.</p>
            <a href="/shop">CONTINUE SHOPPING</a>
          </div>
        ) : (
          <div className="cartContent">
            <div className="cartItems">
              {cartItems.map((item) => (
                <div className="cartItem" key={item.slug}>
                  <img src={item.image} alt={item.name} />

                  <div className="cartItemInfo">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>

                    <div className="cartQuantity">
                      <button
                        onClick={() => decreaseQuantity(item.slug)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          addToCart({
                            slug: item.slug,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                          })
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="removeCartItem"
                      onClick={() => removeFromCart(item.slug)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cartSummary">
              <div className="cartSummaryRow">
                <span>SUBTOTAL</span>
                <span>₩{subtotal.toLocaleString()}</span>
              </div>

              <Link href="/checkout" className="checkoutButton">
                 CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}