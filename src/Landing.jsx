import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Landing() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStarted = () => {
    navigate('/home'); // Navigate to the Home page
  };

  return (
    <div className="landing-root">
      <h1>Welcome to Paradise Nursery</h1>
      
      {/* Mission Statement */}
      <div id="landing-description">
        <p>
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle.
        </p>
        <p>
          From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast. Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care.
        </p>
        <p>
          Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.
        </p>
        <p>
          Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
        </p>
      </div>
      
      {/* Get Started button */}
      <button id="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;
