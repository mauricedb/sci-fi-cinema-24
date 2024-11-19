'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Film, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';
import heroImage from './hero-image.webp';

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <Film className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">SciFi Flix</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Explore the Universe of Sci-Fi Cinema
                  </h1>
                  <p className="mx-auto max-w-[700px] text-blue-200 md:text-xl">
                    Dive into a vast collection of popular science fiction
                    movies. From classic space operas to mind-bending time
                    travels, we&apos;ve got it all.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="/sci-fi-movies">
                    <Button className="bg-white text-blue-900 hover:bg-blue-100">
                      Get Started
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-900"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={heroImage}
                  alt="Hero image"
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Basic</CardTitle>
                  <CardDescription>For casual viewers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-blue-900">$9.99</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Rocket className="mr-2 h-4 w-4 text-blue-500" />
                      Access to all movies
                    </li>
                    <li className="flex items-center">
                      <Rocket className="mr-2 h-4 w-4 text-blue-500" />
                      SD quality
                    </li>
                    <li className="flex items-center">
                      <Rocket className="mr-2 h-4 w-4 text-blue-500" />
                      Watch on one device
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-900 text-white hover:bg-blue-800">
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-blue-500 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-blue-900">Premium</CardTitle>
                    <Badge className="bg-blue-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                  <CardDescription>For enthusiasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-blue-500 animate-pulse">
                    $14.99
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-blue-500" />
                      Access to all movies
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-blue-500" />
                      HD quality
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-blue-500" />
                      Watch on two devices
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-400">
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Ultimate</CardTitle>
                  <CardDescription>For die-hard fans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-blue-900">$19.99</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-blue-500" />
                      Access to all movies
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-blue-500" />
                      4K Ultra HD quality
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-blue-500" />
                      Watch on four devices
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-900 text-white hover:bg-blue-800">
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
}
