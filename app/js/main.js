$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "17px",
    readOnly: true,
    ratedFill: "#ffc000",
  });

  $(".featured__product-slider").slick({
    arrows: true,
  });
});
