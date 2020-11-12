//Easter Egg
if (response.results[0].title == "Groundhog Day") {
    for (var i = 0; i < 6; i++) {
    $("#title" + [i]).text(response.results[0].title)
    $("#poster" + [i]).attr("src", "http://image.tmdb.org/t/p/w185/" + response.results[0].poster_path)
    $("#poster" + [i]).attr("alt", response.results[0].title)
    $("#plot" + [i]).text(response.results[0].overview)
    }
  }

  //test
  var option = $("<option>")
  option.attr("selected", "true")
  option.attr("disabled", "true")
  option.text("Select a Holiday")

  $("#holidayDropdown").append(option)

  //End Test