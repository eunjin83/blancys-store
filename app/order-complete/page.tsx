"use client";

import { useEffect, useState } from "react";

type OrderItem = {
  slug: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
};

type OrderData = {
  customer: {
    email: string;
  };
  shipping: {
    recipient: string;
    phone: string;
    zip: string;
    address: string;
    detailAddress: string;
    deliveryMemo: string;
  };
  items: OrderItem[];
  subtotal: number;
};

export default function OrderCompletePage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("blancys-order");

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch (error) {
        console.error("Failed to load order:", error);
      }
    }
  }, []);

  return (
    <main className="orderCompletePage">

      <section className="orderCompleteContainer">
        <div className="orderCompleteMessage">
          <p className="orderCompleteLabel">ORDER COMPLETE</p>
          <h1>주문이 접수되었습니다.</h1>
          <p>
            주문해 주셔서 감사합니다.
            <br />
            주문 정보는 결제 시스템 연결 후 실제 주문 처리에 사용됩니다.
          </p>
        </div>

        {order && (
          <div className="orderCompleteSummary">
            <div className="orderCompleteSection">
              <h2>주문자 정보</h2>
              <p>{order.customer.email}</p>
            </div>

            <div className="orderCompleteSection">
              <h2>배송지 정보</h2>
              <p>{order.shipping.recipient}</p>
              <p>{order.shipping.phone}</p>
              <p>
                ({order.shipping.zip}) {order.shipping.address}
              </p>
              <p>{order.shipping.detailAddress}</p>

              {order.shipping.deliveryMemo && (
                <p>배송 메모: {order.shipping.deliveryMemo}</p>
              )}
            </div>

            <div className="orderCompleteSection">
              <h2>주문 상품</h2>

              {order.items.map((item) => (
                <div className="orderCompleteItem" key={item.slug}>
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h3>{item.name}</h3>
                    <p>수량: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="orderCompleteTotal">
              <span>상품 금액</span>
              <span>₩{order.subtotal.toLocaleString()}</span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}