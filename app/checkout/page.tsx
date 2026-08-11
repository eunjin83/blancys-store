"use client";

import Script from "next/script";
import { useState } from "react";
import { useCart } from "../components/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    email: "",
    recipient: "",
    phone: "",
    zip: "",
    address: "",
    detailAddress: "",
    deliveryMemo: "",
  });

  const [error, setError] = useState("");

  const getNumericPrice = (price: string | number) => {
    if (typeof price === "number") {
      return price;
    }

    const cleanedPrice = String(price).replace(/[^0-9]/g, "");
    return cleanedPrice ? Number(cleanedPrice) : 0;
  };

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = getNumericPrice(item.price);
    return total + numericPrice * item.quantity;
  }, 0);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;

  setFormData((current) => ({
    ...current,
    [name]: value,
  }));

  if (error) {
    setError("");
  }
};

  const handleContinue = () => {
    const {
      email,
      recipient,
      phone,
      zip,
      address,
      detailAddress,
    } = formData;

    if (
      !email ||
      !recipient ||
      !phone ||
      !zip ||
      !address ||
      !detailAddress
    ) {
      setError("필수 정보를 모두 입력해 주세요.");
      return;
    }

    if (!email.includes("@")) {
      setError("올바른 이메일 주소를 입력해 주세요.");
      return;
    }

    setError("");

const orderData = {
  customer: {
    email: formData.email,
  },

  shipping: {
    recipient: formData.recipient,
    phone: formData.phone,
    zip: formData.zip,
    address: formData.address,
    detailAddress: formData.detailAddress,
    deliveryMemo: formData.deliveryMemo,
  },

  items: cartItems.map((item) => ({
    slug: item.slug,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  })),

  subtotal,
};

console.log("ORDER DATA:", orderData);
localStorage.setItem("blancys-order", JSON.stringify(orderData));
alert("주문 정보가 정상적으로 준비되었습니다.");
  };

  const handleAddressSearch = () => {
  const kakaoPostcode = (window as any).kakao?.Postcode;

  if (!kakaoPostcode) {
    alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
    return;
  }

  new kakaoPostcode({
    oncomplete: function (data: any) {
      const selectedAddress =
        data.userSelectedType === "R"
          ? data.roadAddress
          : data.jibunAddress;

      setFormData((current) => ({
        ...current,
        zip: data.zonecode,
        address: selectedAddress,
      }));

      setError("");
    },
  }).open();
};

  return (
     <>
    <Script
      src="https://t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
      strategy="afterInteractive"
    />
    <main className="checkoutPage">

      <section className="checkoutContainer">
        <div className="checkoutForm">
          <h1>Checkout</h1>

          <div className="checkoutSection">
            <h2>주문자 정보</h2>

            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="checkoutSection">
            <h2>배송지 정보</h2>

            <input
              type="text"
              name="recipient"
              placeholder="받는 분"
              value={formData.recipient}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="휴대폰 번호"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="checkoutAddressRow">
              <input
                type="text"
                name="zip"
                placeholder="우편번호"
                value={formData.zip}
                onChange={handleChange}
                readOnly
              />

              <button
                type="button"
                className="addressSearchButton"
                onClick={handleAddressSearch}
              >
                주소 찾기
              </button>
            </div>

            <input
              type="text"
              name="address"
              placeholder="주소"
              value={formData.address}
              onChange={handleChange}
              readOnly
            />

            <input
              type="text"
              name="detailAddress"
              placeholder="상세주소"
              value={formData.detailAddress}
              onChange={handleChange}
            />

            <input
              type="text"
              name="deliveryMemo"
              placeholder="배송 메모 (선택)"
              value={formData.deliveryMemo}
              onChange={handleChange}
            />
          </div>

          {error && <p className="checkoutError">{error}</p>}

          <button
            className="continuePaymentButton"
            onClick={handleContinue}
          >
            결제하기
          </button>
        </div>

        <aside className="checkoutSummary">
          <h2>Order Summary</h2>

          <div className="checkoutItems">
            {cartItems.map((item) => {
              const numericPrice = getNumericPrice(item.price);
              const itemTotal = numericPrice * item.quantity;

              return (
                <div className="checkoutItem" key={item.slug}>
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                  </div>

                  <p>₩{itemTotal.toLocaleString()}</p>
                </div>
              );
            })}
          </div>

          <div className="checkoutTotalRow">
            <span>SUBTOTAL</span>
            <span>₩{subtotal.toLocaleString()}</span>
          </div>
        </aside>
      </section>
       </main>
  </>
);
}