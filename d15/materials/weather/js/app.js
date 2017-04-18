

// 1. On click of "Check"
// 2. Grab value of input
// 3. Call API
// 4. Display temperature


$("button").on("click",function() {
  var targetCity = $("input").val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + targetCity + "&units=imperial&appid=8de799b913d83e3920086b96addb5d89", function(data) {
    console.log(data);
    $("span.temperature").text(data["main"]["temp"]);
    $("img.icon").attr("src", data["weather"][0]["icon"]);
  })
});