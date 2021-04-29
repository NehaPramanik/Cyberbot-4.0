var bot=document.getElementById('bot');
var block=document.getElementById('block');
var score=document.getElementById('score');
var count=0;
function jump() {
    if (bot.classList != 'animate') {
        bot.classList.add('animate');
    }

    setTimeout(function () {
        bot.classList.remove('animate');
    }, 500);
}

setInterval(function () {
    console.log('here');
    let botbottom = parseInt(window.getComputedStyle(bot).getPropertyValue('bottom'));
    let boxleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    count+=0.1;
        document.getElementById('score').innerText = count.toFixed(0);   

    if (botbottom<=30 && boxleft<=160 && boxleft>=110) {
        alert('You Lose!. please refresh page to continue:)');
        count=0;
    }
}, 10);