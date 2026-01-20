🎬 SHOWMOVIE

Transforming Media Discovery with Seamless Innovation


📑 Table of Contents

Overview

Why ShowMovie?

Getting Started

Prerequisites

Installation

Usage

Testing

Project Structure

API Configuration

Future Improvements

Credits

Author

📖 Overview

ShowMovie is a modern media discovery web application built with React.
It allows users to explore movies, TV shows, seasons, people, and detailed information using the TMDB API.

The project focuses on:

Clean UI

Scalable architecture

Real-world API integration

Smooth navigation and performance

❓ Why ShowMovie?

This project demonstrates how to build a production-ready media platform using modern frontend tools.

Core highlights:

⚡ Fast Development Environment
Built with Vite, enabling instant hot-module replacement.

🧹 Code Quality & Standards
ESLint enforces clean JavaScript and JSX practices.

🎨 Modern Styling
Tailwind CSS for responsive, customizable UI.

🧩 Component Modularization
Reusable components for cards, details, layouts, and navigation.

🔄 State & API Management
Redux + Axios for predictable data flow and API handling.

🚀 Scalable Architecture
Easy to extend with new features like search, auth, and watchlists.

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

JavaScript (ES6+)

Node.js

npm (Node Package Manager)

Installation

Build ShowMovie from source and install dependencies:

Clone the repository

git clone https://github.com/Tushargawhade/ShowMovie


Navigate to the project directory

cd ShowMovie


Install dependencies

npm install

▶️ Usage

Run the development server:

npm run dev


Open your browser and visit:

http://localhost:5173

🧪 Testing

Currently, this project does not include automated tests.
Testing support can be added in future using frameworks like Jest or Vitest.

npm test

🗂️ Project Structure
src/
 ├─ components/
 │   ├─ Templates/
 │   ├─ partials/
 │   ├─ MovieDetails.jsx
 │   ├─ TvDetails.jsx
 │   ├─ PersonDetail.jsx
 │   └─ SeasonDetails.jsx
 ├─ store/
 │   ├─ actions/
 │   ├─ reducers/
 ├─ utils/
 │   └─ axios.js
 ├─ App.jsx
 └─ main.jsx

🔑 API Configuration

ShowMovie uses The Movie Database (TMDB) API.

Steps:

Create an account at:
👉 https://www.themoviedb.org/

Generate a Read Access Token (v4 auth)

Configure Axios:

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer YOUR_TMDB_ACCESS_TOKEN`,
  },
  params: {
    language: "en-US",
  },
});

export default instance;


⚠️ Replace YOUR_TMDB_ACCESS_TOKEN with your actual token.

🔮 Future Improvements

❤️ Watchlist & favorites

🔐 Authentication

🎬 Episode detail pages

🌐 Multi-language support

📱 Mobile UI optimizations

🙌 Credits

Data provided by The Movie Database (TMDB)

This product uses the TMDB API but is not endorsed or certified by TMDB.

👨‍💻 Author

Tushar Gawhade

GitHub: https://github.com/Tushargawhade