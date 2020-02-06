let apiKey = "buYPH6YQCgvFYf4-xQrpKutnoUroVMOrUiAg_W2ORu34RqyAEAFen-T8tbUnV-sRCsbUc6RliSPlQ7sg_unY67RcLG5Bw2QwmjKrFP2uLZdVe_5j-TmcmHZ9JBE7XnYx"
let term = 'chipotle';
let loc = 'Los Angeles';
let queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${loc}`;
$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
  }).then(function(response) {
debugger;
    console.log(response);
  }).catch(error => {
      debugger;
  });


function doSearch(){
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
  }).then(function(response) {
debugger;
    console.log(response);
  }).catch(error => {
      debugger;
  });



}



// Retrieved data will be dumped here
// This is our API key
$(".btn").on("click", function () {
  console.log("was clicked");
  
  term = $("#search").val();
  doSearch()
  console.log(userInput);
let queryURL = ("https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=5ccbba4d&app_key=86e988946239fb88b47b787854b2e6ae&ingr=one%20" + userInput)
$.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      console.log(response);
  })
})
// Here we are building the URL we need to query the database
// Here we run our AJAX call to the OpenWeatherMap API
// We store all of the retrieved data inside of an object called "response"
// Log the queryURL
// Log the resulting object
// Transfer content to HTML
let restaurant = "findRestaurant"
$(".findRestaurant").html("<h1>" + response.name + " Weather Details</h1>");
// Converts the temp to Kelvin with the below formula
// Log the data in the console as well

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Bujumbura Data</title>
</head>

<body>
  <!-- Retrieved data will be dumped here -->
  <div class="city"></div>
  <div class="wind"></div>
  <div class="humidity"></div>
  <div class="temp"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    // This is our API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Converts the temp to Kelvin with the below formula
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".tempF").text("Temperature (Kelvin) " + tempF);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
  </script>
</body>

</html>
