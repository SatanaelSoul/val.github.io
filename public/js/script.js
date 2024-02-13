const splash = document.querySelector('.splash');
var x = document.getElementById("myAudio"); 
var y = document.getElementById("myAudio1"); 
var z = document.getElementById("myAudio2"); 


function startEver(){
    setTimeout(()=>{
        x.play(); 
        splash.classList.add('display-none');
        
    }, 2000);
}



const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "It'll be fun I swear!",
    "YOU CAN CHOOSE THE MOVIE!",
    "Maybe you wanna watch a race instead?",
    "Maybe we can talk about it?",
    "NOT EVEN A RACE?!?",
    "HOW ABOUT A GAME?",
    "STILL NO???",
    "HOW ABOUT REELS?",
    "NO REELS?",
    "!!!!!!!",
    "Busy?"
]



const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;



function playAudio() { 
    x.play(); 
  } 
no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = 'public/images/n2.gif';
        refreshBanner();
    
    }
    if (clicks === 1) {
        banner.src = 'public/images/n3.gif';
        refreshBanner();
    
    }

    if (clicks === 2) {
        banner.src = 'public/images/n4.gif';
        refreshBanner();
    
    }
    if (clicks === 3) {
        banner.src = 'public/images/n5.gif';
        refreshBanner();
    
    }
    if (clicks === 4) {
        banner.src = 'public/images/n6.gif';
        refreshBanner();
    
    }
    if (clicks === 5) {
        banner.src = 'public/images/n7.gif';
        refreshBanner();
    
    }
    if (clicks === 6) {
        banner.src = 'public/images/n8.gif';
        refreshBanner();
    
    }
    if (clicks === 7) {
        banner.src = 'public/images/n9.gif';
        refreshBanner();
    }
    if (clicks === 8) {
        banner.src = 'public/images/n10.gif';
        refreshBanner();
    }
    if (clicks === 9) {
        banner.src = 'public/images/n11.gif';
        refreshBanner();
    }
    if (clicks === 10) {
        banner.src = 'public/images/n12.gif';
        refreshBanner();
    }
    if (clicks === 11) {
        banner.src = 'public/images/n13.gif';
        refreshBanner();
    }
    if (clicks === 12) {
        banner.src = 'public/images/n14.gif';
        refreshBanner();
    }
    if (clicks === 13) {
        x.pause()
        y.play('vas.mp3');

    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/sad.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message2')[0];
    message.style.display = "block";
        refreshBanner();
        x.pause()
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    x.pause()
    z.play();
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}