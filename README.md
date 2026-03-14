# Kwings - Website Service

A modern Next.js website service with Home, About, and Contact pages. Built with TypeScript, Tailwind CSS, and Next.js App Router.

## 📋 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with navigation
│   ├── globals.css           # Global styles
│   ├── about/
│   │   └── page.tsx          # About page
│   └── contact/
│       └── page.tsx          # Contact page (with contact form)
└── components/
    └── Navigation.tsx        # Navigation component
```

## 🚀 Features

- **Home Page** - Welcome section with service highlights and call-to-action buttons
- **About Page** - Company mission, vision, and key value propositions
- **Contact Page** - Contact information and functional contact form
- **Navigation** - Sticky navigation bar with links to all pages
- **Responsive Design** - Mobile-friendly layout using Tailwind CSS
- **Dark Mode Support** - Built-in dark mode support

## 🛠️ Getting Started

### Prerequisites
- Node.js >= 20.9.0 (Currently using v18.20.8 - warnings may appear but functionality works)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The page auto-updates as you edit files. Check the console for any lint warnings.

### Build for Production

```bash
npm run build
```

After building, you can start the production server:

```bash
npm start
```

### Linting

```bash
npm run lint
```

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with services showcase |
| `/about` | About | Company information and values |
| `/contact` | Contact | Contact form and company details |

## 🎨 Styling

- **Tailwind CSS** for utility-based styling
- **Responsive Breakpoints** - Mobile first design
- **Dark Mode** - Automatic dark/light mode switching based on system preferences

## 📧 Contact Form

The contact form on the `/contact` page includes:
- Name field
- Email field
- Message textarea
- Form validation
- Success message upon submission

**Note:** Currently, form submissions are logged to the console. To integrate with a backend or email service, update the `handleSubmit` function in [src/app/contact/page.tsx](src/app/contact/page.tsx).

## 🔧 Customization

### Update Navigation
Edit [src/components/Navigation.tsx](src/components/Navigation.tsx) to customize the navigation bar.

### Update Metadata
Edit the `metadata` object in [src/app/layout.tsx](src/app/layout.tsx) to change page titles and descriptions.

### Update Contact Information
Edit the contact details in [src/app/contact/page.tsx](src/app/contact/page.tsx):
- Email address
- Phone number
- Physical address

## 📚 Tech Stack

- **Framework**: Next.js 16.x with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Tutorial](https://nextjs.org/learn)

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms

- Docker
- AWS
- Azure
- Netlify
- Railway

## 📝 License

This project is open source.

## ✨ Notes

- Node.js version 18.20.8 is currently in use, but Next.js 16 recommends >= 20.9.0. Consider upgrading Node.js for optimal performance.
- The contact form currently logs to console. Implement backend integration for actual email functionality.

