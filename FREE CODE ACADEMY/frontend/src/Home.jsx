import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1532187863486-abf9dbad1c69?q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Master Physics, Simplified.</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>The modern platform for high-achieving students.</p>
        <button style={{ padding: '15px 40px', fontSize: '1.2rem', cursor: 'pointer' }}>Get Started</button>
      </section>

      {/* Info Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Why Join Us?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
          <div style={{ width: '30%' }}>
            <h3>Expert Content</h3>
            <p>Physics simplified by industry professionals.</p>
          </div>
          <div style={{ width: '30%' }}>
            <h3>Track Progress</h3>
            <p>Know exactly where you stand in your journey.</p>
          </div>
          <div style={{ width: '30%' }}>
            <h3>Community Driven</h3>
            <p>Learn alongside thousands of other students.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
