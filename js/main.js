var planets = {
    mercuryWeight: function() {
         return userWeight/9.81 * 3.7;
    },
    mercuryWeather: function() {
        return 167 - locationTemp; 
    },
    mercuryJump: function() {
        return 1.16 * 5 / 2;
    },
    // mercuryAge: function() {
    //     return userAge/87.97;
    // },
    venusWeight: function() {
         return userWeight/9.81 * 8.87;
    },
    venusWeather: function() {
        return 462 - locationTemp; 
    },
    venusJump: function() {
        return 35.35 * 10 / 9;
    },
    marsWeight: function() {
         return userWeight/9.81 * 3.711;
    },
    marsWeather: function() {
        return planetTemp - locationTemp; 
    },
    marsJump: function() {
        return 35.35 * 5 / 2;
    },
    jupiterWeight: function() {
         return userWeight/9.81 * 24.79;
    },
    jupiterWeather: function() {
        return  locationTemp - -145; 
    },
    jupiterJump: function() {
        return 35.35 * 2 / 5;
    },
    saturnWeight: function() {
         return userWeight/9.81 * 10.44;
    },
    saturnWeather: function() {
        return locationTemp - -178; 
    },
    saturnJump: function() {
        return 35.35 * 7 / 8;
    },
    uranusWeight: function() {
         return userWeight/9.81 * 8.69;
    },
    uranusWeather: function() {
        return locationTemp - -216; 
    },
    uranusJump: function() {
        return 35.35 * 11 / 12;
    },
    neptuneWeight: function() {
         return userWeight/9.81 * 11.15;
    },
    neptuneWeather: function() {
        return locationTemp - -218; 
    },
    neptuneJump: function() {
        return 35.35 * 5 / 7;
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
        // Compare earth to planets
        compareTempToMercury = planets.mercuryWeather();
        compareTempToVenus = planets.venusWeather();
        compareTempToMars = planets.marsWeather();
        compareTempToJupiter = planets.jupiterWeather();
        compareTempToSaturn = planets.saturnWeather();
        compareTempToUranus = planets.uranusWeather();
        compareTempToNeptune = planets.neptuneWeather();
        // Compare weight from Earth to planets
        weightOnMercury = planets.mercuryWeight();
        weightOnVenus = planets.venusWeight();
        weightOnMars = planets.marsWeight();
        weightOnJupiter = planets.jupiterWeight();
        weightOnSaturn = planets.saturnWeight();
        weightOnUranus = planets.uranusWeight();
        weightOnNeptune = planets.neptuneWeight();
        // Compare avg jump on earth to other planets
        jumpOnMercury = planets.mercuryJump();
        jumpOnVenus = planets.venusJump();
        jumpOnMars = planets.marsJump();
        jumpOnJupiter = planets.jupiterJump();
        jumpOnSaturn = planets.saturnJump();
        jumpOnUranus = planets.uranusJump();
        jumpOnNeptune = planets.neptuneJump();
        // Compare age on Earth to planets
        // ageOnMercury = planets.mercuryAge();
        


        // Returns info after information form is submitted
        var userResults = `Hey ${name}, it look's like you weigh ${userWeight} pounds and you're from ${location}, which is currently ${locationTemp}&deg;C. With this information we can calculate your weight on all of the planets in our solar system and compare ${location}'s temperature.`
        //Adds user input to information section
        $('.hello-user').html(userResults);

        // ****** PLANETS BEGIN ****** // 

        // *** MERCURY ** //

        // Returns temp comparison 
        var mercuryWeatherComparison = `${location} is currently ${compareTempToMercury}&deg;C colder than the avg temperature on Mercury.`

        $('.mercury__weather-comparison').html(mercuryWeatherComparison);

        // Returns weight comparison
         var mercuryWeightComparison = `Your weight on earth is ${userWeight} pounds. On Mercury, you would weigh approximately ${weightOnMercury.toFixed(0)} pounds.`

        $('.mercury__weight-comparison').html(mercuryWeightComparison);

        // Returns jump comparison

        var mercuryJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnMercury.toFixed(2)} cm on Mercury.`

         $('.mercury__jump-comparison').html(mercuryJumpComparison);

        // Returns age comparison for Mercury after information form is submitted

        // var mercuryAgeComparison = `Looks like your ${userAge} years old. Since Mecury takes 87.97 days to rotate the sun, you would be ${ageOnMercury} years old!`

        // $('.mercury__age-comparison').html(mercuryAgeComparison);

        // *** VENUS ** //

        // Returns temp comparison 
        var venusWeatherComparison = `${location} is currently ${compareTempToVenus}&deg;C colder than the avg temperature on Venus.`

        $('.venus__weather-comparison').html(venusWeatherComparison);

        // Returns weight comparison
         var venusWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnVenus.toFixed(0)} pounds on Venus.`

        $('.venus__weight-comparison').html(venusWeightComparison);

        // Returns jump comparison

        var venusJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnVenus.toFixed(2)} cm on Venus.`

         $('.venus__jump-comparison').html(venusJumpComparison);


         // *** MARS ** //

        // Returns temp comparison 
        var marsWeatherComparison = `${location} is currently ${compareTempToMars}&deg;C colder than the avg temperature on Mars.`

        $('.mars__weather-comparison').html(marsWeatherComparison);

        // Returns weight comparison
         var marsWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnMars.toFixed(0)} pounds on Mars.`

        $('.mars__weight-comparison').html(marsWeightComparison);

        // Returns jump comparison

        var marsJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnMars.toFixed(2)} cm on Mars.`

         $('.mars__jump-comparison').html(marsJumpComparison);

        // Returns api info 
        var marsApiReturn = `Thanks to information being transmitted by the Curiosity Rover, we're able to get more accurate feedback. As of ${marsDate}, Mars is ${marsWeatherType} with a high of ${planetTemp} and a low of ${marsMinTemp}.`

        $('.mars__apiReturn').html(marsApiReturn);

        // *** JUPITER ** //

        // Returns temp comparison 
        var jupiterWeatherComparison = `${location} is currently ${compareTempToJupiter}&deg;C hotter than the avg temperature on Jupiter.`

        $('.jupiter__weather-comparison').html(jupiterWeatherComparison);

        // Returns weight comparison
         var jupiterWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnJupiter.toFixed(0)} pounds on Jupiter.`

        $('.jupiter__weight-comparison').html(jupiterWeightComparison);

        // Returns jump comparison

        var jupiterJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnJupiter.toFixed(2)} cm on Jupiter.`

         $('.jupiter__jump-comparison').html(jupiterJumpComparison);

        // *** SATURN ** //

        // Returns temp comparison 
        var saturnWeatherComparison = `${location} is currently ${compareTempToSaturn}&deg;C hotter than the avg temperature on Saturn.`

        $('.saturn__weather-comparison').html(saturnWeatherComparison);

        // Returns weight comparison
         var saturnWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnSaturn.toFixed(0)} pounds on Saturn.`

        $('.saturn__weight-comparison').html(saturnWeightComparison);

        // Returns jump comparison

        var saturnJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnSaturn.toFixed(2)} cm on Saturn.`

         $('.saturn__jump-comparison').html(saturnJumpComparison);

        // *** URANUS ** //

        // Returns temp comparison 
        var uranusWeatherComparison = `${location} is currently ${compareTempToUranus}&deg;C hotter than the avg temperature on Uranus.`

        $('.uranus__weather-comparison').html(uranusWeatherComparison);

        // Returns weight comparison
         var uranusWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnUranus.toFixed(0)} pounds on Uranus.`

        $('.uranus__weight-comparison').html(uranusWeightComparison);

        // Returns jump comparison

        var uranusJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnUranus.toFixed(2)} cm on Uranus.`

         $('.uranus__jump-comparison').html(uranusJumpComparison);

        // *** Neptune ** //

        // Returns temp comparison 
        var neptuneWeatherComparison = `${location} is currently ${compareTempToNeptune}&deg;C hotter than the avg temperature on Neptune.`

        $('.neptune__weather-comparison').html(neptuneWeatherComparison);

        // Returns weight comparison
         var neptuneWeightComparison = `On Earth you weigh ${userWeight} pounds, that means you would weigh approximately ${weightOnNeptune.toFixed(0)} pounds on Neptune.`

        $('.neptune__weight-comparison').html(neptuneWeightComparison);

        // Returns jump comparison

        var neptuneJumpComparison = `Based on an average jump height of 35.35 cm, you could jump ${jumpOnNeptune.toFixed(2)} cm on Neptune.`

         $('.neptune__jump-comparison').html(neptuneJumpComparison);
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
        marsDate = data.terrestrial_date;
        marsWeatherType = data.atmo_opacity;
        marsMinTemp = data.min_temp;
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
                $('.user-introduction .planet__user-response, .mars__apiReturn').toggleClass("hidden");
                weatherApp.getWeather(city,country);
                console.log(name, city, country, userWeight);
            });
        };
    $(function() {
        weatherApp.init();
        particlesJS.load('particles-js', './js/particlesjs.json', function() {
    });
        });
