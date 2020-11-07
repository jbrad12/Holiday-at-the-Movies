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
        console.log("movie:", response)
    })
}