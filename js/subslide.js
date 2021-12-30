



function slide(){

$('.slide li:last').prependTo('.slide');

$('.slide').css({marginTop:-500});

$('.slide').animate({marginTop:0});

}

setInterval(slide, 3000);
