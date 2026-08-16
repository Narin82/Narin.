import { Link } from "react-router-dom";

// Renders a grid of product cards. Each card links to the product detail
// page, mirroring the old `product.html?id=` navigation.
export default function ProductGrid({ products, imgWidth = "65%", imgHeight = 180 }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <div className="container-fluid mb-5 p-3" key={product.id}>
          <div className="card2">
            <img
              style={{ width: imgWidth, height: imgHeight, objectFit: "cover" }}
              src={product.img}
              alt={product.name}
            />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <Link className="btn" style={{ borderRadius: 15, padding: "10px 20px" }} to={`/product/${product.id}`}>
              Buy
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
