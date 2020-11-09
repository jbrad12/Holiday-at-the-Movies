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

$(document).ready(function() {

//Date picker
$( function() {
    $( "#datepicker" ).datepicker({ dateFormat: "mm/dd/yy" });
    console.log($("#datepicker").datepicker().val())
  } );


//DropDown Menus
$('#primary-menu').on(
  'show.zf.dropdownmenu', function() {
    var dropdown = $(this).find('.is-dropdown-submenu');
    dropdown.css('display', 'none');
    dropdown.fadeIn('slow');
});
$('#primary-menu').on(
  'hide.zf.dropdownmenu', function() {
    var dropdown = $(this).find('.is-dropdown-submenu');
    dropdown.css('display', 'inherit');
    dropdown.fadeOut('slow');
});



//Objects

var genreID = {
  "Action": "28",
  "Adventure":"12",
  "Animation":"16",
  "Comedy":"35",
  "Crime":"80",
  "Documentary":"99",
  "Drama":"18",
  "Family":"10751",
  "Fantasy":"14",
  "History":"36",
  "Horror":"27",
  "Music":"10402",
  "Mystery":"9648",
  "Romance":"10749",
  "Science Fiction":"878",
  "TV Movie":"10770",
  "Thriller":"53",
  "War":"10752",
  "Western":"37"
  }


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
  "Thanksgiving Day": "4543",
  "Chanukah/Hanukkah (first day)": "209321",
  "Christmas Day": "207317",
  "New Year's Eve": "613",
  "Friday the 13th": "163652"
}



//API Calls


//The Movie DB
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

      
        //Shows Elements
        $("#movie-choices, #movie-main, #div1").removeClass("hide")

    


        
        // Rating Start
        // for (var i = 0; i < 6; i++) {

        
          
        //     var id = response.results[i].id
        //     console.log(id + " this is the id")
        //     var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
        //     var queryURL4 = "https://api.themoviedb.org/3/movie/" + id + "/release_dates?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc"
        //     $.ajax({
        //     url: queryURL4,
        //     method: "GET"
        //     }).then(function (output) {

        //       for (var i = 0; i < 6; i++) {

        //       console.log("release dates:", output)
        //       console.log(output.results[0].release_dates[0].certification)
        //       $("#rating-" + [i]).text(output.results[0].release_dates[0].certification)

        //       }
        //     })

        //   }
        //Ratings End

        for (var i = 0; i < 6; i++) {
            $("#title-" + [i]).text(response.results[i].title)
            $("#poster-" + [i]).attr("src", "http://image.tmdb.org/t/p/w185/" + response.results[i].poster_path )
            $("#plot-" + [i]).text(response.results[i].overview)

           
        }

        
            

       
      
    
    })
  // })
}


//Calendarific
$("#search-btn").on("click", function(event){
  event.preventDefault();


//Calender input
  var date1 = $("#datepicker").datepicker().val()

  if (date1 !== ""){
  var month = date1.substr(0, 2);
  var day = date1.substr(3, 2);
  var year = date1.substr(6, 10);

  console.log(month)
if (month == 11) {var index = 466}
if (month == 10) {var index = 359}
if (month == 12 && day < 26) {var index = 510}
if (month == 12 && day > 25) {var index = 0}
if (month == 2 && day < 3) {var index = 39}
if (month == 2 && day > 2) {var index = 39}
if (month == 3) {var index = 72}
if (month == 4) {var index = 106}



var apiKey2 = "&api_key=b9ec0bca17bd0a622c5f4df29dc9cfa0894bc535"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=" + year.toString()


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
  var holidays = response.response.holidays[index].name
  getMovie(holidays)

  })
//End Calendar Input


//Holiday Dropdown Input
  } else {console.log($("#holidayDropdown option:selected").text())
      var holidays = $("#holidayDropdown option:selected").text();
      getMovie(holidays)
  }
//End Holiday Dropdown Input
})
// End Calendarific 

})

 
