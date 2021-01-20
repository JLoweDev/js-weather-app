async function getWeather() {
    const response = await fetch(
        'api.openweathermap.org/data/2.5/weather?q=London&appid=b559fa679543062582bf71f3041919d1',
        { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData.weather.main);
}

getWeather();