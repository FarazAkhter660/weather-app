const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('.humidity');
const wind_speed = document.querySelector('.wind-speed');

async function checkWeather(city)
{
    const APIkey = "807c9a3cf7367a8e187242126e756b56";
    const url = `https://api.openweathermap.org/data/2.5/weather?q
    =${city}&appid=${APIkey}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.webp";
            break;
        case 'Rain':
            weather_img.src = "./images/rain.webp";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.webp";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
    console.log(inputBox);
    checkWeather(inputBox.value);
  });



//4cd0eee81294c867b4bc4cfc64e998c5
//807c9a3cf7367a8e187242126e756b56