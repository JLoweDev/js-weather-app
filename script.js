let units = 'metric';
let city = 'London';

async function getWeather() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=b559fa679543062582bf71f3041919d1`,
        { mode: 'cors' }
    );
    const weatherData = await response.json();
    cityName = weatherData.name;
    countryName = weatherData.sys.country;
    weatherName = weatherData.weather[0].main;
    rawTemp = weatherData.main.temp;
    temp = Math.round(rawTemp);
}

getWeather();