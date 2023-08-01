const API_KEY = "37a9ee61ac0bb153f166433e0798202d";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city)
{
    const response = await fetch(API_URL + city + '&appid=' + API_KEY);
    
    if(response.status == 404) 
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();

        console.log(data);
        document.querySelector(".error").style.display = "none";
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = data.main.temp.toFixed(1) + '°C';
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";
        document.querySelector(".weather-icon").src = "images/" + data.weather[0].main.toLowerCase() + ".png";
        document.querySelector(".weather").style.display = "block";
    }
    searchBox.value = "";
}

searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value);});