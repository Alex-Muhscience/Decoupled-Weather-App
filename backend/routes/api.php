<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

// Define the route for getting weather data
Route::get('/weather', [WeatherController::class, 'getWeather']);

// Define a test route to check if CORS is working
Route::get('/test-cors', function () {
    return response()->json(['message' => 'CORS working']);
});