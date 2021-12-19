       
      
window.onload = function(){
       var sliderWrapper = document.querySelector('.slider_wrapper'),
sliderUl = sliderWrapper.querySelector('.slides'),
slides = sliderUl.querySelectorAll('li'),
currentIdx = 0,
slideCount = slides.length,
slideWidth = 300,
slideMargin = 30,
prevBtn = document.querySelector('#prev'),
nextBtn = document.querySelector('#next');

sliderUl.style.width = (slideWidth*slideCount) + slideMargin*(slideCount-1) + 'px';


function moveSlide(idx){
sliderUl.style.left = -idx * (slideWidth + slideMargin)+'px';
currentIdx = idx;
}

nextBtn.addEventListener('click',function(){
if(currentIdx == slideCount - 3){
moveSlide(0);
}else{
moveSlide(currentIdx + 1);
}
});
prevBtn.addEventListener('click',function(){
if(currentIdx == 0){
moveSlide(slideCount - 3);
}else{
moveSlide(currentIdx - 1);
}

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
      
          duration: 30000,
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
      