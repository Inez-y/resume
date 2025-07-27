
# Inez's Playground

A modern, responsive portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring animated sections, carousels, and smooth transitions.

This project showcases my information, projects, education, work experience, and skills in a visually engaging format. It is designed for deployment on DigitalOcean App Platform.

---

## Features

* **Intro Section**

  * Animated text effect for roles (e.g., *Programmer, New Grad, Photographer*).
  * Optional profile image with responsive layout.

* **Projects Carousel**

  * Infinite looping carousel with:

    * Autoplay every few seconds.
    * Click-and-drag swipe (desktop support).
    * Multiple cards displayed side-by-side.
    * Center card emphasized with scaling.

* **Education & Skills**

  * Reusable **CardCarousel** with animated transitions (using `react-transition-group`).
  * Images automatically resized and styled with rounded corners.

* **Navigation**

  * Smooth scrolling links (Projects, Education, Skills, Contact).
  * Contact links for **email (`mailto:`)** and **phone (`tel:`)**.

* **Responsive Design**

  * Optimized for desktop, tablet, and mobile using **Tailwind CSS** breakpoints.

---

## Tech Stack

* React 
* TypeScript
* Tailwind CSS
* Framer Motion (animations)
* React Transition Group (card transitions)
* Node.js (for build scripts)


---

## Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Inez-y/resume.git
cd resumes
npm install
```

Run the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

---

## File Structure

```
src/
├── assets/               # Images 
├── components/
│   ├── Landing/          # Intro, Projects, Education, Skills sections
│   ├── Reusables/        # Shared components (CardCarousel, hooks)
│   ├── Nav.tsx           # Navigation bar
│   └── Header.tsx        # Top header section
├── App.tsx               # Main app entry
└── index.tsx             # React root
```

---

## Known Issues

* **ESLint Warnings:**
  Some variables are unused (e.g., `isDragging`, `baseSpacing`). You can clean them up or disable ESLint for those lines using:

  ```tsx
  // eslint-disable-next-line
  ```

---


## TO-DOs

Build baneknd sesrver to make the website fully functionall with data handling
