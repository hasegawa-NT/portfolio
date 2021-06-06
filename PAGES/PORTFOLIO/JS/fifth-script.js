'use strict';
$(function(){
    $('.burger-btn').on('click', function() {
        $('.burger-btn').toggleClass('close');
        $('.header-nav-tablet').toggleClass('slide-in');
        $(!'.header-nav-tablet').removeClass('slide-in');
        $('body').toggleClass('noScroll');
    });
    new WOW().init();
    
    
        
      
      $('.floating').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
    
});