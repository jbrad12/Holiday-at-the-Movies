/*

User chooses specific date, which is passed through the API Calendarific.
Based on the date chosen, nearby holidays are printed to the holiday dropdown menu.

The user then chooses a holiday and 1 or 2 genres they'd like to narrow it down to.

These new parameters are passed through "The Movie Database" API to find the most popular movies based on the holiday and genres.

The movies then print to the screen, with the current most popular movie in the hero spot, and 5 more options down below

*/

$(document).ready(function() {

 
  //Prints "PLOT" to page
  $("#plot").text("Plot:")

  // search array for local storage
  var searchArray = []

  //Date picker
$( function() {
  $( "#datepicker" ).datepicker({ dateFormat: "mm/dd/yy" });
});

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

  //Calendarific
$("#date-search-btn").on("click", function(event){
  $("#holidayDropdown").empty()
  event.preventDefault();
  $(".search-Parameters").removeClass("hide")
  $(".line").removeClass("hide")

  var option = $("<option>")
  option.attr("selected", "true")
  option.attr("disabled", "true")
  option.text("Select a Holiday")

  $("#holidayDropdown").append(option)

  //End Test


//Calender input
  var date1 = $("#datepicker").datepicker().val()

  if (date1 !== ""){
  var month = date1.substr(0, 2);
  var day = date1.substr(3, 2);
  var year = date1.substr(6, 10);

  //Exclusion indexes 2020: 103 2021: 87

  // return holidays
  if (month == 1 && year == 2021) {var index = 0; var index2 = 435; var index3 = 8}
  if (month == 2 && day !== 2 && year == 2021) {var index = 24; var index2 = 26; var index3 = 39}
  if (month == 2 && day == 2 && year == 2021) {var index = 26; var index2 = 26; var index3 = 26}
  if (month == 3 && year == 2021) {var index = 72; var index2 = 91; var index3 = 106}
  if (month == 4 && year == 2021) {var index = 106; var index2 = 91; var index3 = 169}
  if (month == 5 && year == 2021) {var index = 169; var index2 = 198; var index3 = 87}
  if (month == 6 && year == 2021) {var index = 225; var index2 = 238; var index3 = 222}
  if (month == 7 && year == 2021) {var index = 238; var index2 = 87; var index3 = 87}
  if (month == 8 && year == 2021) {var index = 262; var index2 = 261; var index3 = 87}
  if (month == 9 && year == 2021) {var index = 278; var index2 = 277; var index3 = 87}
  if (month == 10 && year == 2020) {var index = 438; var index2 = 466; var index3 = 414}
  if (month == 11 && day <= 13 && year == 2020) {var index = 466; var index2 = 451; var index3 = 75}
  if (month == 11 && day > 13 && year == 2020) {var index = 466; var index2 = 451; var index3 = 510}
  if (month == 12 && year == 2020) {var index = 510; var index2 = 496; var index3 = 514}
  if (month == 10 && year == 2021) {var index = 359; var index2 = 385; var index3 = 338}

  //start ajax call to calendarific
var apiKey2 = "&api_key=2c0d78047e25b08e93d37d75d73fcd356034fdc8"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=" + year.toString()


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
  var holidays = response.response.holidays[index].name
  var holidays2 = response.response.holidays[index2].name
  var holidays3 = response.response.holidays[index3].name
  var renameHolName = renameHolidayName[holidays]
  var renameHolName2 = renameHolidayName[holidays2]
  var renameHolName3 = renameHolidayName[holidays3]
  
  holidayDiv = $("<option>")
  $(holidayDiv).addClass("clear")
  holidayDiv2 = $("<option>")
  $(holidayDiv2).addClass("clear")
  holidayDiv3 = $("<option>")
  $(holidayDiv3).addClass("clear")
  holidayDiv.text(renameHolName)
  holidayDiv2.text(renameHolName2)
  holidayDiv3.text(renameHolName3)
  $("#holidayDropdown").append(holidayDiv)
  if (holidays2 !== "Maryland Day") {
  $("#holidayDropdown").append(holidayDiv2)
  }
  if (holidays3 !== "Maryland Day") {
  $("#holidayDropdown").append(holidayDiv3)
  }

  })
//End Calendar Input

// ​//Holiday Dropdown Input
$("#search-btn").on("click", function(event){
    event.preventDefault();
    $("#localStoragePrint").empty()
      var holidays = $("#holidayDropdown option:selected").text();
      getMovie(holidays)
  })
}
//End Holiday Dropdown Input
})
// End Calendarific


