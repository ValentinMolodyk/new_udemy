let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let menuItemAdd = document.createElement('div');

menuItemAdd.classList.add('menu-item');
menuItemAdd.textContent = 'Пятый пункт';

menu.removeChild(menuItem[2]);
menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(menuItemAdd);

//

const body = document.body;
body.style.backgroundImage = 'url(img/apple_true.jpg)';

//

const title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

//
const wrapper = document.getElementsByClassName('column')[1];
const adv  = document.querySelectorAll('.adv');
wrapper.removeChild(adv[0]);

//

let question = prompt('Как вы относитесь к техинике Apple?', '');

while (question === '' || question === null) {
    question = prompt('Как вы относитесь к техинике Apple?', '');
}

let answeArea = document.getElementById('prompt');

answeArea.textContent = question;