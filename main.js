
//var clickToShow = document.querySelector(#btn);


const card = document.querySelector('.card');
const clickMeShow = document.getElementById('btn');
const clickMehide = document.getElementById('btn1');

clickMeShow.addEventListener('click', function(){
    card.classList.add('active');
})

clickMehide.addEventListener('click', function(){
    card.classList.remove('active');
})
