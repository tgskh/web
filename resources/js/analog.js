let timezone = 0;

document.getElementById("analog").onchange = function () {
    let city = document.getElementById('clockselect').value;
    switch (true) {
        case (city == 'newyork'):
            timezone = 7;
            break;
        case (city == 'london'):
            timezone = 2;
            break;
        case (city == 'paris'):
            timezone = 1;
            break;
        case (city == 'kyiv'):
            timezone = 0;
            break;
    }
    console.log(timezone); // тут показує без мін = 0
}

function rotateArrow () {
    let dateNow = new Date ();
    let hours = dateNow.getHours() + timezone;
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let hoursRotate = 30*hours + minutes/2;
    let minutesRotate = 6*minutes;
    let secondsRotate = 6*seconds;
    document.getElementById('minute').style.transform = `rotate(${minutesRotate}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondsRotate}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursRotate}deg)`;
}

setInterval(rotateArrow, 1000);