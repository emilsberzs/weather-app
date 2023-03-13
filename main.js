//Initialize HTML elements to store data
const p_location = document.getElementById('location');
const p_description = document.getElementById('description');
const p_temp = document.getElementById('temp');
const p_feels = document.getElementById('feels');
const p_wind = document.getElementById('wind');
const p_gusts = document.getElementById('gusts');
const p_direction = document.getElementById('direction');
const p_clouds = document.getElementById('clouds');
const p_rain = document.getElementById('rain');
const p_humidity = document.getElementById('humidity');

//Default location
let place = 'Doncaster'

//Initialize location form
const submit_btn = document.getElementById('submit');
const location_input = document.getElementById('location_input');


//Asign all work to submit button
submit_btn.addEventListener('click', (e) => {
    console.log(location_input.value);
    place = location_input.value;
    getData(place)
})


//Fetch weather data from OWM
async function getData(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=b692773f1ddc1b647134f9c496e1dc86`, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData)
    p_location.innerHTML = weatherData.name
    p_description.innerHTML = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1);
    p_temp.innerHTML = `Current temperature: ${Math.round(weatherData.main.temp * 10) / 10} &#8451`;
    p_feels.innerHTML = `Feels like: ${Math.round(weatherData.main.feels_like)} &#8451`;
    p_wind.innerHTML = `Wind speed: ${Math.round(weatherData.wind.speed)} m/s`;
    p_gusts.innerHTML = `Wind gusts: ${Math.round(weatherData.wind.gust)} m/s`;
    p_direction.innerHTML = `Wind direction: ${weatherData.wind.deg} &deg`
    p_clouds.innerHTML = `Cloud coverage: ${weatherData.clouds.all}%`
}

getData(place)
// b692773f1ddc1b647134f9c496e1dc86 