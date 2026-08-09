import Header from "./components/Header";

const products = [
  {
    name: "Suede Shirring Hobo Bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202602/a446d8e6f8dc912ebe1f019591bf8b32.jpg",
  },
  {
    name: "City Shoulder Bag",
    price: "₩79,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/33d7a926c810b1e2b4546821007fd954.jpg",
  },
  {
    name: "Nylon Hobo Bag",
    price: "₩69,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/376271244636e15da21ebae1a7117824.jpg",
  },
  {
    name: "Cookie and Cream Bag",
    price: "₩199,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/extra/big/202404/fc3f404a8446315976ad16227541da7d.jpg",
  },
];

const featured = [
  {
    name: "Espresso Black Bag",
    price: "₩399,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202404/7d3e78da2eeb49b28b688b885bd2ec09.jpg",
  },
  {
    name: "Espresso Flat White Bag",
    price: "₩399,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202404/074bab1945cffcb7b1b4993a4216f410.jpg",
  },
  {
    name: "Black Cookie and Cream Bag",
    price: "₩249,000",
    image:
      "https://pinkloveu7.cafe24.com/web/product/big/202404/5131bd3774b888d4055a7711bb8b6d2c.jpg",
  },
];

const journal = [
  {
    title: "NEW SEASON",
    date: "2026",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/5adc0c879d7b004d581f635e5b93742b.jpg",
  },
  {
    title: "URBAN COLLECTION",
    date: "2026",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/276e0bd3f0239103dc92643d492dd5de.jpg",
  },
  {
    title: "SOFT SHAPE",
    date: "2026",
    image:
      "https://pinkloveu7.cafe24.com/web/product/medium/202602/26aefaac5c5f3def2e2c562d917f88b0.jpg",
  },
];

const instagramPosts = [
  {
    image: "/1.JPG",
    link: "https://www.instagram.com/p/DYrXv8oEqCh/",
  },
  {
    image: "/2.JPG",
    link: "https://www.instagram.com/p/DYrMI4KknWW/",
  },
  {
    image: "/3.JPG",
    link: "https://www.instagram.com/p/DYcs0xhEx2q/",
  },
  {
    image: "/4.JPG",
    link: "https://www.instagram.com/p/DYcsZFcE4Pd/",
  },
  {
    image: "/5.JPG",
    link: "https://www.instagram.com/p/C39XdOchotF/",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">2026 NEW COLLECTION</p>
          <h1>
            Quiet luxury
            <br />
            for everyday.
          </h1>
          <a className="underLink" href="#new">
            DISCOVER COLLECTION
          </a>
        </div>

        <div
          className="heroImage"
          style={{
            backgroundImage:
              "url('https://pinkloveu7.cafe24.com/web/product/extra/big/202404/fc3f404a8446315976ad16227541da7d.jpg')",
          }}
        />

        <div className="heroIndex">
          01 <span /> 03
        </div>
      </section>

      <section className="contentSection" id="new">
        <div className="sectionTitle">
          <h2>New Arrivals</h2>
          <a href="#">VIEW ALL</a>
        </div>

        <div className="productRow">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div
                className="productImage"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="storySection" id="story">
        <div
          className="storyImage"
          style={{
            backgroundImage:
              "url('https://pinkloveu7.cafe24.com/web/product/big/202602/a446d8e6f8dc912ebe1f019591bf8b32.jpg')",
          }}
        />
        <div className="storyCopy">
          <p className="eyebrow">ESSENCE OF BLANCYS</p>
          <h2>
            Timeless design.
            <br />
            Thoughtful details.
          </h2>
          <a className="underLink" href="#">
            OUR STORY
          </a>
        </div>
      </section>

      <section className="contentSection" id="collection">
        <div className="sectionTitle">
          <h2>Featured Bags</h2>
          <a href="#">VIEW ALL</a>
        </div>

        <div className="featuredGrid">
          {featured.map((product) => (
            <article key={product.name}>
              <div
                className="featuredImage"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection journalSection" id="journal">
        <div className="sectionTitle">
          <h2>Journal</h2>
          <a href="#">VIEW ALL</a>
        </div>

        <div className="journalGrid">
          {journal.map((item) => (
            <article key={item.title}>
              <div
                className="journalImage"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="instagramSection">
        <div className="instagramTitle">
          <h2>Instagram</h2>
          <p>@BLANCYS_OFFICIAL</p>
        </div>

        <div className="instagramGrid">
          {instagramPosts.map((post, index) => (
            <a
              href={post.link}
              key={post.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Instagram post ${index + 1}`}
            >
              <div
                className="instagramImage"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
            </a>
          ))}
        </div>

        <a
          className="underLink"
          href="https://www.instagram.com/blancys_official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FOLLOW US
        </a>
      </section>

      <footer className="footer">
        <div className="footerIntro">
          <a className="logo footerLogo" href="#">
            <img src="/BLANCYS_logo.png" alt="BLANCYS" />
          </a>
          <p>
            Timeless bags designed
            <br />
            for everyday life.
          </p>
        </div>

        <div>
          <h4>SHOP</h4>
          <a href="#">All Products</a>
          <a href="#">New Arrivals</a>
          <a href="#">Bags</a>
        </div>

        <div>
          <h4>CUSTOMER CARE</h4>
          <a href="#">Notice</a>
          <a href="#">FAQ</a>
          <a href="#">Shipping & Returns</a>
        </div>

        <div>
          <h4>ABOUT</h4>
          <a href="#">Our Story</a>
          <a href="#">Journal</a>
          <a href="#">Contact</a>
        </div>

        <div className="newsletter">
          <h4>NEWSLETTER</h4>
          <p>Get updates on new collections.</p>
          <div className="emailBox">
            <span>Your email</span>
            <span>→</span>
          </div>
        </div>

        <div className="copyright">
          © 2026 BLANCYS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
