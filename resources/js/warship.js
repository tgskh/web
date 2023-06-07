let location1, location2, location3;
let hits = 0;
let isSunk = false;

function numberCheck() {
    let num = prompt("Enter number 0 to 6", 1);
    if (num >=0 && num <=6) {
        return num;
    } else {
        alert('Incorrect data, please try again');
        fire();
    }
}

let usrGuess = numberCheck();


