import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <section className="contactHero">
        <p className="contactEyebrow">CONTACT BLANCYS</p>

        <h1>
          We’re here
          <br />
          to help.
        </h1>

        <p className="contactIntro">
          제품, 주문, 배송 및 교환/반품 관련 문의는 아래 채널을 통해
          연락해 주세요.
        </p>
      </section>

      <section className="contactContent">
        <div className="contactBlock">
          <h2>CUSTOMER SERVICE</h2>

          <p className="contactMainText">0507-1337-2470</p>

          <p>
            Monday – Friday
            <br />
            10:00 AM – 6:00 PM
            <br />
            Sat, Sun, Holiday Off
          </p>
        </div>

        <div className="contactBlock">
          <h2>EMAIL</h2>

          <a href="mailto:blancys.kr@gmail.com" className="contactMainText">
            blancys.kr@gmail.com
          </a>

          <p>
            이메일 문의는 확인 후 순차적으로 답변드립니다.
          </p>
        </div>

        <div className="contactBlock">
          <h2>INSTAGRAM</h2>

          <a
            href="https://www.instagram.com/blancys_seoul/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactMainText"
          >
            @BLANCYS_SEOUL
          </a>

          <p>
            새로운 컬렉션과 브랜드 소식을 Instagram에서 확인해 주세요.
          </p>
        </div>

        <div className="contactBlock">
          <h2>ADDRESS</h2>

          <p className="contactMainText">
            서울특별시 마포구 양화로 186
            <br />
            LC TOWER, 6층 605호
          </p>

          <Link href="/about" className="contactLink">
            ABOUT BLANCYS
          </Link>
        </div>
      </section>
    </main>
  );
}