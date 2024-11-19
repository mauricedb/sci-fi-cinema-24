import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Movie } from '@prisma/client';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="relative group overflow-hidden">
      {/* Dark overlay that appears on hover */}
      <div
        className="absolute inset-0 bg-black/60 transition-opacity duration-300 z-10 
        opacity-0 group-hover:opacity-100"
      />

      {/* Movie Poster */}
      {movie.posterPath ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full h-[450px] object-cover"
          priority
        />
      ) : (
        <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center">
          No Image Available
        </div>
      )}

      {/* Movie Info Overlay */}
      <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <div className="flex items-center gap-2 text-yellow-400">
          <span>★</span>
          <span>{movie.voteAverage.toFixed(1)}/10</span>
        </div>
      </CardContent>

      {/* Read More Button */}
      <CardFooter
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-30
        opacity-0 group-hover:opacity-100"
      >
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
          READ MORE
        </button>
      </CardFooter>
    </Card>
  );
}
