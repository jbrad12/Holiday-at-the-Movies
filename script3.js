
//Make sure to close conditionals lines 30 to 33
//Basically this uses a set holiday as an exclusion point in this case 103 Maryland Day
//I only did this for October 2020 so lines 36 and 75 are the changes 


//Empty genre on click of holiday dropdown

$("#holidayDropdown").on("click", function(){
    $("#genreDropdown1").val("")
  })



  //CSS Change Cursor
  select {
      cursor: pointer;
  }
  



//Calendarific
$("#date-search-btn").on("click", function(event){
    clearResults()
    event.preventDefault();
    $(".search-Parameters").removeClass("hide")
    $(".line").removeClass("hide")
  
  
  //Calender input
    var date1 = $("#datepicker").datepicker().val()
      console.log("date1:", date1)
  
    if (date1 !== ""){
    var month = date1.substr(0, 2);
    var day = date1.substr(3, 2);
    var year = date1.substr(6, 10);
  
    console.log("month:", month)
    console.log("year:", year)
    //exclusion index values 2020: 103   2021: 87
    if (month == 1 && year == 2021) {var index = 0; var index2 = 435; var index3 = 8}
    if (month == 2 && year == 2021) {var index = 24; var index2 = 26; var index3 = 39}
    if (month == 3 && year == 2021) {var index = 72; var index2 = 91; var index3 = 106}
    if (month == 4 && year == 2021) {var index = 106; var index2 = 91; var index3 = 169}
    if (month == 5 && year == 2021) {var index = 169}
    if (month == 6 && year == 2021) {}
    if (month == 7 && year == 2021) {}
    if (month == 8 && year == 2021) {}
    if (month == 9 && year == 2021) {}
    if (month == 10 && year == 2020) {var index = 438; var index2 = 466; var index3 = 103}
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


    $("#holidayDropdown").append(holidayDiv)
    
    if (holidays2 !== "Maryland Day") {
    $("#holidayDropdown").append(holidayDiv2)
    }
    if (holidays3 !== "Maryland Day") {
    $("#holidayDropdown").append(holidayDiv3)
    }
    console.log(response)
  
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