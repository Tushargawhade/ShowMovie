# 🎬 ShowMovie

ShowMovie is a modern movie browsing web application that allows users to search and explore movies with a clean, responsive, and user-friendly interface. The project follows a scalable folder structure and reusable component architecture for maintainability and future enhancements.

---

## 📌 Project Description

ShowMovie is a movie discovery platform that enables users to:

- 🎥 Browse trending and popular movies  
- 🔍 Search for movies by title  
- 📄 View detailed information about each movie  
- 📱 Enjoy a fully responsive experience across devices  

The application uses **Redux Toolkit** for state management and integrates with the **TMDB API** to fetch real-time movie data. It demonstrates modern frontend development practices, API integration, and deployment workflows.

---

## 🚀 Live Deployment

🔗 **Vercel Deployment:**  
https://show-movie-one.vercel.app/

---

## ✨ Features

- Movie search functionality  
- Dynamic API data fetching  
- Clean and modern UI  
- Reusable component architecture  
- Responsive design  
- Fast performance  

---

## 🛠️ Tech Stack

- **Vite**  
- **React.js**  
- **Tailwind CSS**  
- **JavaScript (ES6+)**  
- **Redux Toolkit**  
- **Axios**  
- **TMDB API**  
- **Vercel (Deployment)**  

---

## 📂 Folder Structure

```bash
ShowMovie/
│
├── public/                 # Static assets (images, gifs, logo)
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Templates/      # Card, Navbar, Trailer, etc.
│   │   └── Pages           # Home, Movie, Trending, etc.
│   │
│   ├── store/              # Redux Toolkit setup
│   │   ├── actions/        # Async actions (movie, tv, person)
│   │   ├── reducers/       # Slices (movieSlice, tvSlice, personSlice)
│   │   └── store.jsx       # Redux store configuration
│   │
│   ├── utils/              # Axios configuration & helpers
│   │
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── index.html              # Root HTML file (Vite)
├── package.json
├── vite.config.js
└── README.md
```
---


## Installation & Local Setup

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Tushargawhade/ShowMovie.git
```
### 2️⃣ Navigate to Project Directory
```bash
cd ShowMovie
```
### 3️⃣ Install Dependencies
```bash
npm install
```
### 4️⃣ Start the Development Server
```bash
npm run dev
```

After starting the server, open:
```bash
http://localhost:5173
```

(Or the port shown in the terminal if using Vite.)

##📜 License

This project was built for practice and learning purposes to strengthen frontend development skills, including React, Redux Toolkit, API integration, and project structuring.

##👨‍💻 Author

Tushar Gawhade
