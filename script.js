const btn = document.getElementById('btn');

async function getWeather() {
    const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=b559fa679543062582bf71f3041919d1',
        { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData.name);
    console.log(weatherData.sys.country);
    console.log(weatherData.weather[0].main);
}

btn.addEventListener('click', getWeather)