import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ showSearch = false }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed === "") return;
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="container1">
      <div className="navbar1">
        <div className="marquee-container">
          <div className="marquee">Come and get your favorite items now !</div>
        </div>
      </div>
      <div className="navbar2">
        <div className="logo1">
          <img style={{ width: 110 }} src="/logo.png" alt="Sport Store logo" />
        </div>

        {showSearch && (
          <div>
            <form onSubmit={handleSearch}>
              <input
                style={{ padding: 3 }}
                type="text"
                placeholder="Search items"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        )}

        <div className="listing1">
          <ul className="ts">
            <li>
              <Link to="/" className="animate">Home</Link>
            </li>
            <li className="list-drop">
              <a href="#">Collection</a>
              <div className="dropdown-content">
                <Link to="/shirts">Shirt</Link>
                <Link to="/shoes">Shoes</Link>
                <Link to="/accessories">Accessories</Link>
              </div>
            </li>
            <li>
              <Link to="/service" className="animate">Service</Link>
            </li>
            <li>
              <Link to="/cart" className="animate">My cart</Link>
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 20 }} className="user-info">
          <Link to="/login">
            <img
              style={{ width: 30 }}
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="account"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
