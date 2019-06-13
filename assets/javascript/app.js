var gifs = ["blinking meme", "doge meme", "nyan cat", "rofl"];

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=45oHirW8gVBtPuUvXReL99v67eMYIatC";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    var gifDiv = $("<div class='gif'>");

    var rating = response.Rated;

    var pOne = $("<p>").text("Rating: " + rating);

    gifDiv.append(pOne);



}