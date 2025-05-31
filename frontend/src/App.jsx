import React, { useState } from 'react';
import MangaItem from './components/MangaItem';

export default function App() {
  const [mangas, setMangas] = useState([
    { id: 1, title: 'Naruto', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
    { id: 2, title: 'One Piece', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/OnePieceVolume61Cover.jpg' },
    { id: 3, title: 'Attack on Titan', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Attack_on_Titan_cover_1.jpg' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  // Manga qo'shish funksiyasi
  const addManga = () => {
    if (!newTitle.trim() || !newImageUrl.trim()) return alert('Iltimos, barcha maydonlarni to‘ldiring.');

    const newManga = {
      id: Date.now(),
      title: newTitle,
      imageUrl: newImageUrl,
    };
    setMangas([...mangas, newManga]);
    setNewTitle('');
    setNewImageUrl('');
  };

  // Manga o'chirish funksiyasi
  const deleteManga = (id) => {
    setMangas(mangas.filter(manga => manga.id !== id));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Manga List</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Manga nomi"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ padding: '8px', width: 'calc(50% - 10px)', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Rasm URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          style={{ padding: '8px', width: 'calc(50% - 10px)', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={addManga}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Qo'shish
        </button>
      </div>

      {mangas.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>Hech qanday manga yo'q</p>
      ) : (
        mangas.map(manga => (
          <MangaItem key={manga.id} manga={manga} deleteManga={deleteManga} />
        ))
      )}
    </div>
  );
}
