import { getMovieById } from '@/services/movies';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  try {
    const movie = await getMovieById(parseInt(params.id));

    return (
      <main className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-[350px_1fr] gap-8">
          {/* Movie Poster */}
          <div className="relative h-[525px]">
            {movie.posterPath ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt={movie.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                No Image Available
              </div>
            )}
          </div>

          {/* Movie Details */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                <div className="flex items-center gap-2 text-yellow-500">
                  <span>★</span>
                  <span>{movie.voteAverage.toFixed(1)}/10</span>
                  <span className="text-gray-500">
                    ({movie.voteCount} votes)
                  </span>
                </div>
              </div>
              <Link href={`/movies/${movie.id}/edit`}>
                <Button variant="outline">Edit Movie</Button>
              </Link>
            </div>

            {/* Release Date & Runtime */}
            <div className="flex gap-4 text-gray-600">
              <p>
                Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
              </p>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <Badge key={genre.id} variant="secondary">
                  {genre.name}
                </Badge>
              ))}
            </div>

            {/* Overview */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-600">{movie.overview}</p>
              </CardContent>
            </Card>

            {/* Directors */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Directors</h2>
              <div className="flex flex-wrap gap-2">
                {movie.directors.map((director) => (
                  <Badge key={director.id} variant="outline">
                    {director.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Cast */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <div className="flex flex-wrap gap-2">
                {movie.actors.map((actor) => (
                  <Badge key={actor.id} variant="outline">
                    {actor.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching movie:', error);
    notFound();
  }
}
