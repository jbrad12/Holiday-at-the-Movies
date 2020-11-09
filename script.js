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



//API Calls


//The Movie DB
function getMovie(holidays) {
  console.log("holidays:", holidays)
  // var holiday = $(this).attr("value")
  console.log("holidayID[holidays]:", holidayID[holidays])
  
  var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
  var queryURL = "https://api.themoviedb.org/3/keyword/" + holidayID[holidays] + "/movies?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc"
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
          })


      //   for (var i = 0; i <= 6; i++) {
      //   var movieTitle = response.results[i].title
      //   var queryURLRating = "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=b09a14fe";

      //   // Creates AJAX call for the specific movie button being clicked
      //   $.ajax({
      //     url: queryURLRating,
      //     method: "GET"
      //   }).then(function(response) {
      //     console.log("omdb:", response)
      //     for (var i = 0; i < 6; i++) {
      //     var rating = response.Rated[i]
      //     // $("#rating" + i).text(rating)
      //   }
      // })
      // }
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

           
        }

        
            

       
      
    
    })
  // })
}


//Calendarific
$("#search-btn").on("click", function(event){
  event.preventDefault();


//Calender input
  var date1 = $("#datepicker").datepicker().val()
    console.log("date1:", date1)

  if (date1 !== ""){
  var month = date1.substr(0, 2);
  var day = date1.substr(3, 2);
  var year = date1.substr(6, 10);

  console.log("month:", month)
  console.log("year:", year)
if (month == 11) {var index = 466}
if (month == 10) {var index = 359}
if (month == 12 && day < 26) {var index = 510}
if (month == 12 && day > 25) {var index = 0}
if (month == 2 && day < 3) {var index = 39}
if (month == 2 && day > 2) {var index = 39}
if (month == 3) {var index = 72}
if (month == 4) {var index = 106}
// if (month == 8 && day == 13 && year == 2021) {var index = }


var apiKey2 = "&api_key=b9ec0bca17bd0a622c5f4df29dc9cfa0894bc535"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=" + year.toString()


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
  var holidays = response.response.holidays[index].name
  console.log("holidays response:", response.response.holidays[index])
  console.log("holidays:",response)
  getMovie(holidays)

  })
//End Calendar Input


//Holiday Dropdown Input
  } else {console.log("holiday dropdown:", $("#holidayDropdown option:selected").text())
      var holidays = $("#holidayDropdown option:selected").text();
      getMovie(holidays)
  }
//End Holiday Dropdown Input
})
// End Calendarific 

})

 
