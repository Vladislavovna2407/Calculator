// variables //
let buffer = '';
let operator = null;
let needErase = false;
let result = document.querySelector('#result');
let allClean = document.querySelector('#clean');
let sign = document.querySelector('#sign')
let percentage = document.querySelector('#percentage')
let plus = document.querySelector('#plus');
let equality = document.querySelector('#equality');
let minus = document.querySelector('#minus');
let multiplication = document.querySelector('#multiplication');
let division = document.querySelector('#division')
let dot = document.querySelector('#dot');

// button AC //
function clearAll() {
    setCurrentResult('0');
    buffer = '';
    operator = null;
    needErase = false;
}
allClean.addEventListener('click', clearAll);

// buttons numbers //
function clickNumber() {
    let number = this.value;
    if (needErase === true) {
        setCurrentResult(number);
        needErase = false;
    } else {
        const current = getCurrentResult();
        setCurrentResult(Number(current + number));
    }
}

let el = document.querySelectorAll('.btn-dark-grey');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = clickNumber;
}

// get current result //
function getCurrentResult() {
    return result.innerHTML;
}

// set current result //
function setCurrentResult(value) {
    return result.innerHTML = value;
}

// button +/- //
function changeSign() {
    let current = getCurrentResult();
    return setCurrentResult(-current);
}
sign.addEventListener('click', changeSign)

// button % //
function findPercentage() {
    let current = getCurrentResult();
    return setCurrentResult(current / 100);
}
percentage.addEventListener('click', findPercentage)

// button + //
function onPlus() {
    const current = getCurrentResult();
    if (buffer === true) {
        const result = Number(buffer) + Number(current);
        buffer = result;
        setCurrentResult(result);
    } else {
        buffer = current;
        operator = '+';
    }
    needErase = true;
}
plus.addEventListener('click', onPlus)

// button - //
function onMinus() {
    const current = getCurrentResult();
    if (buffer) {
        const result = Number(buffer) - Number(current);
        buffer = result;
        setCurrentResult(result);
    } else {
        buffer = current;
        operator = '-';
    }
    needErase = true;
}
minus.addEventListener('click', onMinus)

// buttton * //
function onMultiply() {
    let current = getCurrentResult();
    if (buffer === true) {
        let result = Number(buffer) * Number(current);
        buffer = result;
        setCurrentResult(result)
    } else {
        buffer = current;
        operator = '*'
    }
    needErase = true;
}
multiplication.addEventListener('click', onMultiply)

// button / //
function onDivide() {
    let current = getCurrentResult();
    if (buffer === true) {
        let result = Number(buffer) / Number(current);
        buffer = result;
        setCurrentResult(result)
    } else {
        buffer = current;
        operator = '/'
    }
    needErase = true;
}
division.addEventListener('click', onDivide)

// button = //
function onEqual() {
    const current = getCurrentResult();
    let result;
    if (current !== '0' && buffer && operator) {
        switch (operator) {
            case '+':
                result = Number(buffer) + Number(current);
                break;
            case '-':
                result = Number(buffer) - Number(current);
                break;
            case '*':
                result = Number(buffer) * Number(current);
                break;
            case '/':
                result = Number(buffer) / Number(current);
                break;
        }

        buffer = '';
        setCurrentResult(result);
    }
}
equality.addEventListener('click', onEqual)

// button . //
function onCrush() {
    let current = getCurrentResult();
    setCurrentResult(`${current}.`)
    needErase = false;
}
dot.addEventListener('click', onCrush)
