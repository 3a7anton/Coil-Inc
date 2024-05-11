// pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ color: 'black' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>Coil</h1>
      <p>We are a company that makes and distributes music. They stand out because they are home-made and shipped directly to your home. Our target audience is adults. We want to convey a sense of power, while at the same time being down-to-earth.</p>
      <Link to="/shop">
        <button>Order a Free Sample</button>
      </Link>
      </div>
    </div>
  );
}

export default LandingPage;
