async function getWeather() {
    const apiKey = '441045b4509548bf330bdc80b568681b';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('weather-info').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>🌬 Wind: ${data.wind.speed} m/s</p>
                <p>☁ Condition: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}
