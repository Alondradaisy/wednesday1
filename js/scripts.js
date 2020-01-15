$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["person1", "drink", "noun","adjective","lastMovieWatched", "favoriteColor", "adjective2", "songTitle", "musicArtist"];
      
      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        console.log(userInput);
        $("." + blank).text(userInput).val();
      });

    $("#story").show();

    event.preventDefault();

   });
});
