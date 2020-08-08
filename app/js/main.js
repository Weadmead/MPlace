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
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    grid: false,
    skin: "round",
  });

  $(".list-btn").on("click", function () {
    $(".category__item, .favorites__item").addClass("category__item-list");
  });
  $(".grid-btn").on("click", function () {
    $(".category__item, .favorites__item").removeClass("category__item-list");
  });

  $(".favorites-filter__btn").on("click", function () {
    $(".favorites-filter__list").slideToggle();
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
  $(".aside__item-btn").on("click", function () {
    $(".aside__item-list").slideToggle();
  });
  $(".aside__filter-btn").on("click", function () {
    $(".aside__filter-list").slideToggle();
  });
  $(".pricing__range").on("click", function () {
    $(".pricing__range-list").slideToggle();
  });
  $(".header__btn-menu").on("click", function () {
    $(".user__box").toggleClass("active");
  });

  var mixer = mixitup(".release__product-items, .category__content");
});
