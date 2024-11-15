import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface Actor {
  id: number;
  name: string;
}

interface Director {
  id: number;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  backdropPath: string | null;
  overview: string;
  popularity: number;
  posterPath: string | null;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  actorIds: number[];
  directorIds: number[];
  genreIds: number[];
}

async function main() {
  // Read JSON files
  const actorsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../seed-data/actors.json'), 'utf-8')
  ) as Actor[];

  const directorsData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../seed-data/directors.json'),
      'utf-8'
    )
  ) as Director[];

  const genresData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../seed-data/genres.json'), 'utf-8')
  ) as Genre[];

  const moviesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../seed-data/movies.json'), 'utf-8')
  ) as Movie[];

  // Create actors
  console.log('Seeding actors...');
  for (const actor of actorsData) {
    await prisma.actor.upsert({
      where: { id: actor.id },
      update: {},
      create: {
        id: actor.id,
        name: actor.name,
      },
    });
  }

  // Create directors
  console.log('Seeding directors...');
  for (const director of directorsData) {
    await prisma.director.upsert({
      where: { id: director.id },
      update: {},
      create: {
        id: director.id,
        name: director.name,
      },
    });
  }

  // Create genres
  console.log('Seeding genres...');
  for (const genre of genresData) {
    await prisma.genre.upsert({
      where: { id: genre.id },
      update: {},
      create: {
        id: genre.id,
        name: genre.name,
      },
    });
  }

  // Create movies with relationships
  console.log('Seeding movies...');
  for (const movie of moviesData) {
    await prisma.movie.upsert({
      where: { id: movie.id },
      update: {},
      create: {
        id: movie.id,
        backdropPath: movie.backdropPath,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.posterPath,
        releaseDate: new Date(movie.releaseDate),
        title: movie.title,
        voteAverage: movie.voteAverage,
        voteCount: movie.voteCount,
        actors: {
          connect: movie.actorIds.map((id: number) => ({ id })),
        },
        directors: {
          connect: movie.directorIds.map((id: number) => ({ id })),
        },
        genres: {
          connect: movie.genreIds.map((id: number) => ({ id })),
        },
      },
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
