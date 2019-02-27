//Get stored location data. If none set stored location to default location
const weatherLocation = storage.getLocationData();

//Init Weather object
const weather = new Weather(weatherLocation.city);



//Get weather data on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    
//    Change location
    weather.changeLocation(city);
    storage.setLocationData(city);
    
//    Get and display weather
    getWeather();
    
//    close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.display(results);
    })
    .catch(err => console.log(err));
}