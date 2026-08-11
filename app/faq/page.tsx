"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "주문 후 배송은 얼마나 걸리나요?",
    answer:
      "배송 일정은 결제 완료 후 순차적으로 안내되며, 실제 배송 정책은 수정 예정입니다.",
  },
  {
    question: "주문 취소는 어떻게 하나요?",
    answer:
      "상품 준비 전에는 주문 취소가 가능하며, 실제 취소 절차는 수정 예정입니다.",
  },
  {
    question: "교환 및 반품은 어떻게 진행하나요?",
    answer:
      "교환 및 반품 가능 기간과 절차는 상품 상태 및 쇼핑몰 정책에 따라 달라질 수 있습니다. 실제 운영 정책은 수정 예정입니다.",
  },
  {
    question: "상품 옵션이나 색상은 어떻게 선택하나요?",
    answer:
      "상품 상세페이지에서 옵션을 선택할 수 있으며, 실제 옵션과 재고는 수정 예정입니다.",
  },
  {
    question: "문의는 어디로 하면 되나요?",
    answer:
      "고객센터 0507-1337-2470 또는 blancys.kr@gmail.com으로 문의해 주세요.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="faqPage">
      <section className="faqHeader">
        <p>BLANCYS CUSTOMER CARE</p>
        <h1>FAQ</h1>
      </section>

      <section className="faqContainer">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div className="faqItem" key={item.question}>
              <button
                type="button"
                className="faqQuestion"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              <div className={`faqAnswer ${isOpen ? "open" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}