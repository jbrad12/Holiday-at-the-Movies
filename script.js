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

var genreIDSet = {
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

var genreIDGet = {
  "28": "Action",
  "12": "Adventure",
  "16": "Animation",
  "35": "Comedy",
  "80": "Crime",
  "99": "Documentary",
  "18": "Drama",
  "10751": "Family",
  "14": "Fantasy",
  "36": "History",
  "27": "Horror",
  "10402": "Music",
  "9648": "Mystery",
  "10749": "Romance",
  "878": "Science Fiction",
  "10770": "TV Movie",
  "53": "Thriller",
  "10752": "War",
  "37": "Western"
}


var holidayID = {
  "New Year's Day": "5632",
  //late january
  "Martin Luther King Jr. Day": "5835",
  //february
  "First Day of Black History Month": "190675",
  //february 2
  "Groundhog Day": "220046",
  "Valentine's Day": "160404",
  //march 17
  "St. Patrick's Day": "209352",
  //march 24-april 4
  "Passover (first day)": "194195",
  //april 4
  "Easter Sunday": "9921",
  //may 9
  "Mother's Day": "173983",
  //june 20
  "Father's Day": "195439",
  "Independence Day": "235503",
  //september 6-8
  "Rosh Hashana": "209053",
  //october 11
  "Indigenous People's Day": "215162",
  "Halloween": "3335",
  //november 26
  "Thanksgiving Day": "4543",
  //december 10-18
  "Chanukah/Hanukkah (first day)": "209321",
  "Christmas Day": "207317",
  "New Year's Eve": "613",
  "Friday the 13th": "163652"
}

var convertHolidayName = {
  "New Year's Day": "New Year's Day",
  //late january
  "Martin Luther King Jr. Day": "Martin Luther King Jr. Day",
  //february
  "First Day of Black History Month": "Black History Month",
  //february 2
  "Groundhog Day": "Groundhog Day",
  "Valentine's Day": "Valentine's Day",
  //march 17
  "St. Patrick's Day": "St. Patrick's Day",
  //march 24-april 4
  "Passover (first day)": "Passover",
  //april 4
  "Easter Sunday": "Easter",
  //may 9
  "Mother's Day": "Mother's Day",
  //june 20
  "Father's Day": "Father's Day",
  "Independence Day": "4th of July",
  //september 6-8
  "Rosh Hashana": "Rosh Hashana",
  //october 11
  "Indigenous People's Day": "Indigenous People's Day",
  "Halloween": "Halloween",
  //november 26
  "Thanksgiving Day": "Thanksgiving",
  //december 10-18
  "Chanukah/Hanukkah (first day)": "Hanukkah",
  "Christmas Day": "Christmas",
  "New Year's Eve": "New Year's Eve",
  "Friday the 13th": "Friday the 13th"
}

var convertBackHolidayName = {
  "New Year's Day": "New Year's Day",
  //late january
  "Martin Luther King Jr. Day": "Martin Luther King Jr. Day",
  //february
  "Black History Month": "First Day of Black History Month",
  //february 2
  "Groundhog Day": "Groundhog Day",
  "Valentine's Day": "Valentine's Day",
  //march 17
  "St. Patrick's Day": "St. Patrick's Day",
  //march 24-april 4
  "Passover": "Passover (first day)",
  //april 4
  "Easter": "Easter Sunday",
  //may 9
  "Mother's Day": "Mother's Day",
  //june 20
  "Father's Day": "Father's Day",
  "4th of July": "Independence Day",
  //september 6-8
  "Rosh Hashana": "Rosh Hashana",
  //october 11
  "Indigenous People's Day": "Indigenous People's Day",
  "Halloween": "Halloween",
  //november 26
  "Thanksgiving": "Thanksgiving Day",
  //december 10-18
  "Hanukkah": "Chanukah/Hanukkah (first day)",
  "Christmas": "Christmas Day",
  "New Year's Eve": "New Year's Eve",
  "Friday the 13th": "Friday the 13th"
}

//API Calls


//The Movie DB
function getMovie(holidays) {
  console.log("holidays:", holidays)
  // var holiday = $(this).attr("value")
  console.log("holidayID[holidays]:", holidayID[holidays])
  var convertBackHolName = convertBackHolidayName[holidays]
  console.log("convert back:", convertBackHolName)
  
  var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
  var queryURL = "https://api.themoviedb.org/3/keyword/" + holidayID[convertBackHolName] + "/movies?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc"
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      console.log("response:", response)

      
        //Shows Elements
        $("#movie-choices, #movie-main, #div1").removeClass("hide")

    
      // Rating Start
          var movieTitle0 = response.results[0].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle0 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating0").text("Rated: " + rating)
            console.log(response)
          })

          var movieTitle1 = response.results[1].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle1 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating1").text("Rated: " + rating)
            console.log("rating1:", response)
          })

          var movieTitle2 = response.results[2].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle2 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating2").text("Rated: " + rating)
          })

          var movieTitle3 = response.results[3].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle3 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating3").text("Rated: " + rating)
          })

          var movieTitle4 = response.results[4].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle4 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating4").text("Rated: " + rating)
            console.log("rating4:",response)
          })

          var movieTitle5 = response.results[5].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle5 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating5").text("Rated: " + rating)
            console.log("response5:",response)
          })
        //Ratings End


        //Print title, poster, plot, genre
        for (var i = 0; i < 6; i++) {
            $("#title" + [i]).text(response.results[i].title)
            $("#poster" + [i]).attr("src", "http://image.tmdb.org/t/p/w185/" + response.results[i].poster_path )
            $("#plot" + [i]).text(response.results[i].overview)
            var getGenre0 = response.results[i].genre_ids[0]
            var convertGenre0 = genreIDGet[getGenre0]
            var getGenre1 = response.results[i].genre_ids[1]
            if (getGenre1 === undefined) {convertGenre1=""}
              else (convertGenre1 = ", " + genreIDGet[getGenre1])
            var getGenre2 = response.results[i].genre_ids[2]
            if (getGenre2 === undefined) {convertGenre2=""}
              else (convertGenre2 = ", " + genreIDGet[getGenre2])
            var getGenre3 = response.results[i].genre_ids[3]
            if (getGenre3 === undefined) {convertGenre3=""}
              else (convertGenre3 = ", " + genreIDGet[getGenre3])
            $("#genre" + [i]).text("Genre: " + convertGenre0 + convertGenre1 + convertGenre2 + convertGenre3)
          //end
           
        }

        
            

       
      
    
    })
  // })
}

