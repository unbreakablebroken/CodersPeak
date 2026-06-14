import React, { useState } from 'react';

function Auth({ setAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>
      <h1>Welcome to CodersPeak</h1>
      <p>{isLogin ? 'Login to continue your journey' : 'Create an account to start'}</p>
      
      <div style={{ marginTop: '20px' }}>
        <input type="text" placeholder="Username" style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
        <input type="password" placeholder="Password" style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
        
        <button 
          onClick={() => setAuthenticated(true)} 
          style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </div>

      <p style={{ cursor: 'pointer', marginTop: '15px' }} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default Auth;
