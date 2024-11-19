import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-900 text-white">
      <p className="text-xs text-blue-200">
        © 2023 SciFi Flix. All rights reserved. Movie data provided by{' '}
        <a
          href="https://www.themoviedb.org/"
          className="hover:underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Movie Database (TMDB)
        </a>
        .
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
