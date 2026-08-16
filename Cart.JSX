import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, clearCart, total } = useCart();
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  function pay() {
    if (name === "" || card === "") {
      alert("Please fill in your name and card number!");
      return;
    }
    alert("Payment successful! Thank you, " + name);
    clearCart();
    setName("");
    setCard("");
  }

  return (
    <>
      <Navbar />
      <h2 style={{ display: "flex", justifyContent: "center", paddingTop: 40, fontSize: 48 }}>My Cart</h2>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 20px" }}>
        {cart.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "center", fontSize: 20 }}>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          cart.map((item, index) => (
            <div
              className="cart-item"
              key={`${item.id}-${item.size ?? ""}`}
              style={{ display: "flex", alignItems: "center", background: "white", padding: 15, marginBottom: 15, borderRadius: 10 }}
            >
              <img src={item.img} alt={item.name} style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 5, marginRight: 15 }} />
              <div>
                <h3>{item.name}{item.size ? ` (Size: ${item.size})` : ""}</h3>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:{" "}
                  <button style={{ padding: "1px 15px", borderRadius: 12 }} onClick={() => updateQuantity(index, -1)}>-</button>
                  {" "}{item.quantity}{" "}
                  <button style={{ padding: "1px 15px", borderRadius: 12 }} onClick={() => updateQuantity(index, 1)}>+</button>
                </p>
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div className="total" style={{ fontSize: 20, marginTop: 20, textAlign: "right" }}>
            Total: ${total}
          </div>
        )}
      </div>

      <div className="payment" style={{ width: 500, maxWidth: "90%", margin: "40px auto", background: "white", padding: 20, borderRadius: 10 }}>
        <h1>Payment</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 5, width: "100%", marginBottom: 10 }}
        />
        <label htmlFor="card">Card Number:</label>
        <input
          type="text"
          id="card"
          placeholder="1234 5678 9012 3456"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          style={{ padding: 5, width: "100%", marginBottom: 10 }}
        />
        <button
          onClick={pay}
          className="btn"
          style={{ padding: "10px 40px", background: "black", color: "white", border: "none", borderRadius: 5, cursor: "pointer" }}
        >
          Pay Now
        </button>
      </div>

      <Footer />
    </>
  );
}
