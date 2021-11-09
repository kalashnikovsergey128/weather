

const inpCity = document.querySelector("#input");

const btnGetWaether = document.querySelector("body > div > div.city-submit > button")

const cityDiv = document.querySelector("#city")

const dateDiv = document.querySelector("#day")

const imagesWeather = document.querySelector("body > div > div.imgweather > img")

const tempDiv = document.querySelector("#temp")

const timeDiv = document.querySelector("body > div > div.weather > div.day-city > div.time")



inpCity.addEventListener('keyup', (e)=>{
    if (e.key == 'Enter') {
        getWeather(inpCity.value)
    }
})



setInterval(() => {
    
    setTime(dateDiv)
    
}, 1000);

function setTime(eltwo){//el
    let date = new Date();
    eltwo.innerText = date.toLocaleString("ru", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}





getWeather();







async function getWeather(city="minsk") {
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=321804ddb8eeca4e47f880d33395687b`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    rerender(data)

}


function rerender(data) {

    console.log(data.main.temp);
    tempDiv.innerText = Math.round(`${data.main.temp} `) + "°";
    cityDiv.innerText = `${data.name}`;
    
    setDayNight(data.dt,data.sys.sunrise,data.sys.sunset);
}


function setDayNight(now, sunrise, sunset) {
    if (now > sunrise && now < sunset) {
        imagesWeather.src = './img/Sunny.png'
    } else imagesWeather.src = './img/Night.png'

}

