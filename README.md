# Qurbani Animal Marketplace

A modern web application for finding and booking Qurbani animals in Bangladesh. Built with Next.js, this platform connects buyers with trusted sellers offering healthy, verified cows and goats.

## Features

- **Animal Listings**: Browse a wide variety of cows and goats from verified sellers
- **User Authentication**: Secure login/signup with email/password and Google OAuth
- **Animal Details**: Detailed information about each animal including price, location, and health status
- **Booking System**: Easy booking process for selected animals
- **Search & Filter**: Sort animals by price and other criteria
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **FAQ Section**: Comprehensive Qurbani tips and frequently asked questions

## Tech Stack

### Core Dependencies
- **Next.js** (16.2.4) - React framework for production
- **React** (19.2.4) - UI library
- **React DOM** (19.2.4) - React rendering library

### Authentication & Database
- **Better Auth** (1.6.9) - Authentication library
- **@better-auth/mongo-adapter** (1.6.9) - MongoDB adapter for Better Auth
- **MongoDB** (7.2.0) - NoSQL database

### UI & Styling
- **@heroui/react** (3.0.3) - UI component library
- **@heroui/styles** (3.0.3) - HeroUI styles
- **Tailwind CSS** (4.x) - Utility-first CSS framework
- **DaisyUI** (5.5.19) - Component library for Tailwind CSS
- **@gravity-ui/icons** (2.18.0) - Icon library

### Additional Libraries
- **React Icons** (5.6.0) - Popular icon library
- **React Spinners** (0.17.0) - Loading spinner components
- **Lottie React** (2.4.1) - Animation library
- **SweetAlert2** (11.26.24) - Modal library
- **JSON Server** (1.0.0-beta.15) - Mock REST API server

### Development Dependencies
- **ESLint** (9.x) - Linting utility
- **ESLint Config Next** (16.2.4) - ESLint configuration for Next.js
- **PostCSS Import** (16.1.1) - PostCSS plugin for importing CSS files
- **@tailwindcss/postcss** (4.x) - Tailwind CSS PostCSS plugin

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd a08
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your MongoDB connection string and other required environment variables.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Home Page**: View featured animals and Qurbani tips
- **All Animals**: Browse and filter all available animals
- **Login/Register**: Create an account or sign in to book animals
- **Profile**: Manage your account and bookings

## Screenshots

<!-- Add screenshots of the landing page here -->

## Live Demo

[View Live Demo](https://a08-ten.vercel.app/)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.