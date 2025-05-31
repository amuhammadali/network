import React from 'react';

export default function MangaItem({ manga, deleteManga }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img
        src={manga.imageUrl}
        alt={manga.title}
        style={{
          width: '80px',
          height: '100px',
          objectFit: 'cover',
          marginRight: '15px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ margin: 0, color: '#222' }}>{manga.title}</h3>
      </div>
      <button
        onClick={() => deleteManga(manga.id)}
        style={{
          backgroundColor: '#f44336',
          border: 'none',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d32f2f'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f44336'}
      >
        Delete
      </button>
    </div>
  );
}
