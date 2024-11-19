import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

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

export async function getMovieById(id: number) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: id,
      },
      include: {
        genres: true,
        directors: true,
        actors: true,
      },
    });

    if (!movie) {
      throw new Error('Movie not found');
    }

    return movie;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
}

// Type for the returned data
export type MovieWithDetails = Prisma.PromiseReturnType<typeof getMovieById>;
