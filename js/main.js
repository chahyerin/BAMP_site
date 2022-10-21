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

//채팅 보여주기 
$('.enter-btn').click(function(e){
    setTimeout(function Timer () {
        document.querySelector('.chat1').classList.add('chat-show'); 
    }, 400);
    setTimeout(function Timer () {
        document.querySelector('.chat2').classList.add('chat-show'); 
    }, 800);
    setTimeout(function Timer () {
        document.querySelector('.chat3').classList.add('chat-show'); 
    }, 1700);
    setTimeout(function Timer () {
        document.querySelector('.chat4').classList.add('chat-show'); 
    }, 3400);
    setTimeout(function Timer () {
        document.querySelector('.chat5').classList.add('chat-show'); 
    }, 4000);
    setTimeout(function Timer () {
        document.querySelector('.chat6').classList.add('chat-show'); 
    }, 4600);
    setTimeout(function Timer () {
        document.querySelector('.chat7').classList.add('chat-show'); 
    }, 5600);
    setTimeout(function Timer () {
        document.querySelector('.chat8').classList.add('chat-show'); 
    }, 6400);
    setTimeout(function Timer () {
        document.querySelector('.chat9').classList.add('chat-show'); 
    }, 7000);
    setTimeout(function Timer () {
        document.querySelector('.chat10').classList.add('chat-show'); 
    }, 8000);
});

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