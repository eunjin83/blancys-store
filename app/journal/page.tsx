import Header from "../components/Header";
import Link from "next/link";

const journalPosts = [
  {
    title: "NEW SEASON",
    date: "2026",
    name: "Light Backpack",
    slug: "light-backpack",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/5adc0c879d7b004d581f635e5b93742b.jpg",
    description:
      "A new season of BLANCYS begins with quiet forms, practical details, and everyday silhouettes.",
  },
  {
    title: "URBAN COLLECTION",
    date: "2026",
    name: "Urban3Way Bag",
    slug: "urban3way-bag",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/276e0bd3f0239103dc92643d492dd5de.jpg",
    description:
      "Designed for movement through the city, the Urban Collection balances function with understated form.",
  },
  {
    title: "SOFT SHAPE",
    date: "2026",
    name: "Knot Suede Bag",
    slug: "knot-suede-bag",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/26aefaac5c5f3def2e2c562d917f88b0.jpg",
    description:
      "Soft structures and relaxed proportions create a natural shape made for everyday use.",
  },
];

export default function JournalPage() {
  return (
    <main className="shopPage">
      <Header />

      <section className="shopHero">
        <p>BLANCYS STORIES</p>
        <h1>Journal</h1>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 24px 120px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px 28px",
          }}
        >
          {journalPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/shop/${post.slug}`}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <article>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 5",
                    backgroundImage: `url('${post.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginBottom: "22px",
                  }}
                />

                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                  }}
                >
                  {post.date}
                </p>

                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "12px",
                  }}
                >
                  {post.name}
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    maxWidth: "360px",
                  }}
                >
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
