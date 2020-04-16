let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function sendData() {
        return new Promse(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = function (data) {
                if (request.readyState < 4 && request.status === 200) {
                    resolve();
                } else {
                    reject();
                }
            }
            request.send(data);
        })
    }

    sendData()
        .tnen(() => {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => {
            inputUsd.value = "Что-то пошло не так!";
        })
});