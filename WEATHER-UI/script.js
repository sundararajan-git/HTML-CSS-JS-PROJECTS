// dom elements
const cityEle = document.querySelector(".city");
const dateEle = document.querySelector(".date");
const tempEle = document.querySelector(".temp h2");
const conditionEle = document.querySelector(".temp p");
const iconEle = document.querySelector(".weather-icon");
const details = document.querySelectorAll(".weather-details .detail");


// var
const weatherData = {
    city: "Chennai",
    date: "Monday, Sep 2",
    temp: "25°C",
    condition: "Sunny",
    icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
    wind: "12 km/h",
    humidity: "60%",
    pressure: "1012 hPa"
}

cityEle.textContent = weatherData.city;
dateEle.textContent = weatherData.date;
tempEle.textContent = weatherData.temp;
conditionEle.textContent = weatherData.condition;
iconEle.src = weatherData.icon;

details[0].querySelector("h3").textContent = weatherData.wind;
details[1].querySelector("h3").textContent = weatherData.humidity;
details[2].querySelector("h3").textContent = weatherData.pressure;
