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
  $('.twitter_txt ul li').eq(fadeIdx).removeClass('on').fadeOut()
  fadeIdx ++
  $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn()

  if(fadeIdx == $('.twitter_txt ul li').length){
    fadeIdx=0
    $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn().parent().siblings().removeClass('on')
  }
}


//Slide Banner

// var idx = 0 //초기값 설정 - 전역변수에 해주기
// var slide = {
//     Event:function(){
//         $('.twitter_txt').on(function(){
//             // console.log('aa'); //클릭 적용 확인
//             var move = $('.twitter_txt').width()
//
//             // $('.twitter_txt ul li:first') //첫번째 li의
//             $('.twitter_txt ul').children()
//             // .find('li') //img를
//             .animate({ //animate는 무조건 객체형식으로 써야 함
//               'left': -move //왼쪽으로 옮겨
//             },1000).next().animate({ //다음 이미지를
//               'left': 0 //왼쪽으로 이동시켜
//             },1000).css({
//               'left':move,  //시작점 잡아줌.
//               'display':'block' //다음 이미지 보이게 해줌
//             })
//             idx++
//         })
//     }
// }

// $(function(){
//   //mouseEvent
//   navEvent.mouse()
//   slide.Event()
// })

//
// var idx = 0;
// var slide = {
//     event:function(){
//         var wid = $('.twitter_txt').width();
//         var next = function(){
//             $('.twitter_txt ul').eq(idx).find('li').animate({
//                 'left':-wid
//             }).parent().removeClass().next().addClass('on').find('li').css({
//                 'left':wid,
//                 'display':'block'
//             }).stop().animate({
//                 'left':0
//             })
//             idx++
//             if(idx == $('.twitter_txt ul li').length){
//                 idx = 0
//                 $('.twitter_txt ul').eq(idx).addClass('on').find('li').css({
//                     'left':wid
//                 }).stop().animate({
//                     'left':0
//                 })
//             }
//         }
