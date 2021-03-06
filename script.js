let apiKey = "buYPH6YQCgvFYf4-xQrpKutnoUroVMOrUiAg_W2ORu34RqyAEAFen-T8tbUnV-sRCsbUc6RliSPlQ7sg_unY67RcLG5Bw2QwmjKrFP2uLZdVe_5j-TmcmHZ9JBE7XnYx"
let coords;
navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
  //got user location saved in coords
  console.log(position)
  coords = position.coords
}

function makelistItem(text) {
  let li = $("<li>");
  li.text(text);
  let ul = $("#restaurant");
  ul.append(li);
}

function doSearch(term, loc) {
  let queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${loc.lat}&longitude=${loc.lon}`;
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(function (response) {

    $("#restoCard").show()

    console.log(response);

    //makelistItem(response.businesses[0].name);

    for (i = 0; i < 5; i++) {
      let text = response.businesses[i].name;
      makelistItem(text);



    }


  }).catch(error => {
    console.log(error)
    debugger;
  });

}
$(document).ready(function () {

  $("#findRestaurant").on("click", function () {
    console.log("click");

    let term = $("#search").val();

    doSearch(term, { lat: coords.latitude, lon: coords.longitude });

  });

})



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
    let fatData = `
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${userInput}'s Fat</span>
            <p>${totFat + fatUnit}</p>
          </div>
        </div>
      </div>
    </div>`;
    $("#dataarea").append(fatData);
  })


})


let term = $("#search").val();
//   let loc = $("#location").val();

$("#btnshya").on("click", function (response) {
  console.log("was clicked");
  let userInput = $("#search").val();
  console.log(userInput);
  let queryURL = ("https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=5ccbba4d&app_key=86e988946239fb88b47b787854b2e6ae&ingr=one%20" + userInput)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    let sugarQuantity = Math.floor(response.totalNutrients.SUGAR.quantity);
    console.log(response.totalNutrients.SUGAR.quantity);
    let sugarUnit = response.totalNutrients.SUGAR.unit;
    console.log(response.totalNutrients.SUGAR.unit);
    let totalSugar = sugarQuantity + sugarUnit;
    console.log(totalSugar);
    let cardData = `
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${userInput}'s Sugar</span>
            <p>${totalSugar}</p>
          </div>
        </div>
      </div>
    </div>`;
    $("#dataarea").append(cardData);
  })
});

$("#btnMax").on("click", function () {
  console.log("was clicked");
  let userInput = $("#search").val();
  console.log(userInput);
  let queryURL = ("https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=5ccbba4d&app_key=86e988946239fb88b47b787854b2e6ae&ingr=one%20" + userInput)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response.calories);
    let calCount = ("Total Calories: ") + response.calories;
    console.log(calCount);
    let cardData = `
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">One ${userInput}</span>
            <p>${calCount}</p>
          </div>
        </div>
      </div>
    </div>`;
    $("#dataarea").prepend(cardData);
  })
})




$("#btnAll").on("click", function () {
  console.log("all clicked");
  let userInput = $("#search").val();
  console.log(userInput);
  let queryURL = ("https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=5ccbba4d&app_key=86e988946239fb88b47b787854b2e6ae&ingr=one%20" + userInput)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    let totFat = Math.floor(response.totalNutrients.FAT.quantity);
    let fatUnit = response.totalNutrients.FAT.unit;
    let sugarQuantity = Math.floor(response.totalNutrients.SUGAR.quantity);
    let sugarUnit = response.totalNutrients.SUGAR.unit;
    let totalSugar = sugarQuantity + sugarUnit;
    let totalCalories = response.calories;

    let cardData = `
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">One ${userInput}</span>
          <p> Fat: ${totFat}${fatUnit}</p>
          <p> Sugar: ${totalSugar}</p>
          <p> Calories: ${totalCalories} </p>
        </div>
      </div>
    </div>
  </div>`;
    $("#dataarea").append(cardData);
  })


  })
  $("#btnClear").on("click", function () {
    console.log("click");
    $("#dataarea").empty();
    $("#restoCard").empty();


})