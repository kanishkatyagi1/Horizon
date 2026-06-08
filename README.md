# Horizon — Full-Stack Banking Application

A full-stack banking platform built with Next.js 14, React, TypeScript, Appwrite, Plaid API, Dwolla API, and Tailwind CSS. The application enables users to securely connect bank accounts, monitor balances, view transaction history, and perform ACH fund transfers through a modern financial dashboard.

---

## Tech Stack

| Layer                     | Technology               |
| ------------------------- | ------------------------ |
| Framework                 | Next.js 14 (App Router)  |
| Language                  | TypeScript               |
| Frontend                  | React                    |
| Styling                   | Tailwind CSS + Shadcn/ui |
| Authentication & Database | Appwrite                 |
| Bank Data Integration     | Plaid API                |
| ACH Transfers             | Dwolla API               |
| Form Handling             | React Hook Form + Zod    |
| Charts & Analytics        | Chart.js                 |

---

## Key Features

* Secure authentication and account management using Appwrite
* Bank account linking through Plaid integration
* Real-time account balance and transaction monitoring
* Multi-account financial dashboard
* Transaction history with filtering and categorization
* ACH fund transfers through Dwolla
* Responsive design for desktop, tablet, and mobile devices
* Server-side data fetching and protected routes using Next.js App Router

---

## Project Highlights

* Integrated multiple third-party financial services including Plaid and Dwolla
* Implemented secure user authentication and account management workflows
* Developed reusable and scalable UI components using React and TypeScript
* Built a responsive banking dashboard with real-time financial data visualization
* Utilized Next.js Server Components and Server Actions for full-stack functionality
* Explored secure financial data handling patterns and API integrations

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm
* Appwrite Account
* Plaid Developer Account
* Dwolla Developer Account

### Installation

```bash
git clone https://github.com/kanishkatyagi1/Horizon.git
cd Horizon
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and configure the required Appwrite, Plaid, and Dwolla credentials.

### Run Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Project Structure

```txt
horizon/
├── app/
├── components/
├── constants/
├── lib/
├── public/
├── types/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Learning Outcomes

Through this project I strengthened my understanding of:

* Next.js App Router architecture
* Server Components vs Client Components
* Server Actions and secure backend communication
* Third-party API integrations
* Authentication and authorization workflows
* Type-safe application development with TypeScript
* Modern React component architecture
* Financial application design patterns

---

## Planned Enhancements

* Dark Mode
* AI-Powered Spending Analysis
* Budget Tracking & Forecasting
* CSV Transaction Export
* Email Notifications
* Next.js 15 Migration

---

## Disclaimer

This project was implemented as part of a hands-on learning exercise based on publicly available educational resources and was used to explore full-stack financial application development, third-party API integrations, and modern Next.js architecture.
