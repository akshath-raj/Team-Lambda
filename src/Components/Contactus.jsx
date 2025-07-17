import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div className="contactus-container">
      <h1 className="contactus-title">Contact Us</h1>
      <p className="contactus-intro">
        We'd love to hear from you! Whether you have a question about our team, products, or anything else, our team is ready to answer all your questions.
      </p>
      <div className="contactus-card">
        <p><strong>Mobile:</strong> <a href="tel:+919952362301">+91 9952362301</a></p>
        <p><strong>Email:</strong> <a href="mailto:nrajasekar@vit.ac.in">nrajasekar@vit.ac.in</a></p>
        <p><strong>Address:</strong><br/>
          Team Lambda, VIT University<br/>
          Vellore, Tamil Nadu, India - 632014
        </p>
      </div>
    </div>
  );
};

export default Contactus; 