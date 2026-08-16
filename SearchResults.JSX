import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const results = query
    ? products.filter((p) => p.name.toLowerCase().includes(query))
    : [];

  return (
    <>
      <Navbar showSearch />

      <div className="container-fluid">
        <h2 style={{ display: "flex", justifyContent: "center", paddingTop: 50, fontSize: 40 }}>
          Search results for "{searchParams.get("q") || ""}"
        </h2>

        {results.length === 0 ? (
          <p style={{ textAlign: "center", padding: "40px 0", fontSize: 18 }}>
            No products found. Try a different keyword.
          </p>
        ) : (
          <div className="row container-fluid ms-2" style={{ padding: "20px 30px" }}>
            <ProductGrid products={results} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
