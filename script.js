async function getCity() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
  const data = await response.json();   
  const location=data.results[0];
  const lat = location.latitude;
    const lon = location.longitude;
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`);
    const weatherData = await weatherRes.json();
    const ans=weatherData.daily.temperature_2m_max[0];
    const ans1=weatherData.daily.temperature_2m_min[0];
    const date=weatherData.daily.time[0];
  resultDiv.innerHTML = `
      <h2>📍 ${location.name}, ${location.country}</h2>
    
      <p>Max_Temp:${ans}</p>
      <p>Min_temp:${ans1}</p>
      <p>time:${date}</p>
      `;
}
