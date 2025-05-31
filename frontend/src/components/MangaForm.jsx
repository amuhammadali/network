import React, { useState } from 'react';

export default function MangaForm({ addManga }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !imageUrl) return;
    addManga({ title, imageUrl });
    setTitle('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn">Add Manga</button>
    </form>
  );
}
