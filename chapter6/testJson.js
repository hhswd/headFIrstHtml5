function Movie(title, genre, rating, showtimes){
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.showtimes = showtimes;
}

var planMovie = new Movie("Plan 9 from Outer space", "Cult Classic", 2, ["3:00pm", "7:00pm", "11:00pm"]);
var jsonString = JSON.stringify(planMovie);
//alert(jsonString);
var jsonMovieObject = JSON.parse(jsonString);
alert("Json movie showtime is " + jsonMovieObject.showtimes);
