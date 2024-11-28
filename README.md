# Movie Database Application

A modern web application built with Next.js 14, Prisma, and Shadcn UI for browsing and discovering movies.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** SQLite with Prisma ORM
- **Styling:** Tailwind CSS + Shadcn UI
- **Language:** TypeScript

## Prerequisites

- Node.js 18+
- npm or pnpm

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Initialize Shadcn UI:

```bash
npx shadcn@latest init --src-dir
```

4. Add required Shadcn components:

```bash
npx shadcn@latest add button input label textarea
```

5. Set up the database:

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

6. Start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/           # Pages and routing
├── components/    # Reusable components
├── services/      # Data access layer
├── lib/          # Utility functions
prisma/
├── schema.prisma # Database schema
├── migrations/   # Database migrations
├── seed.ts      # Seeding script
```

## Database Setup

The application uses SQLite with Prisma ORM. The database schema includes:

- Movies
- Actors
- Directors
- Genres

## Development

- Make changes to the Prisma schema in `prisma/schema.prisma`
- Run `npx prisma generate` after schema changes
- Use `npx prisma studio` to view/edit data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[Add your license here]

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Database management with [Prisma](https://www.prisma.io/)