//The Movie DB Start
function getMovie(holidays) {
  var genre1 = $("#genreDropdown1").val()
  var genre2 = $("#genreDropdown2").val()
  
  var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
  var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&with_keywords=" + holidayID[holidays] + "&with_genres=" + genreIDSet[genre1] + "| " + genreIDSet[genre2]

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {

      //local storage
      
      var searchItem = {
        storageKey: holidays + ": ",
        titleHero: response.results[0].title
      }
      searchArray.push(searchItem)
      localStorage.setItem("index",JSON.stringify(searchArray))
      
        //Shows Elements
        $("#movie-choices, #movie-main, #div1").removeClass("hide")
        

    
      // Rating Start, uses omdb api
          var movieTitle0 = response.results[0].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle0 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating0").text("Rated: " + rating)
          })
          if (typeof response.results[1] !== "undefined") {
          var movieTitle1 = response.results[1].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle1 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating1").text("Rated: " + rating)
          })
          }

          if (typeof response.results[2] !== "undefined") {
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

          }
          
          if (typeof response.results[3] !== "undefined") {
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
          }

          if (typeof response.results[4] !== "undefined") {
          var movieTitle4 = response.results[4].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle4 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating4").text("Rated: " + rating)
          })

          }

          if (typeof response.results[5] !== "undefined") {
          var movieTitle5 = response.results[5].title
          var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle5 + "&apikey=b09a14fe";
  
          // Creates AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURLRating,
            method: "GET"
          }).then(function(response) {
            var rating = response.Rated
            $("#rating5").text("Rated: " + rating)
          })
        }
        //Ratings End

        //Easter Egg
        if (response.results[0].title == "Groundhog Day") {
          for (var i = 0; i < 6; i++) {
              $("#title" + [i]).text(response.results[0].title)
              $("#poster" + [i]).attr("src", "http://image.tmdb.org/t/p/w185/" + response.results[0].poster_path)
              $("#poster" + [i]).attr("alt", response.results[0].title)
              $("#plot" + [i]).text(response.results[0].overview)
              $("#genre" + [i]) .text("")
              $("#rating" + [i]).text("")
            }
          } else {
        //Print title, poster, plot, genre
        for (var i = 0; i < 6; i++) {
            $("#title" + [i]).text(response.results[i].title)
            $("#poster" + [i]).attr("src", "http://image.tmdb.org/t/p/w185/" + response.results[i].poster_path)
            $("#poster" + i).attr("alt", response.results[i].title)
            $("#plot" + [i]).text(response.results[i].overview)
            // Get genre start
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
                 
          //end print to page
        }
      }
        //End TMDB ajax
    })
}
//Empties holiday dropdown
$("#holidayDropdown").on("change", function(){
  $("#genreDropdown1").val("Any")
})

//Objects for keywords and genres

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
  "Western":"37",
  "Any":"28 | 12 | 16 | 35 | 80 | 99 | 18 | 10751 | 14 | 36 | 27 | 10402 | 9648 | 10749 | 878 | 10770 | 53 | 10752 | 37"
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
  
  var renameHolidayName = {
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
    //may 31
    "Memorial Day": "Memorial Day",
    //june 19
    "Juneteenth": "Juneteenth",
    //june 20
    "Father's Day": "Father's Day",
    "Independence Day": "4th of July",
    "International Youth Day": "Back to School",
    //september 6
    "Labor Day": "Labor Day",
    //september 6-8
    "Rosh Hashana": "Rosh Hashana",
    //october 11
    "Indigenous People's Day": "Indigenous People's Day",
    "Halloween": "Halloween",
    //november 11
    "Veterans Day": "Veterans Day",
    //november 26
    "Thanksgiving Day": "Thanksgiving",
    //december 10-18
    "Chanukah/Hanukkah (first day)": "Hanukkah",
    "Christmas Day": "Christmas",
    "New Year's Eve": "New Year's Eve",
    "Friday the 13th": "Friday the 13th"
    }
    
  var holidayID = {
  "New Year's Day": "5632",
  //late january
  "Martin Luther King Jr. Day": "5835 | 4098",
  //february
  "Black History Month": "190675 | 251436",
  //february 2
  "Groundhog Day": "220046 | 901",
  "Valentine's Day": "160404",
  //march 17
  "St. Patrick's Day": "209352 | 232483 | 10310 | 14985",
  //march 24-april 4
  "Passover": "194195",
  //april 4
  "Easter": "9921 | 256895 | 3571",
  //may 9
  "Mother's Day": "456 | 173983",
  //may 31
  "Memorial Day": "4853 | 159909 | 1956 | 11111 | 2957",
  //june 19
  "Juneteenth": "4098 | 270891",
  //june 20
  "Father's Day": "5905 | 195439",
  //july 4
  "4th of July": "1627 | 235503 | 190024",
  // August
  "Back to School":"10873 | 173642",
  //september 6-8
  "Rosh Hashana": "11704 | 209053 | 257142",
  //september 6
  "Labor Day": "15057 | 33585 | 215274 | 15137 | 164400 | 190638",
  //october 11
  "Indigenous People's Day": "215162 | 10322",
  "Halloween": "3335",
  //november 11
  "Veterans Day": "159909 | 422 | 1543 | 8159 | 163077 | 243769 | 6091",
  //november 26
  "Thanksgiving": "4543 | 5733 | 239919",
  //december 10-18
  "Hanukkah": "209321 | 7328",
  "Christmas": "207317 | 272288",
  "New Year's Eve": "613",
  "Friday the 13th": "163652"
  }

})

