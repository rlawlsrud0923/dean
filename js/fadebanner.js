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

$(function (){
  $('.twitter_txt li').unslider({
    delay: 3000
  });
});
