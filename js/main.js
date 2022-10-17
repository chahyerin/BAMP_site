document.getElementsByClassName('enter-btn')[0].addEventListener('click', function(){
    document.getElementsByClassName('intro-page')[0].classList.add('hidden');
    document.getElementsByClassName('main-page')[0].classList.add('show');
})

$(window).scroll(function(){
    var height = $(window).scrollTop();
    console.log(height);

    //스크롤 높이가 115면 chat1의 opacity를 1로 변경해줘
    if (height >= 115) {
        document.querySelector('.chat1').style.opacity = "1";
    } else { document.querySelector('.chat1').style.opacity = "0"; }
    if (height >= 198) {
        document.querySelector('.chat2').style.opacity = "1";
    } else { document.querySelector('.chat2').style.opacity = "0"; }
    if (height >= 270) {
        document.querySelector('.chat3').style.opacity = "1";
    } else { document.querySelector('.chat3').style.opacity = "0"; }
    if (height >= 410) {
        document.querySelector('.chat4').style.opacity = "1";
    } else { document.querySelector('.chat4').style.opacity = "0"; }
    if (height >= 505) {
        document.querySelector('.chat5').style.opacity = "1";
    } else { document.querySelector('.chat5').style.opacity = "0"; }
    if (height >= 597) {
        document.querySelector('.chat6').style.opacity = "1";
    } else { document.querySelector('.chat6').style.opacity = "0"; }
    if (height >= 703) {
        document.querySelector('.chat7').style.opacity = "1";
    } else { document.querySelector('.chat7').style.opacity = "0"; }
    if (height >= 796) {
        document.querySelector('.chat8').style.opacity = "1";
    } else { document.querySelector('.chat8').style.opacity = "0"; }
    if (height >= 885) {
        document.querySelector('.chat9').style.opacity = "1";
    } else { document.querySelector('.chat9').style.opacity = "0"; }
    if (height >= 980) {
        document.querySelector('.chat10').style.opacity = "1";
    } else { document.querySelector('.chat10').style.opacity = "0"; }
})

$(window).scroll(function(){
    var height = $(window).scrollTop();
    console.log(height);

    // 1080~1625까지 스크롤 바  내리면 
    // 첫째 카드의 opacity 1~0으로 서서히 변경해줘
    var FirstCardOpacity = (-1/545) * height + 1625/545;
    var SecondCardOpacity = (-1/542) * height + 2378/542;
    // 같은 높이인데 스케일을 1~0.8로 서서히 변경해줘
    var FirstCardScale = (-1/2725) * height + 761/545;
    var SecondCardScale = (-1/2490) * height + 1.7;
    
    $('.card-box').eq(0).css('opacity', FirstCardOpacity);
    $('.card-box').eq(1).css('opacity', SecondCardOpacity);

    // $('.card-box').eq(0) 의 스케일 값이 1 이하일 때만 아래 코드를 실행
    // 1. $('.card-box').eq(0) 의 현재 스케일 값 구하는 법 찾기
    // 2. if 문으로 현재 스캐일 값이 1이하일 때 아래 코드 실행

    if(FirstCardScale <= 1) {
        $('.card-box').eq(0).css('transform', `scale(${FirstCardScale})`);
    }
    if(SecondCardScale <= 1) {
        $('.card-box').eq(1).css('transform', `scale(${SecondCardScale})`);
    }
})
