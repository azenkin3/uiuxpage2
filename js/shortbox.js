
        window.onload = function(){

            $('#pluskk').click(function(evt) {
                $('.linekk').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())+3043200);
                });
                evt.preventDefault();
            });
    
    
            $('#minuskk').click(function(evt) {
                $('.linekk').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())-3043200);
    
                    if($("#amountsaa").val() < 0) {
                        alert("최소 1명 이상 이어야 합니다.");
                        $("#amountsaa").val(0); 
                        $("#amountsbb").val(0); 
                        $("#amountscc").val(0); 
                        $(".linekk").val(0);
                      
                    }
     
                });
                evt.preventDefault();
            });
    
    
            $('#pluskk2').click(function(evt) {
                $('.linekk').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())+2749200);
                });
                evt.preventDefault();
            });
            $('#minuskk2').click(function(evt) {
                $('.linekk').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())-2749200);
                    if($("#amountsbb").val() < 0) {
                        alert("최소 1명 이상 이어야 합니다.");
                        $("#amountsaa").val(0); 
                        $("#amountsbb").val(0); 
                        $("#amountscc").val(0);  
                        $(".linekk").val(0);
                    }
                    
                });
                evt.preventDefault();
            });
    
            $('#pluskk3').click(function(evt) {
                $('.linekk').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())+558600);
                });
                evt.preventDefault();
            });
    
    
            $('#minuskk3').click(function(evt) {
                $('.linekk').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())-558600);
    
                
    
                    if($("#amountscc").val() < 0) {
                        alert("최소 1명 이상 이어야 합니다.");
                        $("#amountsaa").val(0); 
                        $("#amountsbb").val(0); 
                        $("#amountscc").val(0);  
                        $(".linekk").val(0);
                    }
                    
                });
                evt.preventDefault();
            });

            ('#plusk').click(function(evt) {
                $('.linek').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())+3043200);
                });
                evt.preventDefault();
            });
    
    
            $('#minusk').click(function(evt) {
                $('.linek').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())-3043200);
    
                    if($("#amountsa").val() < 0) {
                        alert("최소 1명 이상 이어야 합니다.");
                        $("#amountsa").val(0); 
                        $("#amountsb").val(0); 
                        $("#amountsc").val(0); 
                        $(".linek").val(0);
                      
                    }
     
                });
                evt.preventDefault();
            });
    
    
            $('#plusk2').click(function(evt) {
                $('.linek').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())+2749200);
                });
                evt.preventDefault();
            });
            $('#minusk2').click(function(evt) {
                $('.linek').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())-2749200);
                    if($("#amountsb").val() < 0) {
                        alert("최소 1명 이상 이어야 합니다.");
                        $("#amountsa").val(0); 
                        $("#amountsb").val(0); 
                        $("#amountsc").val(0);  
                        $(".linek").val(0);
                    }
                    
                });
                evt.preventDefault();
            });
    
            $('#plusk3').click(function(evt) {
                $('.linek').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())+558600);
                });
                evt.preventDefault();
            });
    
    
            $('#minusk3').click(function(evt) {
                $('.linek').each(function(idx, ele) {
                    $(ele).val(parseInt($(ele).val())-558600);
    
                
    
                    if($("#amountsc").val() < 0) {
                        alert("최소 1명 이상 이어야 합니다.");
                        $("#amountsa").val(0); 
                        $("#amountsb").val(0); 
                        $("#amountsc").val(0);  
                        $(".linek").val(0);
                    }
                    
                });
                evt.preventDefault();
            });
        
        }
    