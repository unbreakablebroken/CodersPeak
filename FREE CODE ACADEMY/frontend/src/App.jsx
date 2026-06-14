import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AdminUpload from './pages/AdminUpload';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Toggle to show Login instead of Home

  // 1. If NOT authenticated, show the public landing page or login
  if (!isAuthenticated) {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        {showLogin ? (
          <Auth setAuthenticated={setIsAuthenticated} />
        ) : (
          <Home onGetStarted={() => setShowLogin(true)} />
        )}
      </>
    );
  }

  // 2. If authenticated, show the logged-in dashboard experience
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
