# 🎵 Moodify - Your Emotion-Driven Music Companion

Moodify is a modern, full-stack web application that leverages AI-powered face expression detection to curate the perfect music playlist based on your current mood. Whether you're feeling happy, sad, or surprised, Moodify ensures your music matches your vibe.

---

## ✨ Features

### 🧠 Smart Recognition
*   **AI Face Detection**: Real-time expression tracking using MediaPipe.
*   **Mood Analysis**: Detects **Happy**, **Sad**, **Surprised**, and **Neutral** expressions.
*   **Automatic Playlists**: Instantly fetches a collection of songs matching your detected emotion.

### 🎧 Premium Music Player
*   **Integrated Sidebar**: A sleek, glassmorphic playlist appears on the right side of the screen.
*   **Advanced Controls**: 
    *   **Variable Speed**: Cycle through 1x, 1.5x, and 2x playback rates.
    *   **Play Again**: One-tap restart for your favorite tracks.
    *   **Dynamic Progress**: A modern white-accented progress bar that tracks your listening.
*   **Immersive UI**: High-blur backdrops, smooth animations, and a premium dark aesthetic.

### 🔐 Secure & Personal
*   **Full Authentication**: Secure Register, Login, and Logout flows.
*   **Protected Routes**: Your music journey is kept private and safe.
*   **Real-time Notifications**: Toaster alerts for successful actions and error handling.

---

## 🛠️ Tech Stack

### Frontend
*   **Core**: React.js with Vite
*   **Styling**: SCSS (Glassmorphism, Modern UI)
*   **Icons**: Lucide-react
*   **AI/ML**: MediaPipe Face Landmarker
*   **Routing**: React Router

### Backend
*   **Core**: Node.js & Express
*   **Database**: MongoDB with Mongoose
*   **Authentication**: JWT (JSON Web Tokens) & HTTP-only Cookies
*   **Caching**: Redis (Token Blacklisting for secure logout)
*   **State**: Axios for API communication

---

## 🚀 Getting Started

### 1. Prerequisites
*   Node.js (v16+ recommended)
*   MongoDB & Redis installed and running

### 2. Installation

Clone the repository:
```bash
git clone <repository-url>
cd Moodify
```

**Setup Backend:**
```bash
cd Backend
npm install
# Create a .env file with:
# PORT=3000
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key
# REDIS_URL=your_redis_url
```

**Setup Frontend:**
```bash
cd ../Frontend
npm install
```

### 3. Running the App

**Start Backend:**
```bash
cd Backend
npm run dev
```

**Start Frontend:**
```bash
cd Frontend
npm run dev
```

---

## 📸 Screenshots & UI
Moodify features a **Minimalistic Dark Theme** with premium elements:
*   ✨ **Glassmorphic** sidebar and modals.
*   🌊 **Smooth Transitions** and micro-animations.
*   🌑 **Deep Black** backgrounds for high focus.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](<link-to-issues>).

## 📄 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---
*Created By Sounarva with ❤️ for a better music experience.*
