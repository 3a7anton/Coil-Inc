// pages/ShopPage.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { image: 'https://tse3.mm.bing.net/th/id/OIG3.nQ2IcguRTYi6BpIINTZK?pid=ImgGn', name: 'Midnight Melodies', description: 'Immerse yourself in the ethereal beauty of Midnight Melodies, a captivating collection of haunting and introspective compositions that transport you to a realm of dreamlike tranquility. Crafted with meticulous attention to detail, each track weaves a tapestry of intricate melodies and lush harmonies, creating an atmosphere that invites you to escape the chaos of the day and find solace in the depths of the night.', price: '$10' },
  { image: 'https://tse3.mm.bing.net/th/id/OIG3.Up0VxCGaEjre4XnXMfVu?pid=ImgGn', name: 'Symphonic Serenity', description: 'Embrace the grandeur of Symphonic Serenity, a majestic compilation of sweeping orchestral arrangements that evoke a sense of awe and wonder. Meticulously crafted by our team of skilled composers, this masterpiece seamlessly blends the rich tones of strings, brass, and woodwinds, creating a sonic tapestry that transports you to a world of epic proportions, where every note resonates with unbridled emotion.', price: '$20' },
  { image: 'https://tse1.mm.bing.net/th/id/OIG3.ZOj8..1zkoICGwovFPsp?pid=ImgGn', name: 'Jazz Rhapsody', description: 'Indulge in the timeless elegance of Jazz Rhapsody, a sophisticated collection of soulful melodies and improvisational flair that epitomizes the very essence of cool. Featuring virtuosic performances by some of the most talented musicians in the industry, this album captures the spirit of the jazz age, inviting you to lose yourself in the sultry grooves and captivating rhythms that have enthralled audiences for generations.', price: '$30' },
  { image: 'https://tse3.mm.bing.net/th/id/OIG3.5EYZS4FoxAgp01UJX6z_?pid=ImgGn', name: 'Acoustic Reveries', description: 'Escape into the warm embrace of Acoustic Reveries, a intimate and heartfelt collection that celebrates the raw beauty of acoustic instrumentation. Crafted with passion and precision, each track in this album is a delicate tapestry of strings, percussion, and vocals, woven together to create a sonic sanctuary that invites you to slow down, breathe deeply, and appreciate the simple pleasures in life.', price: '$40' },
  { image: 'https://tse1.mm.bing.net/th/id/OIG2.Bq5qT3J.08F0HmWFeeUf?pid=ImgGng', name: 'Elemental Odyssey', description: 'Embark on an Elemental Odyssey, a captivating musical journey that explores the primal forces of nature through a fusion of ancient and modern sounds. This ambitious concept album seamlessly blends traditional instruments with cutting-edge production techniques, creating a sonic landscape that is both timeless and innovative. From the thunderous roar of crashing waves to the whispers of the wind, each track transports you to a different elemental realm, inviting you to reconnect with the very essence of life itself.', price: '$50' },
  { image: 'https://tse3.mm.bing.net/th/id/OIG2.3F76gJOOLYv0fpBCjmPi?pid=ImgGn', name: 'Celestial Harmonies', description: 'Elevate your senses with Celestial Harmonies, a transcendent collection that combines ethereal vocals and celestial soundscapes to create a truly otherworldly listening experience. Inspired by the mysteries of the cosmos, this album weaves together intricate layers of celestial harmonies, celestial choirs, and otherworldly textures, inviting you to embark on a spiritual odyssey that transcends the boundaries of this world and connects you with the infinite realms beyond.', price: '$60' },
];

function ShopPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '10px' 
    }}>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

export default ShopPage;
