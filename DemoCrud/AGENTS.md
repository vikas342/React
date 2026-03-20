# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript app. Application code lives in `src/`, with feature code grouped by purpose: `components/` for UI pieces, `pages/` for route-level screens, `layout/` for shared shells, `routes/` for route guards and route definitions, `hooks/` for reusable hooks, and `services/` for API clients such as `axios.tsx`. Static assets are split between `src/assets/` and `public/`. Build output is generated into `dist/` and should not be committed.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the local Vite dev server with HMR.
- `npm run build`: run TypeScript project checks, then create a production build.
- `npm run preview`: serve the built app locally for verification.
- `npm run lint`: run ESLint across the project.

## Coding Style & Naming Conventions
Use TypeScript with React function components. Match the existing code style: 2-space indentation, semicolons, and double quotes in `.ts` and `.tsx` files. Use `PascalCase` for components and page files (`AddCar.tsx`, `MainLayout.tsx`), `camelCase` for hooks and variables (`useCarList`), and keep route/service helpers narrowly scoped. Prefer colocating logic with the feature folder it serves.

## Testing Guidelines
There is no test runner configured in the current workspace yet. Until one is added, treat `npm run lint` and `npm run build` as the minimum quality gate before opening a PR. When tests are introduced, place them beside the source file or under a dedicated `src/__tests__/` folder, and name them `*.test.ts` or `*.test.tsx`.

## Commit & Pull Request Guidelines
Git history is not available in this checkout, so no repository-specific commit pattern can be verified. Use short, imperative commit messages such as `Add protected route for API page` or `Refactor axios service setup`. PRs should include a clear summary, the reason for the change, validation steps (`npm run lint`, `npm run build`), and screenshots for UI updates.

## Configuration Notes
Do not hardcode secrets in components or services. Keep environment-specific values in Vite environment files when needed, and document any new variables in `README.md`.
