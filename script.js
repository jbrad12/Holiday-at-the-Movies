$( function() {
    $( "#datepicker" ).datepicker();
  } );


//API Calls

//OMBD
var parameter = "A christmas story"
var apiKey = "&apikey=578b0408"
var queryURL = "http://www.omdbapi.com/?t=" + parameter + apiKey 

$.ajax({
    url: queryURL,
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