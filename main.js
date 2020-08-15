const submit = document.getElementById("search-city");
submit.addEventListener("click", function(){
    const city = document.getElementById("enter-city-name").value;
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const weather = document.getElementById("weather");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2886f0f83bd5ce7505c731789848c33f`)
    .then(res => res.json())
    .then(data => {
        cityName.innerText = data.name;
        const temp = data.main.temp - 273;
        temperature.innerText = temp.toFixed(2);
        const weatherReport = data.weather[0].main;
        weather.innerText = weatherReport;
        console.log(data)
        if(weatherReport === "Haze")
        {
            document.getElementsByTagName("img")[0].setAttribute('src', "images/haze.png")
            console.log("okay")
        }else if(weatherReport === "Rain")
        {
            document.getElementsByTagName("img")[0].setAttribute('src', "images/rain.png")
        }else if(weatherReport === "Clouds")
        {
            document.getElementsByTagName("img")[0].setAttribute('src', "images/clouds.png")
        }else if(weatherReport === "Drizzle")
        {
            document.getElementsByTagName("img")[0].setAttribute('src', "images/drizzle.png")
        }
        else{
            document.getElementsByTagName("img")[0].setAttribute('src', "https://openweathermap.org/img/wn/02d@2x.png")
        }
    })    
})
