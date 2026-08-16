import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5952/5952766.png",
    title: "Fast Delivery",
    text: "We deliver your sports products quickly and safely to your doorstep anywhere in the city.",
  },
  {
    icon: "https://png.pngtree.com/png-clipart/20220314/original/pngtree-warranty-line-icon-round-png-image_7443954.png",
    title: "Product Warranty",
    text: "All products come with a 30-day warranty for manufacturing defects and quality issues.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/256/400/400775.png",
    title: "Custom Orders",
    text: "Need a custom team jersey or personalized shoes? We can create them for you!",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/639/639284.png",
    title: "Training Tips",
    text: "Our experts provide useful tips and guides to help you train efficiently and safely.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/8420/8420247.png",
    title: "24/7 Support",
    text: "We are always ready to help you with any questions regarding products or orders.",
  },
];

export default function Service() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h2 style={{ display: "flex", justifyContent: "center", paddingTop: 40, fontSize: 48 }}>What we offer</h2>
        <div className="services">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <img src={s.icon} alt={s.title} style={{ width: 80, marginBottom: 15 }} />
              <h3 style={{ margin: "10px 0", fontSize: 20, color: "#111" }}>{s.title}</h3>
              <p style={{ color: "#555", fontSize: 16, lineHeight: 1.5 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
