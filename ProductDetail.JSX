import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProductById, sizeOptions } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);
  const [size, setSize] = useState("");

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: 40, textAlign: "center" }}>
          <p>Product not found.</p>
          <Link to="/">Back to home</Link>
        </div>
        <Footer />
      </>
    );
  }

  const options = sizeOptions[product.type];

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      size,
    });
    navigate("/cart");
  }

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ maxWidth: 500, margin: "40px auto", background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 3px 6px rgba(0,0,0,0.1)", textAlign: "center" }}
      >
        <img
          style={{ width: "50%", height: 280, objectFit: "cover", margin: "auto", display: "block" }}
          src={product.img}
          alt={product.name}
        />
        <h1>{product.name}</h1>
        <p style={{ fontSize: 18 }}>Price: ${product.price}</p>

        {options && (
          <>
            <label htmlFor="size" style={{ display: "block", margin: "10px 0 5px" }}>Choose Size:</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)} style={{ padding: 8, fontSize: 16, marginBottom: 15 }}>
              <option value="" disabled>Size</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <br />
          </>
        )}

        <a
          href="#"
          className="btn"
          style={{ display: "inline-block", padding: "10px 20px", background: "black", color: "white", textDecoration: "none", borderRadius: 5, fontSize: 16 }}
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          Add to Cart
        </a>
      </div>
      <Footer />
    </>
  );
}
