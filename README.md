# tutor-guide.github.io

# Tutor Guide Intro

A modern tutor and case matching platform built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- 精選導師 (Featured Tutors) and 最新個案 (Latest Cases) galleries
- Pop-out modal for tutor and case details
- Responsive, mobile-friendly UI
- Easy to extend with real data sources (e.g., Google Sheets)

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

## Getting Started

### 1. Clone the repository
```powershell
git clone <repo-url>
cd tutor-guie.io
```

### 2. Install dependencies
```powershell
pnpm install
```
Or use `npm install` or `yarn install` if you prefer.

### 3. Build Tailwind CSS (in watch mode for development)
```powershell
pnpm run tailwind-watch
```
This will generate `src/styles/output.css` from `src/styles/main.css`.

### 4. Start the development server (with vite)
```powershell
pnpm start
```

- The app will be available at [http://localhost:3000](http://localhost:3000).

### 5. Build for production
```powershell
pnpm run build
```

### 6. Preview the production build
```powershell
pnpm run serve
```

## Project Structure
- `src/pages/home.tsx` — Main landing page with tutor and case galleries
- `src/custom-element/tutorDetails.tsx` — Pop-out modal for tutor details
- `src/custom-element/caseDetails.tsx` — Pop-out modal for case details
- `bin/` — Static images for tutors and cases
- `src/styles/` — Tailwind CSS source and output

## Customization
- Update mock data in `src/pages/home.tsx` to match your needs
- Replace images in `bin/` with your own
- To fetch data from Google Sheets or an API, see the code comments for guidance

## License
See [LICENSE](LICENSE) for details.

---

If you have any issues or questions, please open an issue or contact the maintainer.