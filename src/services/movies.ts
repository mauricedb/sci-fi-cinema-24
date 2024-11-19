import { prisma } from '@/lib/prisma';

/**
 * Fetches science fiction movies from the database
 * Uses TMDB genre ID 878 to identify sci-fi movies
 * Returns movies sorted by vote average (highest rated first)
 * Includes related genre and director data for each movie
 */
export async function getSciFiMovies() {
  const movies = await prisma.movie.findMany({
    where: {
      genres: {
        some: {
          id: 878, // Science Fiction genre ID from TMDB
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
