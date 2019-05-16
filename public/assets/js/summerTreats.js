$(function() {
    //when click devour me button creats key and value to be changed in database
  $(".devbtn").on("click", function(event) {
    var id = $(this).data("id");

    var nowEaten = {
      devoured: true
    };

    $.ajax("/api/treats/" + id, {
      type: "PUT",
      data: nowEaten
    }).then(function() {
      //console.log("changed devoured to TRUE");
      location.reload();
    });
  });

  //when click submit button form value is grabbed and new key/value is created and sent to database
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newTreat = {
      treat_name: $("#treatName")
        .val()
        .trim()
    };

    // console.log(newTreat);
    $.ajax("/api/treats", {
      type: "POST",
      data: newTreat
    }).then(function() {
    //   console.log("added a new treat");
      location.reload();
    });
  });
});
