import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import heroImage from "../Assets/Images/1.jpeg";

const HomePage = () => {
  return (
    <div className="homepage-root">
      <Navbar />
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="company-name">Team Lambda</h1>
            <p className="tagline">Revolutionizing Solar Solutions for a Sustainable Future</p>
            <a href="/products" className="view-products-btn">
              View Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
