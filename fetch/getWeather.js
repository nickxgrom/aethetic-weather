export function getWeather(latitude, longitude) {
  const weather = fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m',
  );
  return weather;
}
