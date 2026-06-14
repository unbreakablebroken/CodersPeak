import React from 'react';

function Navbar({ setCurrentPage, currentPage }) {
  
  const toggleTheme = () => {
    document.body.classList.toggle('theme-pro');
  };

  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e293b' }}>
      <h2>CodeAcademy</h2>
      
      <div>
        <button onClick={() => setCurrentPage('dashboard')} style={{ marginRight: '10px' }}>Dashboard</button>
        <button onClick={() => setCurrentPage('admin')} style={{ marginRight: '10px' }}>Admin</button>
        
        {/* Here is your new Theme Toggle */}
        <button onClick={toggleTheme} style={{ backgroundColor: 'var(--accent-color)' }}>
          🎨 Switch Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
