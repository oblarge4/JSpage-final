const weather = document.getElementById("weather-box");
const city = weather.querySelector(".city");
const date = weather.querySelector(".date");
const temp = weather.querySelector(".temp");

const API_KEY = "8fe53f66f0ed247b8c975b8aadc4aebd";
const months = [
    "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday",
];

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const nowDate = new Date();
    date.innerHTML = `${weekday[nowDate.getDay()].toUpperCase()}  |  ${months[nowDate.getMonth()].toUpperCase()}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerHTML = data.name;
            temp.innerHTML = `${Math.round(data.main.temp)} &deg;C | ${Math.round((data.main.temp)*1.8+32)} &deg;F`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);