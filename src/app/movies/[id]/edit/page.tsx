import { getMovieById, updateMovie, getAllGenres } from '@/services/movies';
import { notFound, redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GenreSelector } from '@/components/movies/genre-selector';

interface EditMoviePageProps {
  params: {
    id: string;
  };
}

// Combined server action for both update and cancel
async function handleMovieAction(id: number, formData: FormData) {
  'use server';

  const action = formData.get('action');

  if (action === 'cancel') {
    redirect(`/movies/${id}`);
  }

  // Handle update
  const title = formData.get('title') as string;
  const overview = formData.get('overview') as string;
  const releaseDate = new Date(formData.get('releaseDate') as string);
  const genreIds = formData
    .getAll('genres')
    .map((id) => parseInt(id as string));

  await updateMovie(id, {
    title,
    overview,
    releaseDate,
    genreIds,
  });

  redirect(`/movies/${id}`);
}

export default async function EditMoviePage({ params }: EditMoviePageProps) {
  const movieId = parseInt(params.id);

  try {
    const [movie, allGenres] = await Promise.all([
      getMovieById(movieId),
      getAllGenres(),
    ]);

    return (
      <main className="container mx-auto py-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Edit Movie</CardTitle>
          </CardHeader>
          <form action={handleMovieAction.bind(null, movieId)}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={movie.title}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="overview" className="text-sm font-medium">
                  Overview
                </label>
                <Textarea
                  id="overview"
                  name="overview"
                  defaultValue={movie.overview}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="releaseDate" className="text-sm font-medium">
                  Release Date
                </label>
                <Input
                  id="releaseDate"
                  name="releaseDate"
                  type="date"
                  defaultValue={movie.releaseDate.toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Genres</label>
                <GenreSelector
                  genres={allGenres}
                  selectedGenres={movie.genres}
                  name="genres"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button
                type="submit"
                variant="outline"
                name="action"
                value="cancel"
                formNoValidate
              >
                Cancel
              </Button>
              <Button type="submit" name="action" value="save">
                Save Changes
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    );
  } catch (error) {
    console.error('Error loading movie for editing:', error);
    notFound();
  }
}
