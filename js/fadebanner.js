//fadebanner
var fadeIdx = 0

var hisfadeIdx = null
var fadeheand = setInterval(fademotion,3800)

$('.twitter_txt').on({
  mouseenter:function(){
    clearInterval(fadeheand)
  },
  mouseleave:function(){
    fadeheand = setInterval(fademotion,3800)
  }
})

function fademotion(){
  $('.twitter_txt div').eq(fadeIdx).removeClass('on').fadeOut()
  fadeIdx ++
  $('.twitter_txt div').eq(fadeIdx).addClass('on').fadeIn()

  if(fadeIdx == $('.twitter_txt div').length){
    fadeIdx=0
    $('.twitter_txt div').eq(fadeIdx).addClass('on').fadeIn().parent().siblings().removeClass('on')
  }
}




//슬라이드 베너
// var st = $('.twitter_txt ul');
// var stIdx = Math.floor(Math.random()*st.length);
// var hisnum = null;
// var stimg = null;
//
// st.eq(stIdx).addClass('on').find('li').css('display','block')
//
// var sliderhend = setInterval(function(){
//   $('.twitter_txt .next').trigger('click')
// },4800)
//
// //번호크기에 따라 이동이변함
// st(function(){
//
//     hisnum=stIdx;
//     stIdx = $(this).index()
//
//     if(hisnum < stIdx){
//       stimg = st.eq(hisnum).find('li')
//       slideMotion(stimg,0,"-100%",800)
//       stimg = st.eq(stIdx).find('li')
//       slideMotion(stimg,"100%",0,800)
//     }else if(hisnum > stIdx){
//       stimg = st.eq(hisnum).find('li')
//       slideMotion(stimg,0,"100%",800)
//       stimg = st.eq(stIdx).find('li')
//       slideMotion(stimg,"-100%",0,800)
//     }else if(hisnum == stIdx){
//       return false
//     }
//
//     return false;
//   }
// )

//마우스오버시 정지/실행
// $('.twitter_txt').on({
//   mouseenter:function(){
//     clearInterval(sliderhend);
//   },
//   mouseleave:function(){
//     sliderhend = setInterval(function(){
//       $('.twitter_txt .next').trigger('click');
//     },4800);
//   }
// })

// //다음클릭
// $('.slidebanner .next').click(function(){
//   stimg = st.eq(stIdx).find('img')
//   slideMotion(stimg,0,"-100%",800)
//   stIdx ++
//   stimg = st.eq(stIdx).find('img')
//   slideMotion(stimg,"100%",0,800)
// });
//
// //이전클릭
// $('.slidebanner .prev').click(function(){
//   stimg = st.eq(stIdx).find('img')
//   slideMotion(stimg,0,"100%",800)
//   stIdx --
//   stimg = st.eq(stIdx).find('img')
//   slideMotion(stimg,"-100%",0,800)
// });

//다음이전함수 재사용
// function slideMotion(select,start,end,speed){
//   select.parent('li').addClass('on').siblings("li").removeClass('on')
//   select.css({
//     left:start,
//     display:'block'
//
//   }).stop().animate({
//     left:end
//   },speed)
//
//   if(stIdx == st.length){
//     stIdx=0;
//     stimg = st.eq(stIdx).find('img');
//     slideMotion(stimg,"100%",0,800);
//   }else if(0>stIdx){
//     console.log(stIdx)
//     stIdx=st.length-1;
//     stimg = st.eq(stIdx).find('img');
//     slideMotion(stimg,"-100%",0,800);
//   }
//
// }

// $(function (){
//   $('.twitter_txt li').unslider({
//     delay: 3000
//   });
// });

(function(){
  var current = 0;
  var max = 0;
  var container; //li를 감싸고 있는 ul
  var interval;

  function init(){
    container = jQuery(".twitter_txt ul");
    max = container.children().length; //max = ul>li 개수

    events();

    interval = setInterval(next, 3000);
  }

  // function events(){
  //   jQuery("button.prev").on("click", prev);
  //   jQuery("button.prev").on("click", next);
  //
  //   // jQuery(window).on("keydown",keydown);
  // }

  // function prev(e){
  //   current--;
  //   if(current < 0) current = max-1;
  //   animate();
  // }
  //
  // function next(e){
  //   current++;
  //   if(current > max-1) current = 0;
  //   animate();
  // }

  function animate(){
    var moveX = current * 600;
    TweenMax.to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut});

    //setInterval : 지속적으로 함수 실행 시켜줌
    clearInterval(interval);
    interval = setInterval(next, 3000);
  }

  jQuery(document).ready(init);

})();
