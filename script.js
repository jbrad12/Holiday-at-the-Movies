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
var holidayID = {
  "New Year's Day": "5632",
  "Martin Luther King Jr. Day": "5835",
  "First Day of Black History Month": "190675",
  "Groundhog Day": "220046",
  "Valentine's Day": "160404",
  "St. Patrick's Day": "209352",
  "Passover (first day)": "194195",
  "Easter Sunday": "9921",
  "Mother's Day": "173983",
  "Father's Day": "195439",
  "Independence Day": "235503",
  "Rosh Hashana": "209053",
  "Indigenous People's Day": "215162",
  "Halloween": "3335",
  "Thanksgiving": "4543",
  "Chanukah/Hanukkah (first day)": "209321",
  "Christmas Eve": "207317",
  "New Year's Eve": "613",
  "Friday the 13th": "163652"
}

function getMovie(holidays) {
  console.log(holidays)
  // var holiday = $(this).attr("value")
  console.log(holidayID[holidays])
  var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
  var queryURL = "https://api.themoviedb.org/3/keyword/" + holidayID[holidays] + "/movies?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc"
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      console.log(response)
  })
}
//Calendarific

var month = 10
if (month === 10) {
var index = 359
}

var apiKey2 = "&api_key=ec6603e27ebba0d90a5d6bf7ea4694dbcfc0ca37"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=2021"


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
  var holidays = response.response.holidays[index].name
  getMovie(holidays)

  })

  //End