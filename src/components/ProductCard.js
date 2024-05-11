// components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      border: '1px solid black', 
      borderRadius: '10px', 
      padding: '10px', 
      margin: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      backdropFilter: 'blur(10px)',
      textAlign: 'center'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
