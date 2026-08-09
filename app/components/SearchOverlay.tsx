"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const searchableProducts = [
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

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({
  open,
  onClose,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) return [];

    return searchableProducts.filter((product) =>
      product.name.toLowerCase().includes(keyword)
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.98)",
        zIndex: 9999,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "60px",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            style={{
              border: "none",
              background: "transparent",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 400,
            marginBottom: "36px",
          }}
        >
          Search
        </h1>

        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products"
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid #111",
            padding: "16px 0",
            fontSize: "24px",
            outline: "none",
            background: "transparent",
          }}
        />

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px 24px",
          }}
        >
          {results.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              onClick={onClose}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: "16px",
                }}
              />

              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  marginBottom: "6px",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                {product.price}
              </p>
            </Link>
          ))}
        </div>

        {query.trim() && results.length === 0 && (
          <p
            style={{
              marginTop: "50px",
              fontSize: "15px",
            }}
          >
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}