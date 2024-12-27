let loc = document.querySelector("#location");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  if (loc.value != "" && loc.value != null) fetchWeatherData(loc.value);
});

async function fetchWeatherData(cityName) {
  try {
    let data = await window.fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=18b20493f0c0fac19c54e3e0d8bc6ba7`
    );
    let finalData = await data.json();
    
    let displayData = document.querySelector(".display-data");
    let displayTemp = document.querySelector(".display-temp");
    let displayLocation = document.querySelector(".display-loc");
    let displaySpeed = document.querySelector(".display-speed");
    let displayHumidity = document.querySelector(".display-humidity");
    let icon = document.querySelector("#icon");
    let asideDataDisappear = document.querySelectorAll(".inactive");
    
    if (finalData.cod == "404") {
      
      [...asideDataDisappear].forEach((v, i) => {
        v.style.display = "none";
      });
      
      displayData.innerHTML =
        "Location is not valid. Please enter valid Location";
      displayData.style.color = "red";
    
    }
    else {
      console.log(finalData);
      console.log(displayTemp);
    
      let { name, main, wind, weather } = finalData;
      
      displayTemp.innerHTML = parseInt(main.temp - 273.15) + "°C";
      displayLocation.innerHTML = name;
      displaySpeed.innerHTML = wind.speed + "km/hr";
      displayHumidity.innerHTML = main.humidity + "%";
      icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

       [...asideDataDisappear].forEach((v, i) => {
        v.style.display = "flex";
      });

      displayData.innerHTML =
        "Weather App";
      displayData.style.color = "black";
    
    }
  } 
  catch (error) {
  
    console.log("err");
  
  }
}
