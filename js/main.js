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
