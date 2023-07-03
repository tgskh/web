document.getElementById('calc-display').innerHTML = 'FNDMNK Calculator';
let forDisplay = "";
let a = 0;
let b = 0;
let sum = 0;
let diya = '';
const refresh = () => {document.getElementById('calc-display').innerHTML = forDisplay;}

document.getElementById('ac').onclick = function () {
    document.getElementById('calc-display').innerHTML = '0';
    forDisplay = "";
    }
    
document.getElementById('sign').onclick = function () {
        if (+forDisplay < 0) {
            forDisplay = forDisplay.replace('-', '');
            refresh();
        } else {
            forDisplay = `-${forDisplay}`;
            refresh();
        }
    };
document.getElementById('perc').onclick = function () {
        a = forDisplay;
        forDisplay = "";
        refresh(); 
    };
document.getElementById('del').onclick = function () {
        a = forDisplay;
        forDisplay = "";
        refresh(); 
    };
document.getElementById('mult').onclick = function () {
        a = forDisplay;
        forDisplay = "";
        refresh(); 
    };
document.getElementById('plus').onclick = function () {
        a = forDisplay;
        forDisplay = "";
        refresh(); 
    };
document.getElementById('min').onclick = function () { 
        a = forDisplay;
        forDisplay = "";
        refresh();
    };
document.getElementById('rovno').onclick = function () {
        b = forDisplay;
        refresh();

    };
document.getElementById('com').onclick = function () {
    if (forDisplay.indexOf(',') == -1) {
        forDisplay = `${forDisplay},`;
        refresh();
    }
};

document.getElementById('one').onclick = function () {
    forDisplay = `${forDisplay}1`;
    refresh();
    };
document.getElementById('two').onclick = function () {
    forDisplay = `${forDisplay}2`;
    refresh();
    };
document.getElementById('three').onclick = function () {
    forDisplay = `${forDisplay}3`;
    refresh();
    };
document.getElementById('four').onclick = function () {
    forDisplay = `${forDisplay}4`;
    refresh(); 
    };
document.getElementById('five').onclick = function () {
    forDisplay = `${forDisplay}5`;
    refresh(); 
    };
document.getElementById('six').onclick = function () {
    forDisplay = `${forDisplay}6`;
    refresh(); 
    };
document.getElementById('seven').onclick = function () {
    forDisplay = `${forDisplay}7`;
    refresh(); 
    };
document.getElementById('eight').onclick = function () {
    forDisplay = `${forDisplay}8`;
    refresh(); 
    };
document.getElementById('nine').onclick = function () {
    forDisplay = `${forDisplay}9`;
    refresh(); 
    };
document.getElementById('zero').onclick = function () {
    if (forDisplay.charAt(0) !== '0') {
        forDisplay = `${forDisplay}0`;
        refresh(); 
    }
    };


