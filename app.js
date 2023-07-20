
// fetch('https://api.openweathermap.org/data/2.5/weather?lat=24.9221577&lon=67.0768362&appid=5e8dc7cd5875e4ab491d8c0c245d138a&units=metric')
// .then(res =>res.json())
// .then((res)=>{
//     console.log(res,'res-->')
// })
// .catch((err)=>{
//     console.log(err,'error-->')
// })

const apiKey = "5e8dc7cd5875e4ab491d8c0c245d138a";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' ;
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherImg = document.querySelector('.weather-img');
// console.log(weatherImg)
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°C';
    document.querySelector('.Humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.weather-info').innerHTML =data.weather[0].main;
    document.querySelector('.date').innerHTML = moment().format('ll')
    
    
    if(data.weather[0].main === "Rain"){
      weatherImg.src = 'images/rain-svg.svg'
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherImg.src = 'images/drizzle-svg.svg'
      }
      else if(data.weather[0].main === "Clouds"){
        weatherImg.src = 'images/cloudy.svg'
        
      }
      else if(data.weather[0].main === "Haze"){
        weatherImg.src = 'images/haze.svg'
        
      }
      
    

}
searchBtn.addEventListener(('click'),()=>{
    checkWeather(searchBox.value)
    
})

