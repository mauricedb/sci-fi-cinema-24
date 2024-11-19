import { prisma } from '@/lib/prisma';
import Image from 'next/image';

async function getSciFiMovies() {
  const movies = await prisma.movie.findMany({
    where: {
      genres: {
        some: {
          id: 878, // Science Fiction genre ID
        },
      },
    },
    include: {
      genres: true,
      directors: true,
    },
    orderBy: {
      voteAverage: 'desc',
    },
  });
  return movies;
}

export default async function SciFiMoviesPage() {
  const movies = await getSciFiMovies();

  return (
    <main className="py-8">
      <h1 className="text-4xl font-bold mb-8">Science Fiction Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-[1.02]"
          >
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
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★</span>
                <span>{movie.voteAverage.toFixed(1)}</span>
                <span className="text-gray-400">({movie.voteCount} votes)</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                {movie.overview}
              </p>
              {movie.directors[0] && (
                <p className="text-sm text-gray-500 mt-2">
                  Directed by {movie.directors[0].name}
                </p>
              )}
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
