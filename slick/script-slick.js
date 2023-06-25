$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
});

$(window).resize(function () {
  if ($(window).width() <= "600") {
    console.log("Show");
  } else {
    console.log("Hide");
  }
});
