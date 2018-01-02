$(function() { // begin ready() on document load

var topics = ["mario brothers", "legend of zelda", "donkey kong", "dragon's lair", "starfox", "gauntlet", "ghosts n' goblins", "castlevania"];

function display() {
  for (i = 0 ; i < topics.length ; i++) {
    $('section').append('<button value="'+$.trim(topics[i])+'">'+$.trim(topics[i]));
  };
}

display();
var queryURL = "https://api.giphy.com/v1/gifs/search/?api_key=k3AP0b4ishUDqIHJqBK4L4TrpDRDpjw8&limit='20'&q='"+$(this).val();

var movie = "Mr. Nobody";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {

  // Obtain a reference to the tbody element in the DOM
  var tbody = $("tbody");
  // Create and save a reference to new empty table row
  var newRow = $("<tr>");
  // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  var title = $("<td>").text(response.Title);
  var year = $("<td>").text(response.Year);
  var actors = $("<td>").text(response.Actors);

  // Append the td elements to the new table row
  $(newRow).append(title, year, actors);
  // Append the table row to the tbody element
  $(tbody).append(newRow);
});

function addImages() {
  console.log("clicked");
  console.log($(this).val());
  var queryURL = "https://api.giphy.com/v1/gifs/search/?api_key=k3AP0b4ishUDqIHJqBK4L4TrpDRDpjw8&limit='20'&q='"+$(this).val();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    
  })
};

$("#submit").on("click", function() {
  var newQuery = $.trim($("#field").val());
  if (newQuery === "" || topics.includes(newQuery)) {}
  else {
    topics.push(newQuery);
    $("#field").val("");
    $("section").append("<button value='"+newQuery+"'>"+newQuery)}
});

$("button").click(addImages);

}); // end ready() on document load
