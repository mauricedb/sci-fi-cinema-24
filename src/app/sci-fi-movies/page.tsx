import { getSciFiMovies } from '@/services/movies';
import { MovieCard } from '@/components/movies/movie-card';

/**
 * Server Component that displays a responsive grid of sci-fi movies
 * Features:
 * - Responsive grid layout (1-4 columns based on screen size)
 * - Movie cards with poster images and ratings
 * - Hover animations with Read More button
 */
export default async function SciFiMoviesPage() {
  const movies = await getSciFiMovies();

  return (
    <main className="py-8">
      <h1 className="text-4xl font-bold mb-8">Science Fiction Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
