$(function() {
  $("#devbtn").on("click", function(event) {
    var id = $(this).data("id");
    // var nowEaten = $(this).data("nowEaten");

    var nowEaten = {
      devoured: true
    };

    $.ajax("/api/treats/" + id, {
      type: "PUT",
      data: nowEaten
    }).then(function() {
      console.log("changed devoured to TRUE");
      location.reload();
    });
  });

  $("#treatSumbit").on("click", function(event) {
    event.preventDefault();

    var newTreat = {
      treat_name: $("#treatName")
        .val()
        .trim()
    };

    $.ajax("/api/treats", {
      type: "POST",
      data: newTreat
    }).then(function() {
      console.log("added a new treat");

      location.reload();
    });
  });
});
