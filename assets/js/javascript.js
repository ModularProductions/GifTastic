// $(function() { // begin ready() on document load
  
var topics = ["mario brothers", "legend of zelda", "donkey kong", "dragon's lair", "starfox", "gauntlet", "ghosts n' goblins", "castlevania"];
  
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=k3AP0b4ishUDqIHJqBK4L4TrpDRDpjw8&limit=10&q='";
console.log("start of program, topics[] count = "+topics.length);

function createButton(value) {
  console.log("execute createButton()");
  var button = $("<button>");
  button.addClass("topicButton");
  button.attr("value", value);
  button.text(value);
  $("section").append(button);
  $(button).on("click", addImages);
}

function displayTopics() {
  console.log("execute displayTopics()");
  for (i = 0 ; i < topics.length ; i++) {
    createButton(topics[i]);
  };
};

displayTopics();

// creates new button from query field
$("#submit").on("click", function() {
  event.preventDefault();
  console.log("new query submit clicked");
  var newQuery = $.trim($("#field").val());
  if (newQuery == "" || topics.includes(newQuery)) {
    $("#field").val("");
    console.log("newQuery field invalid");
  } else {
    topics.push(newQuery);
    console.log("newQuery topics count = ", topics.length);
    createButton(newQuery);
    $("#field").val("");    
  }
  console.log("past 'if'");
});

function addImages() {
  console.log("execute addImages()");
  $("#results").empty();
  $.ajax({
    url: queryURL+$(this).val(),
    method: "GET"
  }).done(function(response) {
    $("#results").append("<ul>");
    for (i = 0 ; i < 10 ; i++) {
      $("ul").append("<li><img value='"+i+"' src='"+response.data[i].images.fixed_width_still.url+"' still='true' /><p>Rating: "+response.data[i].rating+"</p>");
    };
    
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
  

// }); // end ready() on document load
