import React from 'react';
import './Aboutus.css';
// import teamImg from '../Assets/Images/1000075192-transformed.jpeg';
// import logo from '../Assets/Images/LambdaLogo.png';

const OurTeam = () => {
  return (
    <div>
      <section className="about-hero">
        {/* <img src={teamImg} alt="Team Lambda" className="about-hero-img" /> */}
        <div className="about-hero-overlay">
          {/* <img src={logo} alt="Team Lambda Logo" className="about-hero-logo" /> */}
          <h1 className="about-hero-title">Meet Our Team</h1>
          <p className="about-hero-tagline with-bottom-space">Driving Innovation Across Domains</p>
        </div>
        <div className="about-lead-card">
          <h2>Dr. Rajasekar N</h2>
          <p className="about-lead-desc">Ranked among top 2% scientists globally</p>
        </div>
        <div className="about-domains">
          <h2>40+ Members, 4 Domains</h2>
          <div className="about-domains-grid">
            <div className="about-domain-card">
              <span className="about-domain-icon">🔧</span>
              <span>Mechanical</span>
            </div>
            <div className="about-domain-card">
              <span className="about-domain-icon">⚡</span>
              <span>Electrical</span>
            </div>
            <div className="about-domain-card">
              <span className="about-domain-icon">💻</span>
              <span>Computer Science</span>
            </div>
            <div className="about-domain-card">
              <span className="about-domain-icon">📈</span>
              <span>Marketing & Finance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
