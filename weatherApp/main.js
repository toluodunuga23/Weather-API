const form = document.querySelector('form');
const input = document.querySelector('#city-input');
const results = document.querySelector('#weather-results');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = input.value;

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0511326d6d3fcd963ab018eb0a203005
    &units=metric`);
    const data = await response.json();
    console.log(data);

    const country_code = data.sys.country;
    const coordinate = `(${data.coord.lat}, ${data.coord.lon})`;
    const temp = `${data.main.temp} °C`;
    const pressure = `${data.main.pressure} hPa`;
    const humidity = `${data.main.humidity} %`;
    const main = data.weather[0].main;

    results.innerHTML = `
      <div class="col d-flex justify-content-center">
        <div class="card text-white bg-light mb-6">
          <div class="card-body">
            <h4><span class="badge badge-primary">Country Code:</span> ${country_code}</h4>
            <h4><span class="badge badge-primary">Coordinate:</span> ${coordinate}</h4>
            <h4><span class="badge badge-primary">Temperature:</span> ${temp}</h4>
            <h4><span class="badge badge-primary">Pressure:</span> ${pressure}</h4>
            <h4><span class="badge badge-primary">Humidity:</span> ${humidity}</h4>
            <h4><span class="badge badge-primary">Forecast:</span> ${main}</h4>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error(error);
  }
});
