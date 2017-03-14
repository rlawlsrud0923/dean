$(document).ready(function(){
	//fadebanner
	// var fadeIdx = 0
	//
	// var hisfadeIdx = null
	// var fadeheand = setInterval(fademotion,3800)
	//
	// $('.twitter_txt').on({
	//   mouseenter:function(){
	//     clearInterval(fadeheand)
	//   },
	//   mouseleave:function(){
	//     fadeheand = setInterval(fademotion,3800)
	//   }
	// })
	//
	// function fademotion(){
	//   $('.twitter_txt ul li').eq(fadeIdx).removeClass('on').fadeOut()
	//   fadeIdx ++
	//   $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn()
	//
	//   if(fadeIdx == $('.twitter_txt ul li').length){
	//     fadeIdx=0
	//     $('.twitter_txt ul li').eq(fadeIdx).addClass('on').fadeIn().parent().siblings().removeClass('on')
	//   }
	// }

	var slide = {   // 객체로 표현되어 있는 형태
         idx:0,      // 지시자일 뿐 변수가 아니기 때문에 밑에서 위치를 정확하게 잡아주어야한다.
         movement:function(start,end,idx){
             // a태그 번호가 움직일때마다 색 바뀌는 구문
             $('.slide').find('li').eq(idx).addClass('on').find('div').css({
                 'left':start,
                 'display':'block'
             }).animate({
                 'left':end
             }).parent().siblings().removeClass();
             // li 의 갯수가 넘어가면 다시 처음으로 돌려주어야 하는 구문
             if(this.idx == $('.view li').length){ // 객체 상태이기 때문에 idx 도 css 처럼 경로 자체를 제데로 잡아주어야 한다.
                 this.idx = 0;
                 this.movement('100%',0,this.idx)
             }else if(this.idx < 0){
                 this.idx = $('.view li').length -1;
                 this.movement('-100%',0,this.idx)
             }
         },
				 
         // 버튼 클릭시 화면전환 구문
        //  event:function(){
        //      $('#result').on('click','.next',function(){
        //          slide.movement('0','-100%',slide.idx);  // slide 는 this 로 해도 되는 부분  // 함수 안에 함수 부분
        //          slide.idx++
        //          slide.movement('100%','0',slide.idx);
        //      })
        //      $('#result').on('click','.prev',function(){
        //          slide.movement('0','100%',slide.idx);
        //          slide.idx--
        //          slide.movement('-100%','0',slide.idx);
        //      })
        //  },

         // a태그 클릭시 그 번호로 움직이는 구문
         event2:function(){
             $('#result').on('click','.view li a',function(){
                 var aMove = $('.view li.on').index()
                 idx = $(this).parent().index()
                 if(aMove < idx){
                     slide.movement(0,'-100%',aMove);
                     slide.movement('100%',0,idx);
                 }else if(aMove > idx){
                     slide.movement(0,'100%',aMove);
                     slide.movement('-100%',0,idx);
                 }
                 return false;  //a클릭 링크로 넘어가려는 속성 막기 위함.
             })
         }
     }
     $(document).ready(function(){
         $( "#result" ).load( "loadslide.html #slide");
         slide.event();
         slide.event2();
         console.log("레디"+slide.idx)
      })
      $(window).load(function(){
          console.log("로드"+slide.idx)
      })







});
