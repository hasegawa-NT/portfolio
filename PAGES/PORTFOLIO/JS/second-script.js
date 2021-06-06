'use strict';
$(function() {

    //ファーストビューのslider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

    //ハンバーガーメニューの開閉
  $('.burger_btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger_btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });

});