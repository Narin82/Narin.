import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { getProductsByType } from "../data/products";

const brandLogos = [
  { src: "https://www.freeiconspng.com/thumbs/nike-logo/black-nike-emblem-png-hd-0.png", h: 75 },
  { src: "https://cdn.freebiesupply.com/logos/large/2x/yonex-logo-png-transparent.png", h: 250 },
  { src: "https://pngimg.com/d/nba_PNG8.png", h: 100 },
  { src: "https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png", h: 115 },
  { src: "https://cdn.freebiesupply.com/logos/large/2x/molten-1-logo-png-transparent.png", h: 145 },
  { src: "https://toppng.com/uploads/thumbnail/mizuno-eps-vector-logo-download-free-11574079012be0yoyxabz.png", h: 125 },
  { src: "https://www.step.org.uk/app/uploads/2018/07/Puma-logo-PNG-Transparent-Background.png", h: 80 },
];

const slides = [
  "https://pbs.twimg.com/media/CoL62a_VYAA6UgF.jpg",
  "https://www.manilaonsale.com/wp-content/uploads/2021/03/Tobys-Sports-Nike-Adidas-Summer-2021-Sale-Poster-800x800.jpg",
  "https://cdn3.f-cdn.com//files/download/227783482/Air%20Jordan%20retro%20red.jpg?width=780&height=780&fit=crop",
];

export default function Home() {
  const topShirts = getProductsByType("shirt").slice(0, 5);
  const topShoes = getProductsByType("shoe").slice(0, 5);
  const topAccessories = getProductsByType("accessory").slice(0, 5);

  return (
    <>
      <Navbar showSearch />

      <div className="d-flex justify-content-center container-fluid">
        <div style={{ width: "100%", maxWidth: 1410 }}>
          <div id="mySlide" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner" style={{ width: "100%" }}>
              {slides.map((src, i) => (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={src}>
                  <img style={{ height: 500, width: "100%", objectFit: "cover" }} src={src} alt={`slide-${i}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" data-bs-target="#mySlide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" data-bs-target="#mySlide" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex align-items-center gap-5 flex-wrap" style={{ padding: "20px 0" }}>
        {brandLogos.map((logo) => (
          <img key={logo.src} style={{ width: 180, height: logo.h, objectFit: "contain" }} src={logo.src} alt="brand" />
        ))}
      </div>

      <h2 style={{ display: "flex", justifyContent: "center", paddingTop: 50, fontSize: 48 }}>Home</h2>

      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-between", margin: "0 30px 0 10px" }}>
          <h3 className="mt-5 ms-4" style={{ fontFamily: "Oswald, sans-serif" }}>🔥 Top Jersey</h3>
          <a className="mt-5" href="/shirts">See more</a>
        </div>
        <div className="row container-fluid ms-2">
          <ProductGrid products={topShirts} imgWidth="80%" />
        </div>
      </div>

      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-between", margin: "0 30px 0 10px" }}>
          <h3 className="mt-5 ms-4" style={{ fontFamily: "Oswald, sans-serif" }}>💥 Top Shoes</h3>
          <a className="mt-5" href="/shoes">See more</a>
        </div>
        <div className="row container-fluid ms-2">
          <ProductGrid products={topShoes} />
        </div>
      </div>

      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-between", margin: "0 30px 0 10px" }}>
          <h3 className="mt-5 ms-4" style={{ fontFamily: "Oswald, sans-serif" }}>⚽ Sport Items</h3>
          <a className="mt-5" href="/accessories">See more</a>
        </div>
        <div className="row container-fluid ms-2">
          <ProductGrid products={topAccessories} />
        </div>
      </div>

      <Footer />
    </>
  );
}
