$(document).ready(function(){

    AOS.init(); //aos 호출

    // cursor 가져오기
    $(function() {
        var prefix = function() {
          var a = window.getComputedStyle(document.documentElement, ""),
            b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
          return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
        }();

        // 마우스 커서 따라다니게끔 설정하기
        $(document).mousemove(function(e) {
            // X축, Y축에 각각 15px의 크기를 지정해줌
            mouseX = e.pageX + 15;
            mouseY = e.pageY - $(window).scrollTop() + 15;

            // .theBall-outer에게 속성을 불러오기 (상단에 선언한 변수 mouseX, mouseY의 스타일)
            $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
        });
    })

    // cursor 모양 바뀌게
    // -> mouseenter, mouseleave로 클래스제어할 수 있지만, hover를 사용할 경우 이어서 작성하기 때문에 코드의 길이가 짧아짐
    $('.bl').mouseenter(function(){
        $('.theBall-outer').addClass('zoom');
    });
    $('.bl').mouseleave(function(){
        $('.theBall-outer').removeClass('zoom');
    });

    $('.bl2').hover(function(){
        $('.theBall-outer').addClass('zoom2');
    }, function(){
        $('.theBall-outer').removeClass('zoom2');
    });

    $('.bl3').hover(function(){
        $('.theBall-outer').addClass('zoom3');
    }, function(){
        $('.theBall-outer').removeClass('zoom3');
    });


    media();
    function media (){
        const ww = $(window).width();
        if(ww >= 1000){
            // 서브메뉴 연결
            $('.main-menu li').mouseenter(function(){
                const result = $(this).attr('data-alt');
                $('.sub-menu').removeClass('active');
                $(`#${result}`).addClass('active');

                // 서브메뉴 박스 보이게 처리
                $('.sub-menu-box').addClass('active');

                // 서브메뉴 박스 mouseenter시에 헤더 색상 변경
                $('.header-logo svg').addClass('active');
                $('.header-area').addClass('active');
            });

            $('.sub-menu-box').mouseleave(function(){
                // 서브메뉴박스 안 보이게 처리
                $(this).removeClass('active');

                // 서브메뉴 박스 mouseleave시에 헤더 색상 변경
                $('.header-logo svg').removeClass('active');
                $('.header-area').removeClass('active');
            });
        }else{
            // 햄버거 버튼
            $('#hamburger').click(function(){
                $(this).toggleClass('active');
                $('.main-menu').toggleClass('active');
            });
        }
    }



    // 섹션별로 헤더색상 변경해주기
    $(window).scroll(function(){

        // 상단 위치값 저장
        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec3 = $('.sec-3').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const sec5 = $('.sec-5').offset().top;
        const footer = $('.footer').offset().top;

        const sct = $(window).scrollTop();

        if(sct >= banner && sct < sec1){
            $('.header-logo svg').removeClass('active');
            $('.header-area').removeClass('active');
            $('.header-logo').removeClass('active');
            $('#hamburger span').removeClass('active');
        }else if(sct >= sec1 && sct < sec2){
            $('.header-logo svg').addClass('active');
            $('.header-area').addClass('active');
            $('.header-logo').addClass('active');
            $('#hamburger span').addClass('active');
        }else if(sct >= sec2 && sct < sec4){
            $('.header-logo svg').removeClass('active');
            $('.header-area').removeClass('active');
            $('#hamburger span').removeClass('active');
        }else if(sct >= sec5){
            $('.header-logo svg').addClass('active');
            $('.header-area').addClass('active');
            $('#hamburger span').addClass('active');
        }
        
    });


    // sec-4 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidePerView: "auto",
        spaceBetween: 0,
        slidePerGroup: 1,
        speed: 1500,
        loop: true,
        autoplay: {
            delay:1500,
            disableOnInteraction: false,
        }
        // pagination: {
        //   el: ".swiper-pagination",
        // },
    });


    // 상단이동버튼
    const btn = $('.top-btn'); //top-btn 변수 선언

    // sec-1 영역부터 상단이동버튼 나오게
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });

    // Onclick 이벤트 (상단이동)
    btn.on('click',function(e){
        // 기본동작 막아주기 (오류를 줄어주기 위해서)
        e.preventDefault();
        // 상단으로 이동
        $('html, body').animate({
            scrollTop: 0
        },100);
    });

}); //end