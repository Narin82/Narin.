export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", color: "#000000", padding: "60px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40 }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <img style={{ width: 110 }} src="/logo.png" alt="Sport Store logo" />
          <p style={{ color: "#000000" }}>
            Your one-stop shop for all sports gear, jerseys, shoes, and accessories. Quality products for every athlete.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: 200 }}>
          <h3 style={{ marginBottom: 15, fontSize: 18 }}>Contact Us</h3>
          <p style={{ color: "#000000", margin: "5px 0" }}>Email: support@sportstore.com</p>
          <p style={{ color: "#000000", margin: "5px 0" }}>Phone: +855 123 456 789</p>
          <p style={{ color: "#000000", margin: "5px 0" }}>Phnom Penh, Cambodia</p>
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <h3 style={{ marginBottom: 15, fontSize: 18 }}>Newsletter</h3>
          <p style={{ color: "#000000", lineHeight: 1.6 }}>
            Subscribe to get the latest sports products, offers, and news.
          </p>
          <form style={{ marginTop: 10, display: "flex" }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ padding: 10, borderRadius: "5px 0 0 5px", flex: 1, minWidth: 150 }}
            />
            <button
              type="submit"
              style={{ padding: "10px 20px", borderRadius: "0 5px 5px 0", background: "#ff6600", color: "white", cursor: "pointer", border: "none" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 50, borderTop: "1px solid #000000", paddingTop: 20, color: "#000000", fontSize: 14 }}>
        &copy; 2025 Sport Store. All Rights Reserved.
        <div style={{ marginTop: 10 }}>
          <a href="https://www.facebook.com/home.php" style={{ color: "#000000", margin: "0 10px", textDecoration: "none" }}>Facebook</a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" style={{ color: "#000000", margin: "0 10px", textDecoration: "none" }}>Instagram</a>
          <a href="https://x.com/" style={{ color: "#000000", margin: "0 10px", textDecoration: "none" }}>Twitter</a>
        </div>
      </div>
    </footer>
  );
}
