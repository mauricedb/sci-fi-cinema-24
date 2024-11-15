-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "backdropPath" TEXT,
    "overview" TEXT NOT NULL,
    "popularity" REAL NOT NULL,
    "posterPath" TEXT,
    "releaseDate" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "voteAverage" REAL NOT NULL,
    "voteCount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ActorToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ActorToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ActorToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DirectorToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DirectorToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Director" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DirectorToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_GenreToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GenreToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActorToMovie_AB_unique" ON "_ActorToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorToMovie_B_index" ON "_ActorToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DirectorToMovie_AB_unique" ON "_DirectorToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_DirectorToMovie_B_index" ON "_DirectorToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToMovie_AB_unique" ON "_GenreToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToMovie_B_index" ON "_GenreToMovie"("B");
