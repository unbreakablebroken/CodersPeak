import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AdminUpload from './pages/AdminUpload';

function App() {
  // Simple state-based routing: 'dashboard' or 'admin'
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation Bar */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* Main Content Area - Switches pages dynamically */}
      <main style={{ flex: 1, padding: '20px' }}>
        {currentPage === 'dashboard' ? (
          <Dashboard />
        ) : (
          <AdminUpload />
        )}
      </main>

      {/* Persistent Monetization & Support Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '30px 20px',
        backgroundColor: '#1e293b',
        borderTop: '1px solid #334155',
        marginTop: 'auto'
      }}>
        <p style={{ marginBottom: '15px', color: '#94a3b8' }}>
          Want to support free education? Consider making a donation! ❤️
        </p>
        
        {/* Placeholder for Google AdSense / Banner Ads */}
        <div style={{
          maxWidth: '728px',
          height: '90px',
          backgroundColor: '#0f172a',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          border: '1px dashed #475569',
          color: '#64748b',
          borderRadius: '6px',
          fontSize: '14px'
        }}>
          [ Advertisement Space / Google AdSense Banner ]
        </div>
      </footer>
    </div>
  );
}

export default App;