
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {

    function convert() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload= function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(this.response);
                    // let data = JSON.parse(request.response);

                    // inputUsd.value = inputRub.value / data.usd;
                } else {
                    reject();
                    // inputUsd.value = "Что-то пошло не так!";
                }
            };

        })
    }

    convert()
        .then((response)=>{
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .then(()=>console.log(5000)
        )
        .catch(()=>{
            inputUsd.value = "Что-то пошло не так!";
        })
});