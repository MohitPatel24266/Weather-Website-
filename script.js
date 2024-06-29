if (typeof window !== "undefined") {
    
    const apikey = "faa06b4145a864675760ee10312ee2a9";

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".searchbar");

    const searchBtn = document.querySelector(".search button");
    // console.log(searchBtn.value);
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        var data = await response.json();
         document.querySelector("#city").innerText = data.name;
        document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText ="humidity:"+ data.main.humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed :"+data.wind.speed + "km/h";
        document.querySelector(".description").innerText = data.weather[0].description;
        console.log(data.name,data.main.temp,data.main.humidity,data.wind.speed,data.weather);
    };
    // var res = searchBox.value;
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });

}
