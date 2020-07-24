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

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
  $(".header__btn-menu").on("click", function () {
    $(".user__box").toggleClass("active");
  });

  var mixer = mixitup(".release__product-items");
});
