function renderWeatherResults(data) {
    const temperature = data.current.temperature;
    const weatherDescriptions = data.current.weather_descriptions ? data.current.weather_descriptions.join(", ") : 'No description';
    const weatherIcon = data.current.weather_icons && data.current.weather_icons.length > 0 ? data.current.weather_icons[0] : '';

    const card = `
        <div class="weather-card">
            <h2>${data.location ? data.location.name : 'Unknown Location'}</h2>
            <img src="${weatherIcon}" alt="Weather Icon">
            <p>${weatherDescriptions}</p>
            <p>Temperature: ${temperature}°C</p>
        </div>
    `;
    document.getElementById("weatherDisplay").innerHTML = card;
}

  
  async function getWeatherBtnClickHandler() {
    const select = document.getElementById("citySelector");
    const city = select.value;
    const apiKey = 'cdc198743d180979fcef484a0cab6325';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data) renderWeatherResults(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherDisplay").innerHTML = 'Failed to load weather data';
    }
  }
  
  const getWeatherBtn = document.getElementById("getWeatherBtn");
  getWeatherBtn.addEventListener("click", getWeatherBtnClickHandler);
  
  