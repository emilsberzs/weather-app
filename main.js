async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=b692773f1ddc1b647134f9c496e1dc86', { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData.main.temp)
}
getData()
// b692773f1ddc1b647134f9c496e1dc86 