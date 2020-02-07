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

//makelistItem('bar');

function doSearch(term, loc) {
  let queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${loc.lat}&longitude=${loc.lon}`;
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(function (response) {

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

$("#findRestaurant").on("click", function () {
  console.log("was clicked");

  let term = $("#search").val();
  //   let loc = $("#location").val();

  //   doSearch(term,loc)
  doSearch(term, { lat: coords.latitude, lon: coords.longitude })
})

