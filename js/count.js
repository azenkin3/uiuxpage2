
        
        
        
        window.onload = function(){

        $('#plus').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())+3043200);
            });
            evt.preventDefault();
        });


        $('#minus').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())-3043200);

                if($("#amounts").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amounts").val(0); 
                    $(".line").val(0);
                  
                }

                   
                
            });
            evt.preventDefault();
        });


        $('#plus2').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())+2749200);
            });
            evt.preventDefault();
        });
        $('#minus2').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())-2749200);
                if($("#amountss").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountss").val(0); 
                    $(".line").val(0);
                }
                
            });
            evt.preventDefault();
        });

        $('#plus3').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())+558600);
            });
            evt.preventDefault();
        });


        $('#minus3').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())-558600);

            

                if($("#amountsss").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountsss").val(0); 
                    $(".line").val(0);
                }
                
            });
            evt.preventDefault();
        });

        
        $('#plus').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())+3043200);
            });
            evt.preventDefault();
        });


        $('#minus').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())-3043200);

                if($("#amounts").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amounts").val(0); 
                    $(".line").val(0);
                  
                }

                   
                
            });
            evt.preventDefault();
        });


        $('#plus2').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())+2749200);
            });
            evt.preventDefault();
        });
        $('#minus2').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())-2749200);
                if($("#amountss").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountss").val(0); 
                    $(".line").val(0);
                }
                
            });
            evt.preventDefault();
        });

        $('#plus3').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())+558600);
            });
            evt.preventDefault();
        });


        $('#minus3').click(function(evt) {
            $('.line').each(function(idx, ele) {
                $(ele).val(parseInt($(ele).val())-558600);

            

                if($("#amountsss").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountsss").val(0); 
                    $(".line").val(0);
                }
                
            });
            evt.preventDefault();
        });
    
      
 
    }

          
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