//엥커버튼 스와이프 라이브러리 
const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto'
});


//인트로 페이지 입장하기 버튼 이벤트 (프로필 선택, 에러메세지, 채팅 띄우기, 채팅 내용 바꾸기)
$('.enter-btn').click(function(e){
    var ProfileVal = $('input[name=person]:checked').val();
    
    //프로필 선택
    if (ProfileVal === '밤프인' || ProfileVal === '예비 밤프인' || ProfileVal === '외부인') {
        document.querySelector('.intro-page').classList.add('hidden');
        document.querySelector('.main-page').classList.add('show');  
        document.querySelector('.selected-profile').innerText = ProfileVal;
    } else {
        e.preventDefault();
        $('.message-profile').addClass('error-show');
    }
    //유저별로 채팅 멘트 변경하기 
    const chatMessageBamp = ['어랏?! 밤프인이시네요! \nㅋㅋㅋ 왜 이제야 오셨어요!!', '여기서 이렇게 만나니까 두 배로 반갑네요ㅎㅎㅎ', '안녕하세요! 오랜만에 밤프가 생각나서 들러 봤어요. \n여러분께 밤프는 어떤 동아리로 남아있나요?', '과몰입 기획러들의 동아리라 할 수 있죠. \n일상이 기획이 되는 경험, 공감하시죠?!', '공모전 뉴비로 시작해서 고인물까지 찍을 수 있는 탄탄한 동아리! \n우리가 그랬듯이 말이죠 :D'];
    const chatMessageOutsider = ['처음 보는 분이네요! \n너무너무 반갑습니다~!', '찾아와 주셔서 감사해요! \n궁금한 거 편하게 물어보세요 :D', '안녕하세요! 밤프의 이름을 듣고 궁금해서 찾아왔어요. \n밤프, 도대체 어떤 동아리인가요?', '과몰입 기획러들의 동아리라 할 수 있죠. \n일상이 기획이 되는 경험, 멋있지 않나요?', '공모전 뉴비로 시작해서 고인물까지 찍을 수 있는 탄탄한 동아리! \n관심이 있다면 언제든 환영입니당ㅎㅎ'];
    if (ProfileVal === '밤프인') {
        document.getElementsByClassName('chat-box')[0].innerText = chatMessageBamp[0];
        document.getElementsByClassName('chat-box')[1].innerText = chatMessageBamp[1];
        document.getElementsByClassName('chat2')[0].innerText = chatMessageBamp[2];
        document.getElementsByClassName('chat-box')[7].innerText = chatMessageBamp[3];
        document.getElementsByClassName('chat-box')[8].innerText = chatMessageBamp[4];
    } else if (ProfileVal === '외부인') {
        document.getElementsByClassName('chat-box')[0].innerText = chatMessageOutsider[0];
        document.getElementsByClassName('chat-box')[1].innerText = chatMessageOutsider[1];
        document.getElementsByClassName('chat2')[0].innerText = chatMessageOutsider[2];
        document.getElementsByClassName('chat-box')[7].innerText = chatMessageOutsider[3];
        document.getElementsByClassName('chat-box')[8].innerText = chatMessageOutsider[4];
    } 

    //채팅 띄우기
    const timings = [400, 800, 1700, 3400, 4000, 4600, 5600, 6400, 7000, 8000]
    
    if (ProfileVal != null){
        for(let i = 0; i < timings.length; i++) {
            const timing = timings[i];
            setTimeout(function Timer () {
                document.querySelector(`.chat${i}`).classList.add('chat-show'); 
            }, timing);
        }
    }
})


//앵커버튼 focus 설정
for (let i = 0; i < $('.anchor-btn').length; i++){
    $('.anchor-btn').eq(i).on('click', function(){
      $('.anchor-btn').removeClass('anchor-focus');
      $('.anchor-btn').eq(i).addClass('anchor-focus');
    })
};

//엥커버튼 해당 인터뷰 영역에 오면 포커스 바꿔주기
let isInInterview = false;

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
