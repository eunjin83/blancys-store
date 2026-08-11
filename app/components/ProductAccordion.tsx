"use client";

import { useState } from "react";

type ProductAccordionProps = {
  description: string;
  size: string;
  material: string;
};

export default function ProductAccordion({
  description,
  size,
  material,
}: ProductAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "DETAILS",
      content: description,
    },
    {
      title: "SIZE",
      content: size,
    },
    {
      title: "MATERIAL",
      content: material,
    },
    {
      title: "SHIPPING & RETURNS",
      content:
        "배송, 교환 및 반품 정보는 Cafe24 이전 후 실제 쇼핑몰 정책과 연결됩니다.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="productAccordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="productAccordionItem" key={item.title}>
            <button
              type="button"
              className="productAccordionButton"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="productAccordionIcon">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`productAccordionContent ${
                isOpen ? "isOpen" : ""
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}