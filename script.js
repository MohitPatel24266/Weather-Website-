if (typeof window !== "undefined") {
    
    const apikey = "faa06b4145a864675760ee10312ee2a9";

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".searchbar");

    const searchBtn = document.querySelector("#btn-city");
    // console.log(searchBtn.value);
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        var data = await response.json();
        document.querySelector("#city") = data.name;
        document.querySelector("#temp") = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity") = data.main.humidity + "%";
        document.querySelector(".wind") = data.wind.speed + "km/h";
        document.querySelector(".description") = data.weather[0].description;
    };
    // var res = searchBox.value;
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });

}
