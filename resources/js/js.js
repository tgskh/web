document.getElementById('email').onmouseover = function () { emailBlue ()};
document.getElementById('email').onmouseout = function () { emailGray ()};

function emailBlue () {
    document.getElementById('email').src="./resources/pictures/mailblue.png"
}

function emailGray () {
    document.getElementById('email').src="./resources/pictures/email.png"
}

document.getElementById('fb').onmouseover = function () { fbBlue ()};
document.getElementById('fb').onmouseout = function () { fbGray ()};

function fbBlue () {
    document.getElementById('fb').src="./resources/pictures/fbblue.png"
}

function fbGray () {
    document.getElementById('fb').src="./resources/pictures/fb.png"
}

document.getElementById('tg').onmouseover = function () { tgBlue ()};
document.getElementById('tg').onmouseout = function () { tgGray ()};

function tgBlue () {
    document.getElementById('tg').src="./resources/pictures/tgblue.png"
}

function tgGray () {
    document.getElementById('tg').src="./resources/pictures/tg.png"
}

document.getElementById('github').onmouseover = function () { githubBlue ()};
document.getElementById('github').onmouseout = function () { githubGray ()};

function githubBlue () {
    document.getElementById('github').src="./resources/pictures/githubblue.png"
}

function githubGray () {
    document.getElementById('github').src="./resources/pictures/github.png"
}