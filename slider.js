const left = document.querySelector('.left-btn');
const right = document.querySelector('.right-btn');
let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');
let bg1 = document.querySelectorAll('.bg-1');
let c = 0;
let intervalId;

// Avto slaydni boshlash funksiyasi
function startAutoSlide() {
    intervalId = setInterval(function () {
        c++;
        if (c === bg1.length) {
            c = 0;
        }
        moveSlide();
    }, 2500); // 2500 millisekund (2.5 sekund) davomida
}

// Slaydni o'zgartirish funksiyasi
function moveSlide() {
    for (let el of bg1) {
        el.classList.remove('active');
    }
    title.classList.remove('active');
    subtitle.classList.remove('active');

    if (c === 0) {
        title.classList.add('active');
        subtitle.classList.add('active');
    }

    bg1[c].classList.add('active');
}

// Avto slaydni boshlash
startAutoSlide();

// O'ng tugma bosilganda
right.addEventListener('click', function () {
    clearInterval(intervalId); // Avto slaydni to'xtatish
    c++;
    if (c === bg1.length) {
        c = 0;
    }
    moveSlide();
    startAutoSlide(); // Avto slaydni qayta boshlash
});

// Chap tugma bosilganda
left.addEventListener('click', function () {
    clearInterval(intervalId); // Avto slaydni to'xtatish
    c--;
    if (c < 0) {
        c = bg1.length - 1;
    }
    moveSlide();
    startAutoSlide(); // Avto slaydni qayta boshlash
});
