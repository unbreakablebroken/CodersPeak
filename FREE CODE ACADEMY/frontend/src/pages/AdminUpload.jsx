import React, { useState } from 'react';
import axios from 'axios';

function AdminUpload() {
  const [formData, setFormData] = useState({
    title: '',
    track: 'frontend',
    language: '',
    content: '',
    order: 1
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus('Uploading...');
      await axios.post('http://localhost:5000/api/lessons', formData);
      setStatus('✅ Lesson uploaded successfully!');
      // Reset form but increment order number for the next lesson automatically
      setFormData({ title: '', track: formData.track, language: formData.language, content: '', order: formData.order + 1 });
    } catch (error) {
      setStatus('❌ Upload failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
      <h2 style={{ marginBottom: '20px', color: '#3b82f6', textAlign: 'center' }}>➕ Upload New Lesson</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={labelStyle}>Lesson Title</label>
          <input type="text" placeholder="e.g., Intro to HTML" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required style={inputStyle} />
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Track</label>
            <select value={formData.track} onChange={e => setFormData({...formData, track: e.target.value})} style={inputStyle}>
              <option value="frontend">🌐 Frontend</option>
              <option value="automation">🤖 Automation</option>
              <option value="other">📚 Other Languages</option>
            </select>
          </div>
          
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Language</label>
            <input type="text" placeholder="e.g., JavaScript" value={formData.language} onChange={e => setFormData({...formData, language: e.target.value})} required style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Roadmap Order</label>
          <input type="number" value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 1})} required style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Lesson Content</label>
          <textarea placeholder="Write code snippets or detailed text instructions here..." rows="8" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required style={{...inputStyle, resize: 'vertical'}}></textarea>
        </div>
        
        <button type="submit" style={btnStyle}>Publish Live</button>
      </form>
      
      {status && <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
    </div>
  );
}

// Internal CSS styles
const labelStyle = { display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold', color: '#94a3b8' };
const inputStyle = { width: '100%', padding: '12px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' };
const btnStyle = { padding: '14px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' };

export default AdminUpload;