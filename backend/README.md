
# 🔧 Weather Backend – Laravel 12

This is the **Laravel 12** backend powering the Modern Weather App. It exposes a REST API that fetches real-time weather & forecast data from **OpenWeatherMap** and returns it in a structured JSON format.

---

## 🔗 Endpoint

```http
GET /api/weather?city=Kisii&units=metric
Returns:

json
Copy
Edit
{
  "lat": -0.6789,
  "lon": 34.7596,
  "current": { ... },
  "hourly": [ ... ],
  "daily": [ ... ]
}
🧱 Stack

Component Details
Laravel v12.x
PHP >=8.1
Guzzle HTTP Client
OpenWeatherMap Weather data provider
SQLite Local dev DB (or MySQL/PostgreSQL in prod)


⚙️ Setup
bash
Copy
Edit
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Add your key to .env:
OPENWEATHER_API_KEY=your_api_key_here

php artisan serve

🗂️ Routes
php
Copy
Edit
Route::get('/weather', [WeatherController::class, 'getWeather']);
👨‍💻 Controller Logic
🔎 Geocode city to lat/lon

☁️ Fetch weather via OpenWeather One Call API

📦 Return structured JSON to frontend

🔐 Environment
Edit .env:

env
Copy
Edit
APP_KEY=base64:...
OPENWEATHER_API_KEY=your_key
DB_CONNECTION=sqlite


🧪 Test
bash
Copy
Edit
php artisan route:list
php artisan config:clear
php artisan serve
Test API in browser:

bash
Copy
Edit
http://localhost:8000/api/weather?city=Nairobi


📄 License
MIT
