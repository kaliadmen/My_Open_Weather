class Weather {
    constructor(city){
        this.apiKey = 'Your API KEY';
        this.city = city;
    }
//    fetch weather data from API(Open Weather Map)
    async getWeather(){
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=imperial`);
        
        const responseData = await response.json();
        
        return responseData
        
        
    }
    
//    change weather location
    changeLocation(city,state){
        this.city = city;
    }
}