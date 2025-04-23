<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class WeatherController extends Controller
{
    protected $apiKey = env('OPENWEATHERMAP_API_KEY'); 

    public function getCurrentWeather(Request $request)
    {
        $city = $request->input('city');
        if (!$city) {
            return response()->json(['error' => 'City parameter is missing'], 400);
        }

        $client = new Client();
        try {
            $response = $client->request('GET', "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$this->apiKey}&units=metric");
            return response()->json(json_decode($response->getBody(), true));
        } catch (\Exception $e) {
            return response()->json(['error' => 'City not found or API request failed'], 404);
        }
    }

    public function getForecast(Request $request)
    {
        $city = $request->input('city');
        if (!$city) {
            return response()->json(['error' => 'City parameter is missing'], 400);
        }

        $client = new Client();
        try {
            $response = $client->request('GET', "https://api.openweathermap.org/data/2.5/forecast?q={$city}&appid={$this->apiKey}&units=metric");
            return response()->json(json_decode($response->getBody(), true));
        } catch (\Exception $e) {
            return response()->json(['error' => 'City not found or API request failed'], 404);
        }
    }
}