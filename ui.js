class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.maxTemp = document.getElementById('w-maxtemp');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-winds');
    }

    display(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + "°F";
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.maxTemp.textContent = `Today's Hi: ${weather.main.temp_max} °F`;
        this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;

    }
}

ui = new UI();