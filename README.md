# AI Finance Platform

A **Full Stack AI-Powered Finance Platform** built with **React 19, Next.js 15, Tailwind CSS, Supabase, Prisma, Clerk Authentication, Inngest, and shadcn/ui**. This project is a modern personal finance management system that enables users to track expenses, manage multiple accounts, automate recurring transactions, and analyze financial health with AI assistance.

🔗 Live Demo: [ai-finance-bay.vercel.app](https://ai-finance-bay.vercel.app/)

---

## ✨ Features

* **AI Receipt Scanning** → Upload or scan receipts to auto-extract amount, date, and description.
* **Transaction Management** → Create, edit, and delete income/expenses.
* **Multi-Account Support** → Track multiple bank accounts, wallets, or projects.
* **Recurring Transactions** → Automate monthly bills, salaries, or subscriptions.
* **Dashboard & Analytics** → View charts, breakdowns, and recent transactions.
* **Authentication & Security** → Clerk for user management and secure access.
* **Database & Persistence** → Supabase (Postgres) with Prisma ORM.
* **Background Jobs** → Inngest for scheduling recurring tasks and background workflows.
* **Modern UI** → Built with shadcn/ui, Tailwind CSS, and icons.

---

## 🛠 Tech Stack

* **Frontend:** React 19 + Next.js 15
* **UI/Styling:** Tailwind CSS + shadcn/ui
* **Auth:** Clerk
* **Database:** Supabase (Postgres)
* **ORM:** Prisma
* **Background Jobs:** Inngest
* **Hosting:** Vercel
* **AI:** GEMINI AI

---



## 🚀 Quickstart

### 1. Clone the repo

```bash
git clone <repo-url>
cd <repo>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Copy `.env.example` to `.env.local` and fill in required keys (see below).

```bash
cp .env.example .env.local
```

### 4. Database setup

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000`

---


## 🗄 Database (Supabase + Prisma)

* Schema defined in `prisma/schema.prisma`
* Pull schema from existing DB: `npx prisma db pull`
* Push schema changes: `npx prisma db push`
* Use migrations for versioned schema changes: `npx prisma migrate dev`
* Optional: seed initial data with `prisma/seed.ts`

---

## 🔐 Authentication (Clerk)

* Secure sign-up and sign-in with Clerk
* Middleware protects dashboard and transaction routes
* Configure redirect URLs in Clerk dashboard
* Environment keys: `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

---

## ⏳ Background Jobs (Inngest)

* Handles scheduled jobs such as recurring transactions
* Background workers sync AI receipt parsing
* Local dev: run Inngest dev worker alongside Next.js

---

## 🎨 UI (shadcn/ui + Tailwind)

* Consistent design system using shadcn/ui
* Responsive layout with Tailwind
* Icons: lucide-react or Font Awesome

---


## 📦 Deployment

1. Deploy to **Vercel**
2. Add env vars in Vercel dashboard
3. Run Prisma migrations in production
4. Link to Supabase project
5. Ensure Clerk + Inngest integrations are configured

---





MIT
