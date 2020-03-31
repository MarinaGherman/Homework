window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

console.log(tabContent[0]);

    function hideTabContent(a) {
    
        for (let i = a;  i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for(let i=0; i< tab.length; i++) {
                if (target == tab[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;  
                }
            }
        }
    });
    

    //timer

let deadline = '2020-04-13'; 

function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));
    //hours = Math.floor((t/1000/60/60) % 24)
    //days = Math.floor((t/(1000*60*60*24)))
    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds

    };
}

function setClock(id, endTime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            function addZero(num){
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.innerHTML = ("0" + t.hours).slice(-2);
            minutes.innerHTML = ("0" + t.minutes).slice(-2);
            seconds.innerHTML = ("0" + t.seconds).slice(-2);
            //or
            //hours.textContent = addZero(t.hours);
            //minutes.textContent = addZero(t.minutes);
            //seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }

}
setClock('timer', deadline);

//modal 

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
            
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'что-то пошло не так..'
    };
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
        statusMessage.classList.add('status');
        form.addEventListener('submit', function(event) {
                event.preventDefault();
                form.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader ('Content-type', 'applcation/x-www-form-urlencoded'); // for JSON 'application/json; charset=utf-8'

                let formData = new FormData(form);


                /*для предбразования formData in JSON

                    let obj ={};
                    formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json  = JSON.stringify(obj);
                     request.send(json);
                     */
                
                
                request.send(formData);
                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                })
                for ( let i =0; i < input.length; i++) {
                    input[i].value = '';
                }
        });


});