
$(function(){
    'use strict';
    
    //calculate body paddint top dynamically
   

    //calculate body paddint top dynamically for mobile screens
    $(window).resize(function(){
      if($(window).innerWidth() <=580){
        $('body').css('paddingTop',$('.navbar').innerHeight());
      }else{
        $('body').css('paddingTop',$('.navbar').innerHeight()-66);
      }
    });

    //smooth scroll to element
    $('.main-nav .nav-link').click(function(event){
        event.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
                },1000);

                //styling of active nav-link in main-nav start
                 //add active class on navbar active link and remove from siblings
                $(this).addClass('active').parent().siblings().find('a').removeClass('active');
                 //styling of active nav-link in main-nav start

        window.console.log('#' + $(this).data('scroll'))

    });
 
    
    
    $(window).resize(function(){
      if($(window).innerWidth() <=580){
        $('.nav-link').click(function(){
          $('.nav-toggler').hide();
        });
      }
    });  

  

//display scroll to top icon 
$(window).scroll(function(){

  //nav bar color
  if($(window).scrollTop() >=400){
    $('.main-nav').css('background-color','#000');
  }
  else{
    $('.main-nav').css('background-color','rgba(0,0,0,0.6)')
  }

  //scroll to top icon apperance
  if($(window).scrollTop() >=1000){
    $('.scroll-to-top').fadeIn(400);
  }
  else{
    $('.scroll-to-top').fadeOut(400);
  }
  //syncronization between nav-link and sevtions
  $('.block').each(function(){
    if($(window).scrollTop()>$(this).offset().top){
      console.log($(this).attr('id'));
      var blockId = $(this).attr('id');
      $('.main-nav .nav-link').removeClass('active');
      $('.main-nav .nav-link[data-scroll="' +blockId+ '"').addClass('active');
    }
  })
 
});
//scroll to top when click on icon
$('.scroll-to-top').click(function(e){
  e.preventDefault();
  $('html,body').animate({
    scrollTop:0
  });
})

//mouse events on service-option



	// initialize easypie chart for circular progress bar
	$(function() {
      $('.chart').easyPieChart({
        barColor:'#3ec1d5',
        trackColor:'#fff',
        scaleColor:'#dfe0e0',
        scaleLength: 5,
        lineCap:'round',
        lineWidth: 13,
        trackWidth: undefined,
        size: 160,
        rotate: 0,// in degrees
        animate: {
          duration: 1000,
          enabled:true
        }
     
      });
    });

    //Dynamic tabs start
    $('.nav-tabs .nav-link').click(function(e){
      e.preventDefault();
      $(this).addClass('active-title').parent().siblings().find('a').removeClass('active-title').css('color','#444');
      $('.toggle-posts > div').hide();
      $($(this).data('title')).fadeIn();
    })
    //Dynamic tabs end

    //control placeholder in focus and blur start

    $('#subsc').focus(function(){
      'use strict';
      console.log('focus');
      if(this.placeholder === 'Type Your Email'){
        this.placeholder=" ";
     }
    });
    $('#subsc').blur(function(){
      'use strict';
      console.log('blur');
      if(this.placeholder ===" "){
        this.placeholder = 'Type Your Email'
      }
    });
   

     
    //control placeholder in focus and blur end
  
    //gallery sections start
    $('.gallery-sections button').on('click',function(){
      $(this).addClass('active-section').siblings().removeClass('active-section');
      $('.gallery img').hide();
      $($(this).data('section')).fadeIn();
    })
    //start hover effect on each photo in gallery


    //end hover effect on each photo in gallery
    //gallery sections end
});