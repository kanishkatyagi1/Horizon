# Banking App — Frontend

A Next.js 14 banking dashboard UI built with TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Charts**: Chart.js + react-chartjs-2
- **Animations**: react-countup

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/           # Next.js App Router pages
  (auth)/      # Sign-in / Sign-up pages
  (root)/      # Main dashboard pages
components/    # Reusable UI components
  ui/          # shadcn/ui base components
constants/     # App-wide constants
lib/
  actions/     # Backend action stubs (replace with real API calls)
  utils.ts     # Utility functions
public/icons/  # SVG icons and assets
types/         # TypeScript type definitions
```

## Backend Integration

The files in `lib/actions/` are stubs. Replace them with your own backend calls when you're ready to connect a real API.
