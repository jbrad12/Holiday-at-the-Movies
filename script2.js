
//Add a calendar btn
//Delete options on html


//Calendarific
$("#calendar-btn").on("click", function(event){
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
    
    
    holidayDiv = $("<option>")
    holidayDiv.text(holidays)
    $("#holidayDropdown").append(holidayDiv)
  
    })
  //End Calendar Input
  

  //Holiday Dropdown Input
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