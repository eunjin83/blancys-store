import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="shopPage">
      <Header />

      <section className="shopHero">
        <p>ABOUT BLANCYS</p>
        <h1>Our Story</h1>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 24px 120px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.14em",
                marginBottom: "20px",
              }}
            >
              ESSENCE OF BLANCYS
            </p>

            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                fontWeight: 400,
                marginBottom: "32px",
              }}
            >
              Timeless design.
              <br />
              Thoughtful details.
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                maxWidth: "520px",
                marginBottom: "20px",
              }}
            >
              BLANCYS creates bags designed to become a natural part of
              everyday life.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                maxWidth: "520px",
              }}
            >
              We focus on balanced proportions, practical details, and
              understated design that can be used season after season.
            </p>
          </div>

          <div
            style={{
              minHeight: "620px",
              backgroundImage:
                "url('https://pinkloveu7.cafe24.com/web/product/big/202602/a446d8e6f8dc912ebe1f019591bf8b32.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        <div
          style={{
            borderTop: "1px solid #d8d8d8",
            marginTop: "100px",
            paddingTop: "70px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "50px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                Timeless
              </h3>

              <p style={{ lineHeight: 1.7 }}>
                Designs created to remain relevant beyond short-lived trends.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                Everyday
              </h3>

              <p style={{ lineHeight: 1.7 }}>
                Practical bags made to fit naturally into daily routines.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                Detail
              </h3>

              <p style={{ lineHeight: 1.7 }}>
                Thoughtful proportions and details define every BLANCYS piece.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}