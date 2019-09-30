var mySwiper = new Swiper('.swiper-container', {
  autoplay: true,
  on: {
    init: function() {
      //Swiper初始化了
      var activeIndex = this.activeIndex;
      var elementIndex = activeIndex + 1;
      var elementId = "#js-swiper-" + elementIndex;
      var swiperTextElementid = "#js-swiper-text-" + elementIndex;
      $(".swiper-button").removeClass("-active");
      $(".js-swiper-text").removeClass("-active")
      $(elementId).addClass("-active");
      $(swiperTextElementid).addClass('-active');
    },
    slideChangeTransitionEnd: function() {
      var activeIndex = this.activeIndex;
      var elementIndex = activeIndex + 1;
      var elementId = "#js-swiper-" + elementIndex;
      var swiperTextElementid = "#js-swiper-text-" + elementIndex;
      $(".swiper-button").removeClass("-active");
      $(".js-swiper-text").removeClass("-active")
      $(elementId).addClass("-active");
      $(swiperTextElementid).addClass('-active');
    },
  }
})

function swiperClickCallback(event) {
  var elementId = "#" + event.target.id;
  $(".swiper-button").removeClass("-active");
  $(elementId).addClass("-active");
  mySwiper.autoplay.start();
}


$('#js-swiper-1').click(function(event) {
  mySwiper.slideTo(0, 1000, swiperClickCallback(event));
  $(".js-swiper-text").removeClass('-active');
  $("#js-swiper-text-1").addClass('-active');
})
$('#js-swiper-2').click(function(event) {
  mySwiper.slideTo(1, 1000, swiperClickCallback(event));
  $(".js-swiper-text").removeClass('-active');
  $("#js-swiper-text-2").addClass('-active');
})
$('#js-swiper-3').click(function(event) {
  mySwiper.slideTo(2, 1000, swiperClickCallback(event));
  $(".js-swiper-text").removeClass('-active');
  $("#js-swiper-text-3").addClass('-active');
})
$('#js-swiper-4').click(function(event) {
  mySwiper.slideTo(3, 1000, swiperClickCallback(event));
  $(".js-swiper-text").removeClass('-active');
  $("#js-swiper-text-4").addClass('-active');
})


$('#js-swiper-1').mouseover(function(event) {
  /* Act on the event */
  mySwiper.slideTo(0, 1000, swiperClickCallback(event));
});

$('#js-swiper-2').mouseover(function(event) {
  /* Act on the event */
  mySwiper.slideTo(1, 1000, swiperClickCallback(event));
});

$('#js-swiper-3').mouseover(function(event) {
  /* Act on the event */
  mySwiper.slideTo(2, 1000, swiperClickCallback(event));
});

$('#js-swiper-4').mouseover(function(event) {
  /* Act on the event */
  mySwiper.slideTo(3, 1000, swiperClickCallback(event));
});
