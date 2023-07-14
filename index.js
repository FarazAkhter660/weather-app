const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.querySelector('.wind');

async function checkWeather(city)
{
    
    const weather_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=807c9a3cf7367a8e187242126e756b56`).then(response => response.json());

    console.log(weather_data)
    const locationNotFound = document.querySelector('.location-not-found');
    const weatherBody = document.querySelector('.weather-body');

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    //weather_body.style.display = "flex";
    //location_not_found.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.webp";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.webp";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.webp";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;
    }

    const windIcon = document.getElementById('wind-icon');
    windIcon.classList.add('fa', 'fa-wind');

    console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
    console.log(inputBox);
    checkWeather(inputBox.value);
});