# My Resume | AI Engineer Portfolio

A modern, responsive portfolio website for an AI/ML engineer, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents professional experience, featured projects, education, certifications, testimonials, blog content, and a Telegram-powered contact form in a clean bilingual interface.
'email: olivercawson@gmail.com see this link https://drive.google.com/drive/folders/14b-arCp0kC8TBBEjI7gginzu23wuDFlp?usp=drive_link'

## Overview

This project is designed as a polished personal resume and portfolio website for showcasing AI engineering, machine learning, MLOps, and software development expertise. It uses the Next.js App Router, reusable React components, theme support, and a structured section-based layout for easy customization.

## Features

- Professional landing page with hero, about, experience, projects, education, certificates, blog, testimonials, and contact sections
- Responsive layout optimized for desktop, tablet, and mobile devices
- Light and dark theme support
- Bilingual-friendly structure with language provider support
- Reusable UI components based on Radix UI patterns
- Contact form API route with Telegram message delivery
- Modern styling with Tailwind CSS and custom global design tokens
- TypeScript-first codebase for maintainability

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React, Radix UI, Lucide React
- **Styling:** Tailwind CSS, tailwind-merge, tailwindcss-animate
- **Forms and Validation:** React Hook Form, Zod
- **Content Rendering:** React Markdown, Remark GFM
- **Notifications:** Sonner
- **Deployment:** Vercel or any platform that supports Next.js

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js 20 or newer
- pnpm, npm, or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/abc123abc123abc1/my-resume.git
cd my-resume
pnpm install
```

If you prefer another package manager:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

These values are required only for the contact form. Without them, the website can still run locally, but contact form submissions will not be delivered.

### Run Locally

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```text
app/
  api/contact/        Contact form API route
  layout.tsx          Root layout and metadata
  page.tsx            Main portfolio page
components/
  ui/                 Reusable UI components
  *-section.tsx       Portfolio content sections
hooks/                Shared React hooks
lib/                  Utility functions
public/               Static assets
styles/               Additional style files
```

## Customization

Update the section components in `components/` to personalize portfolio content such as experience, projects, education, certificates, testimonials, and contact details. Global metadata can be edited in `app/layout.tsx`, while visual styling can be adjusted in `app/globals.css` and `tailwind.config.ts`.

## Deployment

The easiest deployment path is Vercel:

1. Import this repository into Vercel.
2. Add the required environment variables for Telegram contact delivery.
3. Deploy the project.

The project can also be deployed to any hosting provider that supports Next.js applications.

## License

This project is intended for personal portfolio and resume use. Update this section with your preferred license before publishing or distributing the code.