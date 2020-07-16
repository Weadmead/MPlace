$(function () {
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    ratedFill: "#ffc000",
    spacing: "4px",
  });

  $(".featured__product-slider").slick({
    arrows: true,
  });

  $(".followers__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  });

  var mixer = mixitup(".release__product-items");
});
