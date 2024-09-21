const apiKey='5c01b9af53b0fe5f00cd20df7335266a';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox=document.querySelector('.search input')
const searchBnt=document.querySelector('.search button')


async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp + '°c';
    document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
    document.querySelector('.wind').innerHTML=data.wind.speed + ' km/h';

}

searchBnt.addEventListener('click',()=>{  
    checkWeather(searchBox.value);

})



