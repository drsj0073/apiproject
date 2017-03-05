var planets = {
    mercuryWeight: function() {
         return userWeight/9.81 * 3.7;
    },
    mercuryWeather: function() {
        return 167 - locationTemp; 
    },
    // mercuryAge: function() {
    //     return userAge/87.97;
    // },
    venus: function() {
         return userWeight/9.81 * 8.87;
    },
    venusWeather: function() {
        return 462 - locationTemp; 
    },
    mars: function() {
         return userWeight/9.81 * 3.711;
    },
    marsWeather: function() {
        return planetTemp - locationTemp; 
    },
    jupiter: function() {
         return userWeight/9.81 * 24.79;
    },
    jupiterWeather: function() {
        return -145 - locationTemp; 
    },
    saturn: function() {
         return userWeight/9.81 * 10.44;
    },
    saturnWeather: function() {
        return -178 - locationTemp; 
    },
    uranus: function() {
         return userWeight/9.81 * 8.69;
    },
    uranusWeather: function() {
        return -216 - locationTemp; 
    },
    neptune: function() {
         return userWeight/9.81 * 11.15;
    },
    neptuneWeather: function() {
        return -218 - locationTemp; 
    },
}


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
        compareTempToMercury = planets.mercuryWeather();
        weightOnMercury = planets.mercuryWeight();
        // ageOnMercury = planets.mercuryAge();
        


        // Returns info after information form is submitted
        var userResults = `Hey ${name}, it look's like you weigh ${userWeight} pounds and you're from ${location}, which is currently ${locationTemp}&deg;C. With this information we can calculate your weight on all of the planets in our solar system and compare ${location}'s temperature.`
        //Adds user input to information section
        $('.hello-user').html(userResults);

        // ****** PLANETS BEGIN ****** // 

        // *** MERCURY ** //

        // Returns temp comparison for Mercury after information form is submitted
        var mercuryWeatherComparison = `Since it's currently ${locationTemp}&deg;C in ${location}, Mercury's average temperature is around ${compareTempToMercury}&deg;C hotter.`

        $('.mercury__weather-comparison').html(mercuryWeatherComparison);

        // Returns weight comparison for Mercury after information form is submitted
         var mercuryWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnMercury.toFixed(0)} pounds on mercury.`

        $('.mercury__weight-comparison').html(mercuryWeightComparison);

        // Returns age comparison for Mercury after information form is submitted

        // var mercuryAgeComparison = `Looks like your ${userAge} years old. Since Mecury takes 87.97 days to rotate the sun, you would be ${ageOnMercury} years old!`

        // $('.mercury__age-comparison').html(mercuryAgeComparison);



        // *** VENUS ** //

        // Returns info after information form is submitted
        var userResults = `Hey ${name}, it look's like you weigh ${userWeight} pounds and you're from ${location}, which is currently ${locationTemp}&deg;C. With this information we can calculate your weight on all of the planets in our solar system and compare ${location}'s temperature.`
        //Adds user input to information section
        $('.hello-user').html(userResults);

        // ****** PLANETS BEGIN ****** // 

        // *** MERCURY ** //

        // Returns temp comparison for Mercury after information form is submitted
        var mercuryWeatherComparison = `Since it's currently ${locationTemp}&deg;C in ${location}, Mercury's average temperature is around ${compareTempToMercury}&deg;C hotter.`

        $('.mercury__weather-comparison').html(mercuryWeatherComparison);

        // Returns weight comparison for Mercury after information form is submitted
         var mercuryWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnMercury.toFixed(0)} pounds on mercury.`

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
