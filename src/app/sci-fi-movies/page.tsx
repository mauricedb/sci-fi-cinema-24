import { getSciFiMovies } from '@/services/movies';
import Image from 'next/image';

/**
 * Server Component that displays a responsive grid of sci-fi movies
 * Features:
 * - Responsive grid layout (1-4 columns based on screen size)
 * - Movie cards with poster images, ratings, and details
 * - Hover animations for interactive feedback
 * - Fallback for missing poster images
 */
export default async function SciFiMoviesPage() {
  const movies = await getSciFiMovies();

  return (
    <main className="py-8">
      <h1 className="text-4xl font-bold mb-8">Science Fiction Movies</h1>
      {/* Responsive grid layout using Tailwind's grid system */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          // Movie card with hover animation
          <div
            key={movie.id}
            className="border rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-[1.02]"
          >
            {/* Conditional rendering for movie poster with fallback */}
            {movie.posterPath ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt={movie.title}
                width={500}
                height={750}
                className="w-full h-[450px] object-cover"
              />
            ) : (
              <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center">
                No Image Available
              </div>
            )}
            {/* Movie details section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              {/* Rating display with star icon */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★</span>
                <span>{movie.voteAverage.toFixed(1)}</span>
                <span className="text-gray-400">({movie.voteCount} votes)</span>
              </div>
              {/* Movie overview with line clamping for consistent card heights */}
              <p className="text-sm text-gray-600 line-clamp-3">
                {movie.overview}
              </p>
              {/* Optional director display */}
              {movie.directors[0] && (
                <p className="text-sm text-gray-500 mt-2">
                  Directed by {movie.directors[0].name}
                </p>
              )}
              {/* Genre tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
