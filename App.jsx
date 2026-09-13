import {useState}from "react"
import "./App.css";
import Details from "./details";
import Schemes from "./schemes";
import Signin from "./signin";
import Signup from "./signup";

function App() {
  const [page,setPage] = useState("home");
  if (window.location.pathname === "/signin"){
    return <Signin/>;
  }
  if (window.location.pathname === "/signup"){
    return <Signup/>;
  }
  if (window.location.pathname === "/details"){
    return <Details/>;
  }
  if (window.location.pathname == "/schemes"){
    return <Schemes/>
  }

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">UDYAMAI</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#schemes">Schemes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="signin"
          onClick = {()=>
            (window.location.href = "/signin")}
            >Sign In
            </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="badge">
            Empowering Entrepreneurs 🚀
          </div>

          <h1>
            Discover the right
            <span> government schemes </span>
            for you.
          </h1>

          <p>
            UDYAMAI helps entrepreneurs and small businesses discover
            government schemes, benefits and opportunities that match
            their needs.
          </p>

          <div className="buttons">
            <button
              className="primary"
              onClick={() =>
                (window.location.href = "/details")
              }
            >
              Find My Schemes
            </button>

            <button
              className="secondary"
              onClick={() =>
                (window.location.href = "#schemes")
              }
            >
              Explore Schemes
            </button>
          </div>

        </div>

        {/* Hero Card */}
        <div className="hero-card">
          <div className="hero-icon">🚀</div>

          <h2>Start Your Journey</h2>

          <p>
            Grow your business with the right support.
          </p>
        </div>

      </section>

      {/* Why UDYAMAI */}
      <section className="why" id="about">
        <h2>Why UDYAMAI?</h2>

        <p>
          Everything you need to find the right opportunities
          for your business.
        </p>

        <div className="cards">

          <div className="card">
            <div className="card-icon">🔍</div>
            <h3>Easy Discovery</h3>
            <p>
              Find government schemes that match your business needs.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Smart Matching</h3>
            <p>
              Get relevant schemes based on your requirements.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">💡</div>
            <h3>Right Opportunities</h3>
            <p>
              Discover benefits and opportunities available for you.
            </p>
          </div>

        </div>
      </section>

      {/* Schemes Section */}
      <section className="schemes-section" id="schemes">
        <h2>Government Schemes</h2>

        <p>
          Explore schemes and find the support your business needs.
        </p>

        <button className="primary">
          Find Suitable Schemes
        </button>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Need Help?</h2>

        <p>
          UDYAMAI is here to help you discover the right support.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <strong>UDYAMAI</strong>
        <p>Empowering entrepreneurs with the right opportunities.</p>
      </footer>

    </div>
  );
}

export default App;