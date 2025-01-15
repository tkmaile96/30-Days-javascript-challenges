document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-city');
    const searchButton = document.getElementById('search-btn');
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temp');
    const weatherElement = document.getElementById('weather');

    
    const apiKey = '3a4b4fb18cd359b0f5c92e4815daf327'; 
    const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    // Function to fetch weather data
    async function fetchWeather(city) {
        try {
            const response = await fetch(`${apiBaseUrl}?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();

            
            cityElement.textContent = `${data.name}`;
             tempElement.textContent = `Temperature: ${data.main.temp}°C`;
             weatherElement.textContent =  `Weather:${data.weather[0].description}`;
        } catch (error) {
            cityElement.textContent = 'City not found or API error occurred.';
            tempElement.textContent = '';
            weatherElement.textContent = '';
            console.error('Error fetching weather data:', error);
        }
    }

    
    searchButton.addEventListener('click', () => {
        const city = input.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
