weathercall();

document.querySelector("#fetch-weather").addEventListener("click",weathercall)
function weathercall(){

    let d=document.getElementById("city-input").value;
    let city_n = "";

    if(d == "")
    {
        city_n = "gandhinagar";
    }
    else
    {
        city_n = d;
    }


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_n}&appid=d0090574e9eee43e68b8b2946f500256&units=metric`)

    .then((Res)=>Res.json())
    .then((res)=>{
        document.getElementById("data1").innerHTML=`<h2 class="city-name">${res.name}</h2>
        <h4 class="weather-description">${res.weather[0].main}</h4>
            <div class="temp-display ms-4">
                <span class="temp">${res.main.temp}</span><sup>°C</sup>
            </div>
            <div class="weather-icon">
               <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="Sunny">
            </div>
            
             <div class="details mt-4">
                <p>Humidity: <span class="humidity">60%</span></p>
                <p>Wind: <span class="wind">12 km/h</span></p>
             </div>
            `
})
    .catch((err)=>{console.log(err)
})

}