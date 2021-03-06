
//timer

let deadline = '2020-03-13'; 

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
