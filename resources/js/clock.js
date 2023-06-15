// just clock

function updateClock () {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const clock = document.getElementById('clock');
    if (seconds <10) {seconds = `0${seconds}`;};
    if (minutes <10) {minutes = `0${minutes}`;};
    if (hours <10) {hours = `0${hours}`;};
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(updateClock, 1000);

//check selects 
document.getElementById('zvir').onchange = function () {
    let wakeUpTime = document.getElementById("wakeup").value;
    let zvirTime =  document.getElementById("zvir").value;
    let sleepTime = document.getElementById("sleep").value;

    if (zvirTime == wakeUpTime || zvirTime == sleepTime) {
        zvirTime =  document.getElementById("zvir").value = 5;
        alert('Please select another time')
    }
}

document.getElementById('wakeup').onchange = function () {
    let wakeUpTime = document.getElementById("wakeup").value;
    let zvirTime =  document.getElementById("zvir").value;
    let sleepTime = document.getElementById("sleep").value;

    if (zvirTime == wakeUpTime || zvirTime == sleepTime) {
        wakeUpTime =  document.getElementById("wakeup").value = 5;
        alert('Please select another time')
    }
}

document.getElementById('sleep').onchange = function () {
    let wakeUpTime = document.getElementById("wakeup").value;
    let zvirTime =  document.getElementById("zvir").value;
    let sleepTime = document.getElementById("sleep").value;

    if (zvirTime == wakeUpTime || zvirTime == sleepTime) {
        sleepTime =  document.getElementById("sleep").value = 5;
        alert('Please select another time')
    }
    
}

// change picture
function updateCatStatus () {
    const now = new Date();
    let hoursNow = now.getHours();

    let wakeUpTime = document.getElementById("wakeup").value;
    let zvirTime =  document.getElementById("zvir").value;
    let sleepTime = document.getElementById("sleep").value;

    let zvirPic = "./resources/pictures/projects/clock/eat.png";
    let sleepPic = "./resources/pictures/projects/clock/sleep.png";
    let wakeUpPic = "./resources/pictures/projects/clock/cat.png";

    switch (true) {
        case (hoursNow >0 && hoursNow < 6):
            if (wakeUpTime == 1) {document.getElementById("catPic").src = wakeUpPic};
            if (zvirTime == 1) {document.getElementById("catPic").src = zvirPic;}
            if (sleepTime == 1) {document.getElementById("catPic").src = sleepPic};
        case (hoursNow > 6 && hoursNow < 12):
            if (wakeUpTime == 2) {document.getElementById("catPic").src = wakeUpPic};
            if (zvirTime == 2) {document.getElementById("catPic").src = zvirPic;};
            if (sleepTime == 2) {document.getElementById("catPic").src = sleepPic};
        case (hoursNow > 12 && hoursNow < 18):
            if (wakeUpTime == 3) {document.getElementById("catPic").src = wakeUpPic};
            if (zvirTime == 3) {document.getElementById("catPic").src = zvirPic;};
            if (sleepTime == 3) {document.getElementById("catPic").src = sleepPic};
        case (hoursNow >18 && hoursNow < 24):
            if (wakeUpTime == 4) {document.getElementById("catPic").src = wakeUpPic};
            if (zvirTime == 4) {document.getElementById("catPic").src = zvirPic;};
            if (sleepTime == 4) {document.getElementById("catPic").src = sleepPic};
    }
}
setInterval(updateCatStatus, 5000)

//change picture to party time for 5 sec
document.getElementById('checkButton').onclick = function () {
   document.getElementById("catPic").src = "./resources/pictures/projects/clock/play.png";
};

