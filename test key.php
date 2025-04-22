<?php
// Your OpenWeatherMap API key
$apiKey = 'ad87ce66000c8f7ec96039cf94c3d625';
// Base URL for the OpenWeatherMap API
$baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
// Example: Get weather data for London
$cityName = "London";
// Construct the complete URL
$completeUrl = $baseUrl . "appid=" . $apiKey . "&q=" . $cityName;

// Use cURL to make the request
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $completeUrl);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
curl_close($curl);

// Check the response
if ($response) {
    $weatherData = json_decode($response, true);
    if (isset($weatherData['cod']) && $weatherData['cod'] == 200) {
        echo "API key is valid!\n";
        print_r($weatherData);
    } else {
        echo "API key is invalid or there was an error: " . $weatherData['message'] . "\n";
    }
} else {
    echo "Failed to get response from OpenWeatherMap API.\n";
}
?>