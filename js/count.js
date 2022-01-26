
        window.onload = function(){

        $('#plusk').click(function(evt) {
            $('.linek').each(function(ele) {
                $(ele).val(parseInt($(ele).val())+3043200);
            });
            
        });


        $('#minusk').click(function(evt) {
            $('.linek').each(function(ele) {
                $(ele).val(parseInt($(ele).val())-3043200);

                if($("#amountsa").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountsa").val(0); 
                    $("#amountsb").val(0); 
                    $("#amountsc").val(0); 
                    $(".linek").val(0);
                  
                }
 
            });
            
        });


        $('#plusk2').click(function(evt) {
            $('.linek').each(function(ele) {
                $(ele).val(parseInt($(ele).val())+2749200);
            });
            
        });
        $('#minusk2').click(function(evt) {
            $('.linek').each(function(ele) {
                $(ele).val(parseInt($(ele).val())-2749200);
                if($("#amountsb").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountsa").val(0); 
                    $("#amountsb").val(0); 
                    $("#amountsc").val(0);  
                    $(".linek").val(0);
                }
                
            });
           
        });

        $('#plusk3').click(function(evt) {
            $('.linek').each(function(ele) {
                $(ele).val(parseInt($(ele).val())+558600);
            });
            
        });


        $('#minusk3').click(function(evt) {
            $('.linek').each(function(ele) {
                $(ele).val(parseInt($(ele).val())-558600);

            

                if($("#amountsc").val() < 0) {
                    alert("최소 1명 이상 이어야 합니다.");
                    $("#amountsa").val(0); 
                    $("#amountsb").val(0); 
                    $("#amountsc").val(0);  
                    $(".linek").val(0);
                }
                
            });
           
        });
    }
