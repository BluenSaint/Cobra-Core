# Cobra Core

Military-grade dispute management system built with Next.js 14 and Tailwind CSS.

## Phase 1 Features

- Dark-themed military UI
- Responsive layout system
- War Room dashboard placeholder
- Secure upload center placeholder
- CI/CD integration with Vercel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Vercel Deployment

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/BluenSaint/Cobra-Core.git
cd Cobra-Core
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
Cobra-Core/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with dark theme
│   │   ├── page.tsx      # Landing page
│   │   ├── war-room/     # War Room dashboard
│   │   └── upload/       # Document upload center
│   └── styles/
│       └── globals.css   # Global styles and Tailwind
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The project is automatically deployed to Vercel when changes are pushed to the main branch.

## License

MIT
