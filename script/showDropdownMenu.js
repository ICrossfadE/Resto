//resize window
$(window).on("load resize", function () {
  if ($(window).width() <= "758") {
    console.log("Show");
    $("#open-buttom").removeClass("hidden");
    $("#open-buttom").addClass("active");
    $("#header-buttons").removeClass("hidden");
    $("#header-buttons").addClass("active");
  } else {
    $("#open-buttom").addClass("hidden");
    $("#open-buttom").removeClass("active");
    $("#header-buttons").addClass("hidden");
    $("#header-buttons").removeClass("active");
    console.log("Hide");
  }
});

// hide dropdown menu when resize window
$(window).resize(function () {
  if ($(window).width() <= "758") {
    console.log("Hide-menu");
    $("#dropdown-menu").addClass("hidden");
    $("#dropdown-menu").removeClass("active");

    $("#close-buttom").addClass("hidden");
    $("#close-buttom").removeClass("active");
  }
});

//Show menu
$("#open-buttom").on("click", () => {
  $("#dropdown-menu").toggleClass("hidden", "active");

  $("#open-buttom").addClass("hidden");
  $("#open-buttom").removeClass("active");

  $("#close-buttom").addClass("active");
  $("#close-buttom").removeClass("hidden");
});

//close menu
$("#close-buttom").on("click", () => {
  $("#dropdown-menu").toggleClass("hidden", "active");

  $("#close-buttom").addClass("hidden");
  $("#close-buttom").removeClass("active");

  $("#open-buttom").addClass("active");
  $("#open-buttom").removeClass("hidden");
});
