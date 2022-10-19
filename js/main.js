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

//채팅 스크롤 기능 
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

//앵커버튼 focus 설정
for (let i = 0; i < $('.anchor-btn').length; i++){
    $('.anchor-btn').eq(i).on('click', function(){
      $('.anchor-btn').removeClass('anchor-focus');
      $('.anchor-btn').eq(i).addClass('anchor-focus');
    })
};

//앵커버튼 위치 이동
$(document).ready(function(){		
    $('#keyword1').click(function(){			
        var offset = $('#interview1').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
    $('#keyword2').click(function(){			
        var offset = $('#interview2').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
    $('#keyword3').click(function(){			
        var offset = $('#interview3').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
    $('#keyword4').click(function(){			
        var offset = $('#interview4').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
    $('#keyword5').click(function(){			
        var offset = $('#interview5').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
    $('#keyword6').click(function(){			
        var offset = $('#interview6').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
    $('#keyword7').click(function(){			
        var offset = $('#interview7').offset();
        $('html').animate({scrollTop : offset.top}, 400);		
    });	
});