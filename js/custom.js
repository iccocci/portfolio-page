//햄버튼 색 변화
var portfolioOffset = $(".portfolio").offset().top - 50,
    contactOffset = $(".contact").offset().top - 50;

$(".ham").each(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll > portfolioOffset){
            $(".ham span").addClass("white");
        } else {
            $(".ham span").removeClass("white");
        }

        if(wScroll > contactOffset || wScroll < portfolioOffset){
            $(".ham span").removeClass("white");
        } else{
            $(".ham span").addClass("white");
        }
    });
});

//햄버튼 애니메이션
$('.ham').click(function(){
    $(this).toggleClass('active');
    $('.nav_bg').toggleClass('visible');

    if ($('.ham').hasClass('active')) {
        $(".ham span").addClass("black");
        $('body').css({'height': '100%', 'overflow': 'hidden'});
    } else {
        $(".ham span").removeClass("black");
        $('body').css({'height': 'auto', 'overflow': 'auto'});
    }
});

//햄버거 메뉴 구동
$('.nav_bg > .nav > ul > li > a').click(function(){
    $('.ham').removeClass('active');
    $('.nav_bg').removeClass('visible');
    $(".ham span").removeClass("black");
    $('body').css({'height': 'auto', 'overflow': 'auto'});
});

//ScrollTrigger
const trigger = new ScrollTrigger.default({
    trigger : {
        once: true,
        offset: {
            element: {
                x: 0,
                y: (trigger, rect, direction) => {
                    return 0.3
                }
            }
        }
    }
});

trigger.add('[data-trigger]');
