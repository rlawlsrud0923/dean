$(function(){

  var idx = 0; //초기값


  function movement(start,end,i){
     $('.view li').eq(i).addClass('on').find('img').css({
         left:start,
         'display':'block'
     }).stop().animate({
         left:end
     }).parent().siblings().removeClass();


     if(idx == $('.view li').length){ //view li순서가
         idx = 0 //0번째면
         movement('100%',0,idx) //left값을 100% , animate left 0 에서 멈춤 , idx순서인 li의 img를
     }else if(idx < 0){
         idx = $('.view li').length -1;
         movement('-100%',0,idx)
     }
  }

  $('.prev').click(function(){
      console.log(idx)
      movement(0,'-100%',idx);
      idx++
      movement('100%',0,idx);
  })
  $('.next').click(function(){
      console.log("click");
      movement(0,'100%',idx);
      idx--
      movement('-100%',0,idx);
  })




    //a태그 클릭시 슬라이드
    $('.view li a').click(function(){
       var hinum = $('.view li.on').index(); //li.on의 index수 알아내는 변수
       idx = $(this).parent().index()
    
       if(hinum < idx){
           movement(0,'-100%',hinum);
           movement('100%',0,idx);
       }else if(hinum > idx){
           movement(0,'100%',hinum);
           movement('-100%',0,idx);
       }
    
       return false;
    })
    
   
   
   
   
   
   
   
   
   
   
//   var divWidth  = "100"; //배너 1개 가로크기

//   //이전
//   function prev()
//   {
//   $(".view").stop(true,true);

//   var moveX   = parseInt($(".view").css("margin-left")); //parseInt : 숫자로 변환

//   if( moveX < 0 )
//   {
//     $(".view").animate({"margin-left":"+=" + divWidth + "%"},500);
//   }
//   else
//   {
//     alert("처음 입니다.");
//     return;
//   }
//   }

//   //다음
//   function next()
//   {
//   $(".view").stop(true,true);

//   var hiddenWidth  = ($(".view .on").length-1)*(-divWidth);
//   var moveX   = parseInt($(".view").css("margin-left")) ;
//   var lastWidth  = ( moveX - divWidth );

//   if( hiddenWidth < moveX )
//   {
//     $(".view").animate({"margin-left":"-=" + divWidth + "%"},500);
//   }
//   else
//   {
//     alert("마지막 입니다.");
//     return;
//   }
//   }


});
