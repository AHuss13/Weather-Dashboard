const searchBtn = document.getElementById("searchbtn");

const cityInput = document.getElementById("cityinput");

const currentCity = document.getElementById("currentcity");

const currentTemp = document.getElementById("currenttemp");

const currentWind = document.getElementById("currentwind");

const currentHumidity = document.getElementById("currenthumidity");

const apikey = "843fa40ad68a96668befb0da86d9b44b"

function citySearch() {
  // Look for city
  const city= cityInput.value
  console.log(city)

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    currentCity.textContent = data.name
    currentTemp.textContent = `Temp: ${data.main.temp}`
  })
}

searchBtn.addEventListener("click", citySearch)




// 5 day forecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}