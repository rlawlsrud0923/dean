$( document ).ready( function() {

  var index = Math.floor((Math.random() * 17)); //17개 중에서 할때마다 랜덤하게 값 나오도록
  var category = 'animals',
      effects = ['tada', 'pulse', 'flipInX', 'flipInY', 'fadeIn', 'fadeInUp', 'fadeInRight', 'fadeInUpBig',
          'fadeInRightBig', 'slideInRight', 'bounceIn', 'bounceInUp', 'bounceInRight', 'rotateIn',
          'rotateInUpLeft', 'rotateInUpRight', 'lightSpeedIn'];



  $(window).load(function() {
    $('.js--lazyload').hide(),
    $('body').removeClass('animation_box'),

    $.lazyLoadXT.onload = function() {
        var $el = $("#main"); //이미지 태그 아이디로 이미지 태그 가져와서
        $el
            .removeClass('lazy-hidden')
            .addClass('animated ' + effects[index]);
    };

  });

});
