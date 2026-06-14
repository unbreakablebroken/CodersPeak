import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [lessons, setLessons] = useState([]);
  const [activeTrack, setActiveTrack] = useState('frontend');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      setLoading(true);
      try {
        // Fetches lessons based on the selected track (frontend, automation, etc.)
        const { data } = await axios.get(`http://localhost:5000/api/lessons?track=${activeTrack}`);
        setLessons(data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
      setLoading(false);
    };
    fetchLessons();
  }, [activeTrack]);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Roadmap Selector */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
        {['frontend', 'automation', 'other'].map((track) => (
          <button
            key={track}
            onClick={() => setActiveTrack(track)}
            style={trackBtnStyle(activeTrack === track)}
          >
            {track.charAt(0).toUpperCase() + track.slice(1)}
          </button>
        ))}
      </div>

      {/* Lesson List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading roadmap...</p>
        ) : lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson._id} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ color: '#3b82f6' }}>{lesson.order}. {lesson.title}</h3>
                <span style={tagStyle}>{lesson.language}</span>
              </div>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                {lesson.content}
              </p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#94a3b8' }}>
            No lessons found for this track. Time to upload some content!
          </p>
        )}
      </div>
    </div>
  );
}

// Internal Styles
const trackBtnStyle = (isActive) => ({
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: isActive ? '#3b82f6' : '#1e293b',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 'bold',
  textTransform: 'capitalize'
});

const cardStyle = {
  backgroundColor: '#1e293b',
  padding: '25px',
  borderRadius: '12px',
  border: '1px solid #334155',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};

const tagStyle = {
  backgroundColor: '#334155',
  padding: '4px 10px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#94a3b8'
};

export default Dashboard;