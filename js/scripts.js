$(document).ready(function() {
    $("#formOne").submit(function() {
    var person1Input = $("input#person1").val();
    var drinkInput = $("input#drink").val();
    var nounInput = $("input#noun").val();
    var verbInput = $("input#verb").val();
    var blackInput = $("input#black").val();

    $(".person1").text("person1Input");
    $(".drink").text("drinkInput");
    $(".noun").text("nounInput");
    $(".verb").text("verbInput");
    $(".black").text("blackInput");

    $("#story").show();

    event.preventDefault();

   });
});
