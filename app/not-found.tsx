import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <section className="notFoundContent">
        <p className="notFoundLabel">404 ERROR</p>

        <h1>
          Page not
          <br />
          found.
        </h1>

        <p className="notFoundText">
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          주소가 변경되었거나 삭제되었을 수 있습니다.
        </p>

        <div className="notFoundLinks">
          <Link href="/">RETURN HOME</Link>
          <Link href="/shop">GO TO SHOP</Link>
        </div>
      </section>
    </main>
  );
}