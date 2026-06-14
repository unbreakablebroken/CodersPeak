import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AdminUpload from './pages/AdminUpload';
import Auth from './pages/Auth'; // Import your new gatekeeper

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // The bouncer's switch

  // If not logged in, force them to the Auth page
  if (!isAuthenticated) {
    return <Auth setAuthenticated={setIsAuthenticated} />;
  }

  // If logged in, show the full site
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      <main style={{ flex: 1, padding: '20px' }}>
        {currentPage === 'dashboard' ? (
          <Dashboard />
        ) : (
          <AdminUpload />
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '30px', backgroundColor: '#1e293b', marginTop: 'auto' }}>
        <p>Want to support free education? Consider a donation! ❤️</p>
      </footer>
    </div>
  );
}

export default App;
