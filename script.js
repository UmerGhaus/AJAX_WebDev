const apiKey = '3e261c2ee1ddd729b8c38854dc599b98';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function fetchWeather() {
    const cityInput = document.getElementById('cityInput').value;
    
    if (cityInput) {
        $.ajax({
            url: `${apiUrl}?q=${cityInput}&appid=${apiKey}`,
            method: 'GET',
            success: function(data) {
                displayWeather(data);
            },
            error: function(error) {
                console.error('Error fetching weather data:', error);
                displayWeatherError();
            }
        });
    }
}

function displayWeather(weatherData) {
    const weatherInfoElement = document.getElementById('weatherInfo');
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    const weatherHTML = `
        <b>
            <p>Temperature: ${temperature} K</p>
            <p>Description: ${description}</p>
        </b>
    `;

    weatherInfoElement.innerHTML = weatherHTML;
}

function displayWeatherError() {
    const weatherInfoElement = document.getElementById('weatherInfo');
    weatherInfoElement.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
}
