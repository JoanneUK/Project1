
// https://cors-anywhere.herokuapp.com
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

    console.log(response);
  });

  $("#btnfat").on("click", function () {
    console.log("was clicked");
    
    let userInput = $("#search").val();
    console.log(userInput);
let queryURL = ("https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=5ccbba4d&app_key=86e988946239fb88b47b787854b2e6ae&ingr=one%20" + userInput)
$.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
      let totFat = Math.floor(response.totalNutrients.FAT.quantity);
      let fatUnit = response.totalNutrients.FAT.unit;
        console.log(totFat + fatUnit);
        
    })
})



 


