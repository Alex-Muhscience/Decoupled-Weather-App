# 🌤️ Modern Weather Application

A sleek and decoupled weather application built with **Next.js 14 (frontend)** and **Laravel 12 (backend)**. Provides real-time weather data with a beautiful UI, responsive design, and location-based forecasts.

![Weather App Screenshot](./assets/preview.png)

---

## 🛠️ Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Frontend   | Next.js 14, TypeScript, TailwindCSS, RippleUI, Zustand |
| Backend    | Laravel 12, PHP 8.x, Guzzle HTTP Client |
| API        | OpenWeatherMap API       |
| Database   | SQLite (dev), MySQL/PostgreSQL (optional prod) |
| Deployment | Vercel (Frontend), Laravel Artisan (Backend) |

---

## 🧭 Project Structure

```bash
weather-app/
├── frontend/         # Next.js 14 UI
│   ├── app/
│   ├── components/
│   └── hooks/
├── backend/          # Laravel 12 API
│   ├── app/Http/Controllers/
│   ├── routes/api.php
│   └── config/
└── README.md         # This file
🧩 Features
🌍 Real-time weather data

📍 Location-based forecasts

📅 5-day & hourly forecast

🌓 Light/Dark mode toggle

📱 Responsive UI with RippleUI

📈 Zustand-powered state

⚙️ Unit switching: °C / °F

📂 Modular architecture

🚀 Quick Start
bash
Copy
Edit
# Clone the monorepo
git clone https://github.com/Alex-Muhscience/Decoupled-Weather-App
cd weather-app

# Frontend
cd frontend && npm install && npm run dev

# Backend (from root)
cd backend && composer install && php artisan serve
📬 API
Your frontend should talk to:

http
Copy
Edit
http://localhost:8000/api/weather?city=Nairobi&units=metric


📄 License
MIT – Free to use, fork, build, and scale.
