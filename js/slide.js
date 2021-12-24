       
      
window.onload = function(){


function prev(){

$('.slide li:last').prependTo('.slide');

$('.slide').css('margin-left',-1200); 

$('.slide').stop().animate({marginLeft:0},800);

}



function next(){

$('.slide').stop().animate({marginLeft:-1200}, function(){

$('.slide li:first').appendTo('.slide');

$('.slide').css({marginLeft:0});

});

}



function slide(){

$('.slide').stop().animate({marginLeft:-1200}, function(){

$('.slide li:first').appendTo('.slide');

$('.slide').css({marginLeft:0});

});

}



setInterval(slide, 5500);



$('.prev').click(function(){

prev();

});



$('.next').click(function(){

next();

});
}



   

/* counter */

$(document).ready(function(){
$('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 10000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
           
          }
      
        });  
        
});
      
      });
      


      
$(function(){
  $('.navbar__toggleBtn').click(function(){
    $('.navbar__menu').slideToggle();
  });
  });
  
  $(window).resize(function(){
    if(window.innerWidth>770){
      $('.navbar__menu').show();
      $('.navbar__toogleBtn').hide();
    }
  });
  $(window).resize(function(){
    if(window.innerWidth<770){
      $('.navbar__menu').hide();
  }  
   
  });