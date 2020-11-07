var apiKey = "e6b65191c727ef61ccf71c872d48dc76"
var queryURL4 = "https://api.themoviedb.org/3/movie/721656/release_dates?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc"
$.ajax({
    url: queryURL4,
    method: "GET"
}).then(function (response) {
    console.log("release dates:", response)
    console.log(response.results[0].release_dates[0].certification)
})