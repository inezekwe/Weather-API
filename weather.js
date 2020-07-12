var zipsearch = null;
var apiKey = "75275c3704ad65ab9e5497fbeb18bcd6"; 

var weather = null;

$( document ).ready(function() {

    zipsearch = document.getElementById('zipsearch');

    zipsearch.addEventListener('search', findWeather);

    weather = document.getElementById('weather');
                
                 
});


function findWeather(event) {

    var zipcode = zipsearch.value;
    var weatherHTML = null;

    if(zipcode == ''|| isNaN(zipcode) || zipcode.length != 5){
         alert('Please enter a US zipcode')
        }
    else {
        $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`, function(data) {
                    
        weatherHTML = `
                    <h3 class='col-6'>City: ${data.name}</h3>
                    <h3 class='col-6'>Temperature: ${data.main.temp}</h3>
                    <h3 class='col-6'>Feels Like: ${data.main.feels_like}</h3>
                    <h3 class='col-6'>Humidity: ${data.main.humidity}</h3>
                   <h3 class='col-6'>Wind Speed: ${data.wind.speed}</h3>
                    `;
        console.log(data);
                    
                   
        weather.innerHTML = weatherHTML;
        }); 
    }  
}