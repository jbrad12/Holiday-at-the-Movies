/*
Pseudo Code

API USAGE
User chooses specific date,rating choice, genre, or keywork
  selected date is then passed through Calendarific 

Genre, rating, and keyword will be using the movie api key
  this will pull 5 random movies and one will be in the featured spot


USER'S INTERACTION
User will input Genre, rating, and keyword along with the desired date 

Once everything is selected, then the application will generate top 5 movies along the bottom on screen 
  One featured movie will be listed beside the user's selections


JS FUNCTIONS
  JQuery function used to provide a calendar

  AJAX calls 




Things to do:
  


*/


$( function() {
    $( "#datepicker" ).datepicker();
  } );



//API Calls

//The Movie DB
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