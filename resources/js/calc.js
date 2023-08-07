let calcScreen = document.getElementById('calc-display');
let firstInput, nextInput, result, operation;

const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelectorAll('[data-clear]');

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        //remove first 0
        if (calcScreen.innerHTML == 0) {
            calcScreen.innerHTML = calcScreen.innerHTML.replace('0','')
        };
        calcScreen.innerHTML = calcScreen.innerHTML + button.textContent;
        
    });
});

document.getElementById('point').addEventListener('click', () => {
    if (calcScreen.innerHTML.indexOf(',') == -1) {calcScreen.innerHTML = `${calcScreen.innerHTML},` }
});

document.getElementById('sign').addEventListener('click', () => {
    if (calcScreen.innerHTML.indexOf('-') == -1) {calcScreen.innerHTML = `-${calcScreen.innerHTML}`}
    else {calcScreen.innerHTML = calcScreen.innerHTML.replace('-','');}
});

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        firstInput = parseFloat(calcScreen.innerHTML);
        operation = button.textContent;
        calcScreen.innerHTML = 0;
    });
});

clearButton.forEach(button => {
    button.addEventListener('click', () => {
        calcScreen.innerHTML = 0;
        firstInput = undefined; 
        nextInput = undefined;
        result = undefined;
        operation = undefined;
    });
});

document.getElementById('result').addEventListener('click', () => {
    nextInput = parseFloat(calcScreen.innerHTML);
    console.log(firstInput);
    console.log(nextInput);
    switch (true) {
        case (operation == '+'):
            result = firstInput + nextInput;
            break;
        case (operation == '-'):
            result = firstInput - nextInput;
            break;
        case (operation == 'x'):
            result = firstInput * nextInput;
            break;
        case (operation == '/'):
            result = firstInput / nextInput;
            break;
        case (operation == '%'):
            result = firstInput % nextInput;
            break;
    }
    calcScreen.innerHTML = result;
    firstInput = result;
})



