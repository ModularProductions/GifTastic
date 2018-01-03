$(function() { // begin ready() on document load

var topics = ["mario brothers", "legend of zelda", "donkey kong", "dragon's lair", "starfox", "gauntlet", "ghosts n' goblins", "castlevania"];

function displayTopics() {
  for (i = 0 ; i < topics.length ; i++) {
    $('section').append('<button value="'+$.trim(topics[i])+'">'+$.trim(topics[i]));
  };
}

displayTopics();

$("#submit").on("click", function() {
  var newQuery = $.trim($("#field").val());
  if (newQuery === "" || topics.includes(newQuery)) {}
  else {
    topics.push(newQuery);
    $("#field").val("");    
    $("button").remove();
    displayTopics();
  }
});

function addImages() {
  console.log("clicked");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=k3AP0b4ishUDqIHJqBK4L4TrpDRDpjw8&limit=10&q='"+$(this).val();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log("response = ",response);
    $("#results").empty();
    $("#results").append("<ul>");
    for (i = 0 ; i < 10 ; i++) {
      $("ul").append("<li><img value='"+i+"' src='"+response.data[i].images.fixed_width_still.url+"' still='true' /><p>Rating: "+response.data[i].rating+"</p>");
    }
    
    $("img").on("click", function() {
      console.log("image click");
      if ($(this).attr("still") === "true") {
        $(this).attr("src", response.data[$(this).attr("value")].images.fixed_width.url);
        $(this).attr("still", "false");
      } else {
        $(this).attr("src", response.data[$(this).attr("value")].images.fixed_width_still.url);
        $(this).attr("still", "true");
      }
    });
  })
};
  
$("button").click(addImages);

}); // end ready() on document load
