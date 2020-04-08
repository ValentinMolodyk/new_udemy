window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // Определение нужных ссыллок
    let info = document.querySelector('.info');
    let tab = document.querySelectorAll('.info-header-tab');
    let tabContent = document.querySelectorAll('.info-tabcontent');



    hideTabContent(1); // Прячем все tabContent, так же пряем все при лоаде страницы с кроме первого.

    function hideTabContent(a) { // где (a) стратовый номер итератора
        for(let i = a; i < tabContent.length; i++) { // Автоматизируем количество итераций
            // убираем/добавляем классы для нужных DOMElement, где [i] = индекску сооттвествующему tab[i]
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    // Показываем tabContent
    function showTabContent(b) {
        // убираем/добавляем классы для нужных DOMElement, где [b] = индекску сооттвествующему tab[i]
        if (tabContent[b].classList.contains('hide')) { // проверяем, что эелемент спрятан, что бы избежать повторного действия
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }


    info.addEventListener('click', function (event) { // обработчик события на основном контейнере
        let target = event.target; // определяем target внутри
        if(target && target.classList.contains('info-header-tab')) { // сраниваем target клика c нужным елементом
           for (let i = 0; i < tab.length; i++) {
               if (target === tab[i]) { // сравниваем  target с текущим индексом таба и передаем ее в функцию showTabContent
                   hideTabContent(0); // предварительно спрятав все tabContent
                   showTabContent(i); // показываем текузий tabContent
                   break;
               }
           }
        }
    });
});

