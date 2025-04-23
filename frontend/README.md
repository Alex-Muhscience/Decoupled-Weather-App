
# 🖼️ Weather Frontend – Next.js 14

This is the **Next.js 14 App Router** frontend for the Modern Weather Application. Built with **TypeScript**, **Tailwind CSS**, **RippleUI**, and **Zustand** for clean UI and efficient state management.

---

## 🌐 Features

- Search cities for current weather
- 5-day forecast with hourly view
- Dynamic light/dark mode
- Global state via Zustand
- Toast notifications (react-hot-toast)
- Fully responsive with RippleUI components

---

## 🧱 Tech Stack

| Tech       | Purpose                    |
|------------|----------------------------|
| Next.js 14 | App Router architecture     |
| TypeScript | Type safety across UI logic |
| Zustand    | Lightweight global state    |
| Tailwind   | Styling via utility classes |
| RippleUI   | Component library for UI    |
| Vercel     | Ideal frontend deployment   |

---

## ⚙️ Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
# Add API base
NEXT_PUBLIC_API_BASE=http://localhost:8000/api

npm run dev
Open in browser: http://localhost:3000

📂 Folder Structure
bash
Copy
Edit
frontend/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
├── components/
│   ├── SearchBox.tsx
│   ├── WeatherCard.tsx
│   └── UnitSwitcher.tsx
├── hooks/
│   └── useWeatherStore.ts
├── styles/
│   └── globals.css
🎯 Goals
Minimal + modular UI

Fast feedback via hot-reloading

Easily extensible for more data sources or UI modes

📄 License
MIT
