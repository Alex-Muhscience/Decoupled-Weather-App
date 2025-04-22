use App\Http\Controllers\WeatherController;

Route::get('/current-weather', [WeatherController::class, 'getCurrentWeather']);
Route::get('/forecast', [WeatherController::class, 'getForecast']);