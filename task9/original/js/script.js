window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // Определение нужных ссыллок
    const info = document.querySelector('.info');
    const tab = document.querySelectorAll('.info-header-tab');
    const tabContent = document.querySelectorAll('.info-tabcontent');

    const hideTabContent = (a) => { // где (a) стратовый номер итератора
        for (let i = a; i < tabContent.length; i++) { // Автоматизируем количество итераций
            // убираем/добавляем классы для нужных DOMElement, где [i] = индекску сооттвествующему tab[i]
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    // Показываем tabContent
    const showTabContent = (b) => {
        // убираем/добавляем классы для нужных DOMElement, где [b] = индекску сооттвествующему tab[i]
        if (tabContent[b].classList.contains('hide')) { // проверяем, что эелемент спрятан, что бы избежать повторного действия
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    };

    hideTabContent(1); // Прячем все tabContent, так же пряем все при лоаде страницы с кроме первого.

    info.addEventListener('click', (event) => { // обработчик события на основном контейнере
        const target = event.target; // определяем target внутри
        if (target && target.classList.contains('info-header-tab')) { // сраниваем target клика c нужным елементом
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) { // сравниваем  target с текущим индексом таба и передаем ее в функцию showTabContent
                    hideTabContent(0); // предварительно спрятав все tabContent
                    showTabContent(i); // показываем текузий tabContent
                    break;
                }
            }
        }
    });

    // timer
    const deadLine = '2020-4-14';

    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    };

    const setClock = (id, endTime) => {
        const timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);

        const getTimeFormat = (objKey) => {
            const time = getTimeRemaining(endTime);
            if (time.total <= 0) {
                objKey = '00';
                return objKey
            }
            if (objKey < 10) {
                return '0' + objKey;
            }
            return objKey;
        };

        function updateClock() {
            const t = getTimeRemaining(endTime);
            hours.textContent = getTimeFormat(t.hours);
            minutes.textContent = getTimeFormat(t.minutes);
            seconds.textContent = getTimeFormat(t.seconds);
            if (t.total <= 0) {
                clearInterval(timerInterval)
            }
        }
    };
    setClock('timer', deadLine);
    // modal

    const moreBtn = document.querySelector('.more');
    const closeBtn = document.querySelector('.popup-close');
    const overlay = document.querySelector('.overlay');

    const hideOverLay = () => {
        overlay.style.display = 'none';
        moreBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    };

    moreBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        moreBtn.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        hideOverLay();
    });
    overlay.addEventListener('click', (event) => {
        if (moreBtn.classList.contains('more-splash') && event.target === overlay) {
            hideOverLay();
        }
    })

    //form
    let message = {
        loading: 'Loading',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так'
    }
    let formMain = document.querySelector('.main-form'),
        input = formMain.getElementsByTagName('input'),
        statusMessage = document.createElement('div');


    statusMessage.classList.add('status')

    formMain.addEventListener('submit', function (event) {
        event.preventDefault();
        formMain.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-Type', 'aplication/json; charet=utf-8');

        let formData = new FormData(formMain);

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function (event) {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    });


    let form = document.getElementById('form'),
        inputFrom = form.getElementsByTagName('input');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.style.color = '#fff';
        
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-Type', 'aplication/json; charet=utf-8');

        let formData = new FormData(formMain);

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);
        
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
            for (let i = 0; i < inputFrom.length; i++) {
                inputFrom[i].value = '';
            }
        });
    }) ;

});