function clearResults () {
  $("#holidayDropdown").empty()
}

//Calendarific
$("#date-search-btn").on("click", function(event){
  clearResults()
  event.preventDefault();
  $(".search-Parameters").removeClass("hide")


//Calender input
  var date1 = $("#datepicker").datepicker().val()
    console.log("date1:", date1)

  if (date1 !== ""){
  var month = date1.substr(0, 2);
  var day = date1.substr(3, 2);
  var year = date1.substr(6, 10);

  console.log("month:", month)
  console.log("year:", year)
  if (month == 1 && year == 2021) {var index = 0; var index2 = 435; var index3 = 8}
  if (month == 2 && year == 2021) {var index = 24; var index2 = 26; var index3 = 39}
  if (month == 3 && year == 2021) {var index = 72; var index2 = 91; var index3 = 106}
  if (month == 4 && year == 2021) {var index = 106; var index2 = 91; var index3 = 169}
  if (month == 5 && year == 2021) {var index = 169}
  if (month == 6 && year == 2021)
  if (month == 7 && year == 2021)
  if (month == 8 && year == 2021)
  if (month == 9 && year == 2021)
  if (month == 10 && year == 2020) {var index = 438; var index2 = 466}
  if (month == 11) {var index = 466; var index2 = 438; var index3 = 510}
  if (month == 12) {var index = 466; var index2 = 510; var index3 = 0}

// if (month == 8 && day == 13 && year == 2021) {var index = }


var apiKey2 = "&api_key=b9ec0bca17bd0a622c5f4df29dc9cfa0894bc535"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=" + year.toString()


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
  var holidays = response.response.holidays[index].name
  var holidays2 = response.response.holidays[index2].name
  var holidays3 = response.response.holidays[index3].name
  // console.log("holidays response:", response.response.holidays[index])
  // console.log("holidays:",response)
  var convertHolName = convertHolidayName[holidays]
  var convertHolName2 = convertHolidayName[holidays2]
  var convertHolName3 = convertHolidayName[holidays3]
  // console.log(convertHolName)
  
  holidayDiv = $("<option>")
  $(holidayDiv).addClass("clear")
  holidayDiv2 = $("<option>")
  $(holidayDiv2).addClass("clear")
  holidayDiv3 = $("<option>")
  $(holidayDiv3).addClass("clear")
  holidayDiv.text(convertHolName)
  holidayDiv2.text(convertHolName2)
  holidayDiv3.text(convertHolName3)
  $("#holidayDropdown").append(holidayDiv, holidayDiv2, holidayDiv3)

  })
//End Calendar Input

// ​//Holiday Dropdown Input
$("#search-btn").on("click", function(event){
    event.preventDefault()
    console.log("holiday dropdown:", $("#holidayDropdown option:selected").text())
      var holidays = $("#holidayDropdown option:selected").text();
      getMovie(holidays)
  })
}
//End Holiday Dropdown Input
})
// End Calendarific 

})

 
