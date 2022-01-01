


window.onload = function(){
$(document).ready(function(){
    $(".btn-box > div").click(function(){
    var indexNum =  $(this).index();
    // alert( indexNum );
    $(".content-boxk > div").removeClass("active");
    $(".content-boxk > div").eq(indexNum).addClass("active")
    
    
  });
  
  
});
}