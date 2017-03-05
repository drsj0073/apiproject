    /****************************************/

    /***** LOCAL WEATHER *****/

    /****************************************/


    // Create app namespace to hold all methods
    var weatherApp = {};
   
    weatherApp.apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
    weatherApp.apiKey = '3333b0bd52234b64811bb9100f38e873';

    // Make AJAX request with user inputted data
    weatherApp.getWeather = function(usercity,userCountry) {

        $.ajax({
            url: weatherApp.apiUrl,
            dataType: 'jsonp',
            data: {
                appid: weatherApp.apiKey,
                q: `${usercity},${userCountry}`,
                units: 'metric'
            }
        }).then(function(weatherData) {
            weatherApp.displayUserResults(weatherData);
            console.log(weatherData);
        });    
    };

    // Display local data on the page
    weatherApp.displayUserResults = function(data) {
        console.log(data);
        var location = data.name;
        locationTemp = data.main.temp;
        totalTemp = locationTemp - planetTemp;
        mercuryWeather = (167 - locationTemp); 
        venusWeather = 462;
        jupiterWeather = -145;
        saturnWeather = -178;
        uranusWeather = -216;
        neptuneWeather = -218;

        // Returns info after information form is submitted
        var userResults = `Hey ${name}, it look's like you weigh ${userWeight} pounds and you're from ${location}, which is currently ${locationTemp}&deg;C. With this information we can calculate your weight on all of the planets in our solar system and compare ${location}'s temperature.`
        //Adds user input to information section
        $('.hello-user').html(userResults);

        // Returns temp comparison for Mercury after information form is submitted
        var mercuryWeatherComparison = `Since it's currently ${locationTemp}&deg;C in ${location}, Mercury is around ${mercuryWeather}&deg;C hotter.`

        $('.mercury__weather-comparison').html(mercuryWeatherComparison);

        // Returns weight comparison for Mercury after information form is submitted
         var mercuryWeightComparison = `On Earth you weigh ${userWeight}, that means you would weigh ${weightDifference} on mercury.`

        $('.mercury__weight-comparison').html(mercuryWeightComparison);
    };

    /****************************************/

    /***** MARS WEATHER *****/

    /****************************************/

    // Make AJAX request with user inputted data
    weatherApp.getMarsWeather = function() {
        $.ajax({
            url: 'http://proxy.hackeryou.com',
            method: 'GET',
            dataType: 'json',
            data: {
                reqUrl: "http://marsweather.ingenology.com/v1/latest/",
            }
        }).then(function(weatherData) {
            weatherApp.displayMarsWeather(weatherData.report);
        });    
    };

     // Display Mars data on the page
    weatherApp.displayMarsWeather = function(data) {
        planetTemp = data.max_temp;
        var marsDate = data.terrestrial_date;
        var marsWeatherType = data.atmo_opacity;
        var marsMinTemp = data.min_temp;

        var marsWeather = `As of ${marsDate}, Mars is ${marsWeatherType} with a high of ${planetTemp} and a low of ${marsMinTemp}.`

        $('.mars__user-statement').html(marsWeather);
    };

    // Start app
    weatherApp.init = function() {
        weatherApp.getMarsWeather();

        $('#form').on('submit', function(event) {
                event.preventDefault();
                city = $('input[name=city]').val();
                country = $('input[name=country]').val();
                name = $('input[name=username]').val();
                userWeight = $('input[name=weight]').val();
                $('.user-introduction').toggleClass("hidden");
                weatherApp.getWeather(city,country);
                console.log(name, city, country, userWeight);
            });
        };
    $(function() {
        weatherApp.init();
        particlesJS.load('particles-js', './js/particlesjs.json', function() {
    });
        });
