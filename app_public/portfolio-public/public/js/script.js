const abtTxt = document.querySelector('.line2 b');
var numCountFlag = true;
setTimeout(() => {
    abtTxt.classList.add('show');
}, 450);

// const meDesc = {
//     "text" : [
//         "a gamer.",
//         "a web developer.",
//         "in Kitchener, ON."
//     ],
//     "width" : [
//         170,
//         324,
//         344
//     ]
// }

// const setTextAndWidth = (i) => {
//     setTimeout(() => {
//         console.log(i);
//         abtTxt.innerHTML = meDesc['text'][i];
//         abtTxt.style.width = meDesc['width'][i] + "px";
//     }, 1000);
// };

// setInterval(() => {
//     for(let i = 1; i <= meDesc['text'].length; i++){
//         setTimeout(() => {
//             console.log(i);
//             abtTxt.innerHTML = meDesc['text'][i - 1];
//             abtTxt.style.width = meDesc['width'][i - 1] + "px";
//             setTimeout(() => {
//                 abtTxt.style.width = 0;
//             }, 1000 * i);
//         }, 2000 * i);
//     }
// }, 3000);

document.addEventListener('scroll', () => {
    if(window.scrollY >= 255 && numCountFlag){
        $(".count").each(function () {
            var count = $(this);
            var countTo = count.attr("data-count");
            $({ countNum: count.text() }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 1900,
                    easing: "linear",
                    step: function () {
                        count.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        count.text(this.countNum);
                    }
                }
                );
            });
            numCountFlag = false;
        }
    });
    
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});

document.querySelector('.abt-lnk').addEventListener('click', () => {
    window.scrollTo(0, 400);
});
document.querySelector('.skl-lnk').addEventListener('click', () => {
    window.scrollTo(0, 1220);
});
document.querySelector('.prj-lnk').addEventListener('click', () => {
    window.scrollTo(0, 2120);
});
document.querySelector('.to-resume').addEventListener('click', () => {
    window.scrollTo(0, 1600);
});