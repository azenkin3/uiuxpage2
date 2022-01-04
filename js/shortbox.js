

window.onload = function(){

    
var price_sum = 15030;

$(".price_sum").append("<span>" + price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

$(function () {

    ​
    
    $('.plus').click(function () {
    
    if ($(".price_value").val() > 999) {
    
    alert("1000권 초과 구매가 불가능합니다.");
    
    $(".price_value").val(1000);
    
    } else {
    
    $(".price_value").val(parseInt($(".price_value").val()) + 1);
    
    var sum = parseInt($(".price_value").val() * price_sum);
    
    $(".price_sum").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
    
    }
    
    });
    
    ​
    
    $('.minus').click(function () {
    
    if ($(".price_value").val() < 2) {
    
    alert("1권 이상 구매가 가능합니다.");
    
    $(".price_value").val(2);
    
    }
    
    $(".price_value").val(parseInt($(".price_value").val()) - 1);
    
    var sum = parseInt($(".price_value").val() * price_sum);
    
    $(".price_sum").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
    
    });
    
    
    //키보드 입력
    
    $(function () {
    
    $(".price_value").keyup(function () {
    
    if ($(".price_value").val() > 1000) {
    
    alert("1000권 초과 구매가 불가능합니다.");
    
    $(".price_value").val(1000);
    
    } else if ($(".price_value").val() < 1) {
    
    alert("1권 이상 구매가 가능합니다.");
    
    $(".price_value").val(1);
    
    } else if (isNaN($(".price_value").val())) {
    
    alert("숫자를 입력하세요.")
    
    $(".price_value").val(1);
    
    } else if (($(".price_value").val() * 10) % 10 != 0) {
    
    alert("정수를 입력하세요");
    
    $(".price_value").val(1);
    
    }
    
    var sum1 = parseInt($(".price_value").val() * price_sum );
    
    $(".price_sum").html("<span>" + sum1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");
    
    });
    
    });
    
    });
}


