$( function() {
    $( "#datepicker" ).datepicker();
  } );


//API Calls

//OMBD
var keyword = "Halloween"
var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
var queryURL = "https://api.themoviedb.org/3/search/keyword?api_key=" + apiKey + "&query=" + keyword
var queryURL3 = "https://api.themoviedb.org/3/movie/tt0137523?api_key=" + apiKey + "&language=en-US"

$.ajax({
    url: queryURL3,
    method: "GET"
  }).then(function(response) {
      
    console.log(response)

  })

//Calendarific
var apiKey2 = "&api_key=7fcc61e9cff9ca714271b1579b4f3526db843694"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=2020"


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
    console.log(response)

  })

  //End