//엥커버튼 스와이프 라이브러리 
const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto'
});


//인트로 페이지 버튼 이벤트 (프로필 선택, 에러메세지)
$('.enter-btn').click(function(e){
    var listVar = $('input[name=person]:checked').val();
    
    if (listVar === '밤프인' || listVar === '예비 밤프인') {
        document.querySelector('.intro-page').classList.add('hidden');
        document.querySelector('.main-page').classList.add('show');  
        document.querySelector('.selected-profile').innerText = listVar;
    } else {
        e.preventDefault();
        $('.message-profile').addClass('error-show');
    }
})

//입장하기 버튼 클릭 시 채팅 보여주기 
$('.enter-btn').click(function(e){ 
    const timings = [400, 800, 1700, 3400, 4000, 4600, 5600, 6400, 7000, 8000]

    for(let i = 0; i < timings.length; i++) {
        const timing = timings[i];
        setTimeout(function Timer () {
             console.log(i)
            document.querySelector(`.chat${i}`).classList.add('chat-show'); 
        }, timing);
    }
});

//앵커버튼 focus 설정
for (let i = 0; i < $('.anchor-btn').length; i++){
    $('.anchor-btn').eq(i).on('click', function(){
      $('.anchor-btn').removeClass('anchor-focus');
      $('.anchor-btn').eq(i).addClass('anchor-focus');
    })
};

let isInInterview = false;
//엥커버튼 해당 인터뷰 영역에 오면 포커스 바꿔주기
window.addEventListener('scroll', function(){
    
    $(document).ready(function(){
        var height = $(window).scrollTop();

        for (let i = 0; i < $('.anchor-btn').length; i++){		
            var offset = $(`#interview${i}`).offset();
            if (height >= Math.floor(offset.top) ) {
                if(isInInterview) return;
                swiper.slideTo(i);
                isInInterview = false;
                $('.anchor-btn').removeClass('anchor-focus');
                $('.anchor-btn').eq(i).addClass('anchor-focus');

            } 
        };
    });

});


//앵커버튼 위치 이동
$(document).ready(function(){
    for (let i = 0; i <= $('.anchor-btn').length; i++){
        $(`#keyword${i}`).click(function(){			
            var offset = $(`#interview${i}`).offset();
            $('html').animate({scrollTop : offset.top}, 400);		
        });	
    };
});

