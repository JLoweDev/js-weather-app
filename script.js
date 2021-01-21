const cityInput = document.getElementById('cityInput');
const locationTitle = document.getElementById('locationTitle');
const weatherTitle = document.getElementById('weatherTitle');
const tempTitle = document.getElementById('tempTitle');
const changeUnits = document.getElementById('changeUnits');

let units = 'metric';
let city = 'London';

async function getWeather(str) {
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
    render();
}

function render() {
    let unitSuffix = '';
    if(units == 'metric') {
        unitSuffix = '°C';
    } else {
        unitSuffix = '°F';
    };
    locationTitle.innerHTML = `${cityName}, ${countryName}`
    weatherTitle.innerHTML = `${weatherName}`
    tempTitle.innerHTML = `${temp}${unitSuffix}`
}

cityInput.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        city = e.target.value;
        getWeather();
    }
});

changeUnits.addEventListener('click', function() {
    if(units == 'metric') {
        units = 'imperial';
        changeUnits.innerHTML = '°F';
        getWeather();
    } else {
        units = 'metric';
        changeUnits.innerHTML = '°C'
        getWeather();
    }
});

getWeather();