# Backend Instructions

Use this guide for backend work in the project.

It uses SQLite, Prisma ORM, and Server Actions.

Write the complete code for every step. Do not get lazy. Write everything that is needed.

Your goal is to completely finish whatever the user asks for.

## Steps

- Tables go in the schema file `prisma\schema.prisma`
- After updating the database schema, make sure the user creates a new migration file and applies it with `pnpm prisma:migrate`
- Queries and mutations go in a file per table in `/src/services` like `movies.ts`
- you may also be asked to implement frontend features, so make sure the above is complete before building out those frontend features

## Requirements

- data fetching should be done in a server component and pass the data down as props
