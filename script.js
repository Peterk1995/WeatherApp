let weather = {
    "apiKey": "4d9d68d4f238b77f21622e54aa23fbec",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
     },
     // To display the weather find all the leements in the page
     displayWeather: function(data) {
        const { name } = data; // This will extract the name from the object
        const { icon, description } = data.weather[0]; // Gets data.weather object and abstracts these as variables.
        const { temp, humidity } = data.main;
        const { speed } = data.wind; // data.wind has speed and 
        document.querySelector(".city").innerText = "Weather in " + name; // Obtains the INFO FROM THE HTML AND CHANGES IT
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        
    },
     search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
     }
};

document.querySelector(".search button")
.addEventListener("click", function() {
    weather.search(); // Gets the content of the search bar and searches for it
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Toronto");

