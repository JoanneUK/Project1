
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
debugger;
    console.log(response);
  }).catch(error => {
      debugger;
  });



 
function test(x,y)
let result = x + y;
console.log(result);
return result;
//i didnt change anything

