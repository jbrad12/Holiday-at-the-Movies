(function() {
    var calendar = [
        ["January", 31],
        ["February", 28],
        ["March", 31],
        ["April", 30],
        ["May", 31],
        ["June", 30],
        ["July", 31],
        ["August", 31],
        ["September", 30],
        ["October", 31],
        ["November", 30],
        ["December", 31]
        ],
        cont = document.getElementById('calendar-container');
    // setup
    var sel_month = document.createElement('select'),
        sel_day = document.createElement('select');

    function createOption(txt, val) {
        var option = document.createElement('option');
        option.value = val;
        option.appendChild(document.createTextNode(txt));
        return option;
    }

    function clearChildren(ele) {
        while (ele.hasChildNodes()) {
            ele.removeChild(ele.lastChild);
        }
    }

    function recalculateDays() {
        var month_index = sel_month.value,
            df = document.createDocumentFragment();
        for (var i = 0, l = calendar[month_index][1]; i < l; i++) {
            df.appendChild(createOption(i + 1, i));
        }
        clearChildren(sel_day);
        sel_day.appendChild(df);
    }

    function generateMonths() {
        var df = document.createDocumentFragment();
        calendar.forEach(function(info, i) {
            df.appendChild(createOption(info[0], i));
        });
        clearChildren(sel_month);
        sel_month.appendChild(df);
    }

    sel_month.onchange = recalculateDays;
    
    generateMonths();
    recalculateDays();

    cont.appendChild(sel_month);
    cont.appendChild(sel_day);
}());


//API Calls

//OMBD
var parameter = "A christmas story"
var apiKey = "&apikey=578b0408"
var queryURL = "http://www.omdbapi.com/?t=" + parameter + apiKey 

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      
    console.log(response)

  })

//Calendarific
var apiKey2 = "&api_key=7fcc61e9cff9ca714271b1579b4f3526db843694"
var queryURL2 = "https://calendarific.com/api/v2/holidays?" + apiKey2 + "&country=US&year=2020"


  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
      
    console.log(response)

  })

  //End