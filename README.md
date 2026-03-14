# Coinbase Clone React Application

This project is a modern, responsive web application clone of Coinbase, built using React and styled with Tailwind CSS. It focuses on delivering a sleek, dynamic user interface with smooth animations and engaging user flows for cryptocurrency trading and portfolio management simulations.

## View Live Demo
**[Live Project on Netlify](https://coinbase-ak-bright.netlify.app/)**

## Key Features

- **Dynamic Landing Page:** Features a responsive layout with smooth scroll reveal animations (powered by `framer-motion`) highlighting app features, advanced trading tools, and earning opportunities.
- **Authentication Flows:** Custom SignIn and SignUp pages with beautiful, animated transitions and modern form inputs.
- **Responsive Navigation:** A fully responsive navigation bar designed to provide quick access to key sections of the application for both desktop and mobile users.
- **Modern UI/UX:** Styled comprehensively with Tailwind CSS, utilizing flexbox/grid layouts, custom gradients, border radiuses, and shadow aesthetics to closely mirror a premium fintech application.

## Technologies Used

- **React:** Component-based UI library.
- **Vite:** Next-generation front-end tooling for fast build times and hot module replacement (HMR).
- **Tailwind CSS:** Utility-first CSS framework for rapid and maintainable styling.
- **Framer Motion:** Used to create complex and polished declarative animations.
- **React Router (or standard routing):** Handles client-side navigation between pages.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ak-bright/coinbase-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd coinbase-clone
   ```

3. Install all dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the Vite development server:

```bash
npm run dev
```

Your app will be available at `http://localhost:5173`.

## Building for Production

To create an optimized production build:

```bash
npm run build
```
The compiled build files will be placed in the `dist/` directory, ready to be deployed to any static web hosting service (like Netlify, Vercel, or GitHub Pages).

## Project Structure

- `src/assets/`: Contains images, SVGs, and other media files used throughout the UI.
- `src/components/`: Reusable React components such as `Navbar` and `Footer`.
- `src/pages/`: Main route components (`LandingPage`, `SignInPage`, `SignUpPage`).
- `src/index.css`: Tailwind directives and global base styles.
- `src/App.jsx`: Main application wrapper and entry point.

## Contact

Created by [Bright Afatsawo]
