import React from 'react';

function Navbar({ setCurrentPage, currentPage }) {
  return (
    <nav style={navStyle}>
      <div style={logoStyle} onClick={() => setCurrentPage('dashboard')}>
        🚀 <span>CodeAcademy</span>
      </div>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button 
          onClick={() => setCurrentPage('dashboard')} 
          style={linkStyle(currentPage === 'dashboard')}
        >
          Learn Code
        </button>
        
        <button 
          onClick={() => setCurrentPage('admin')} 
          style={linkStyle(currentPage === 'admin')}
        >
          Admin Panel
        </button>
      </div>
    </nav>
  );
}

// Quick inline styles
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 40px',
  backgroundColor: '#1e293b',
  borderBottom: '1px solid #334155'
};

const logoStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const linkStyle = (isActive) => ({
  background: 'none',
  border: 'none',
  color: isActive ? '#3b82f6' : '#94a3b8',
  fontSize: '16px',
  fontWeight: isActive ? 'bold' : 'normal',
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '4px',
  backgroundColor: isActive ? '#0f172a' : 'transparent'
});

export default Navbar;