'use client';

import { Genre } from '@prisma/client';
import { useState } from 'react';

interface GenreSelectorProps {
  genres: Genre[];
  selectedGenres: Genre[];
  name: string;
}

export function GenreSelector({
  genres,
  selectedGenres,
  name,
}: GenreSelectorProps) {
  const [selected, setSelected] = useState(
    new Set(selectedGenres.map((g) => g.id))
  );

  const toggleGenre = (genreId: number) => {
    const newSelected = new Set(selected);
    if (newSelected.has(genreId)) {
      newSelected.delete(genreId);
    } else {
      newSelected.add(genreId);
    }
    setSelected(newSelected);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <label
          key={genre.id}
          className={`px-3 py-1 rounded-full border cursor-pointer select-none transition-colors ${
            selected.has(genre.id)
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-background hover:bg-secondary'
          }`}
        >
          <input
            type="checkbox"
            name={name}
            value={genre.id}
            checked={selected.has(genre.id)}
            onChange={() => toggleGenre(genre.id)}
            className="hidden"
          />
          {genre.name}
        </label>
      ))}
    </div>
  );
}
