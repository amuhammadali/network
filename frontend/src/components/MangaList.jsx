import React from 'react';
import MangaItem from './MangaItem';

export default function MangaList({ mangas, deleteManga }) {
  if (mangas.length === 0) return <p className="no-manga">No manga found.</p>;

  return (
    <div>
      {mangas.map(manga => (
        <MangaItem key={manga.id} manga={manga} deleteManga={deleteManga} />
      ))}
    </div>
  );
}
