var movies = [];

$("button.search").on("click", function() {
  var movieTitle = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + movieTitle + "", function(data) {
    $("h1.title").text(data["Title"] + " (" + data["Rated"] + ")");
    $("h4.year").text(data["Year"]);
    $("img.poster").attr("src",data["Poster"]);
    $("p.plot").text(data["Plot"]);

    var liThatIMade = $("<li>" + movieTitle + "</li>");
    $("ul.search-history").append(liThatIMade);

    var stashedMovie = {
      title: data["Title"],
      score: data["Ratings"][1]["Value"]
    }

    movies.push(stashedMovie);
  });
})

$("ul.search-history").on("click",function(event) {
  var movieTitle = $(event.target).text();
  $.getJSON("http://omdbapi.com/?t=" + movieTitle + "", function(data) {
    $("h1.title").text(data["Title"] + " (" + data["Rated"] + ")");
    $("h4.year").text(data["Year"]);
    $("img.poster").attr("src",data["Poster"]);
    $("p.plot").text(data["Plot"]);
  });
})

$("button.filter").on("click", function(aSingleMovie) {
  $("ul.search-history").children().remove();
  // var index = 0;

  // while (index < movies.length) {
  //   var scoreAsInt = parseInt(movies[index]["score"]);
  //   if (scoreAsInt > 50) {
  //     var li = $("<li>" + movies[index]["title"] + "</li>");
  //     $("ul.search-history").append(li);
  //   }
  // index = index + 1;
  // }
  movies.forEach(function(aSingleMovie) {
    var scoreAsInt = parseInt(aSingleMovie["score"])
    if ( scoreAsInt > 50 ) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    }
  })
})

// $("button.show-all").on("click", function() {
//   $("ul.search-history").children().remove();
//   // the movie data is still in the movies array
//   // somehow have to call it back in to list form
 
//   var index = 0
//   while (index < movies.length) {
//     var movieComeBack = movies[index]["title"];
//     var li = $("<li>" + movieComeBack + "</li>");
//     $("ul.search-history").append(li);
//     index = index + 1;
//   }
// })

$("button.show-all").on("click", function() {
  $("ul.search-history").children().remove();

  movies.forEach(function(aSingleMovie) {
    var li = $("<li>" + aSingleMovie["title"] + "</li>");
    $("ul.search-history").append(li);
  })
})



// get rid of all bad movies
//   * search through the array
//   * for each movie that meets criteria
//   * insert it into the DOM

// if (rottenTomatoesScore < 50) {
//    removeli that corresponds to that score

// var movies = [
//   {
//    title: "Gigli",
//    score: 6 
//   },
//   {
//     title: "Finding Nemo",
//     score: 95
//   },
//   {
//     title: "Titanic",
//     score: 97
//   }
// ]


// $("button").on("click", function() {
//   var movieTitle = $("input").val();
//   var liThatIMade = $("<li>movieTitle</li>");
//   $("ul.search-history").append(liThatIMade); 
// })



// $.getJSON("http://omdbapi.com/?t=" + movieTitle + "", function(data) {
//   console.log(data);
// });