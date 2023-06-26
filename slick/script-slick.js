$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
});

//resize window
$(window).on("load resize", function () {
  if ($(window).width() <= "600") {
    console.log("Show");
    $("#button-menu").removeClass("hidden");
    $("#button-menu").addClass("active");
  } else {
    $("#button-menu").addClass("hidden");
    $("#button-menu").removeClass("active");
    console.log("Hide");
  }
});

//Show menu
$("#button-menu").on("click", () => {
  $("#menu").toggleClass("hidden", "active");
});
