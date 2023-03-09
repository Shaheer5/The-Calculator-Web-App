const toggler1 = document.querySelector('#first');
const toggler2 = document.querySelector('#second');
const toggler3 = document.querySelector('#third');
// const allToggler = document.querySelectorAll('.toggler');


const body = document.querySelector('body');
const switchBody = document.querySelector('.switch-body');
const switchSlider = document.querySelector('.switch-slider');
let inputField = document.getElementById('input-number');
const numpadBG = document.querySelector('#numpad-bg');
const delBtn = document.querySelector('#del');
const resetBtn = document.querySelector('#reset');
const equalBtn = document.querySelector('#equal');

toggler1.addEventListener('click', e => {
    e.preventDefault();

    toggler1.classList.add('toggle-btn-1');
    toggler2.classList.add('toggle-btn-1');
    toggler3.classList.add('toggle-btn-1');
    body.classList.add('theme-body-1');
    switchBody.classList.add('switch-body-1');
    switchSlider.classList.add('switch-slider-1');
    inputField.classList.add('input-number-1');
    numpadBG.classList.add('number-bg-1');
    delBtn.classList.add('del-btn-1');
    resetBtn.classList.add('reset-btn-1');
    equalBtn.classList.add('equal-btn-1');

    toggler1.classList.remove('toggle-btn-2');
    toggler2.classList.remove('toggle-btn-2');
    toggler3.classList.remove('toggle-btn-2');
    body.classList.remove('theme-body-2');
    switchBody.classList.remove('switch-body-2');
    switchSlider.classList.remove('switch-slider-2');
    inputField.classList.remove('input-number-2');
    numpadBG.classList.remove('number-bg-2');
    delBtn.classList.remove('del-btn-2');
    resetBtn.classList.remove('reset-btn-2');
    equalBtn.classList.remove('equal-btn-2');

    // Removing and Adding Numpad Numbers Styles
    document.querySelectorAll('.numpad-numbers').forEach(number => {
        number.classList.remove('numpad-numbers-3');
        number.classList.remove('numpad-numbers-2');
        number.classList.add('numpad-numbers-1');
    });

    toggler1.classList.remove('toggle-btn-3');
    toggler2.classList.remove('toggle-btn-3');
    toggler3.classList.remove('toggle-btn-3');
    body.classList.remove('theme-body-3');
    switchBody.classList.remove('switch-body-3');
    switchSlider.classList.remove('switch-slider-3');
    inputField.classList.remove('input-number-3');
    numpadBG.classList.remove('number-bg-3');
    delBtn.classList.remove('del-btn-3');
    resetBtn.classList.remove('reset-btn-3');
    equalBtn.classList.remove('equal-btn-3');
});

toggler2.addEventListener('click', e => {
    e.preventDefault();

    toggler1.classList.add('toggle-btn-2');
    toggler2.classList.add('toggle-btn-2');
    toggler3.classList.add('toggle-btn-2');
    body.classList.add('theme-body-2');
    switchBody.classList.add('switch-body-2');
    switchSlider.classList.add('switch-slider-2');
    inputField.classList.add('input-number-2');
    numpadBG.classList.add('number-bg-2');
    delBtn.classList.add('del-btn-2');
    resetBtn.classList.add('reset-btn-2');
    equalBtn.classList.add('equal-btn-2');

    toggler1.classList.remove('toggle-btn-3');
    toggler2.classList.remove('toggle-btn-3');
    toggler3.classList.remove('toggle-btn-3');
    body.classList.remove('theme-body-3');
    switchBody.classList.remove('switch-body-3');
    switchSlider.classList.remove('switch-slider-3');
    inputField.classList.remove('input-number-3');
    numpadBG.classList.remove('number-bg-3');
    delBtn.classList.remove('del-btn-3');
    resetBtn.classList.remove('reset-btn-3');
    equalBtn.classList.remove('equal-btn-3');

    // Removing and Adding Numpad Numbers Styles
    document.querySelectorAll('.numpad-numbers').forEach(number => {
        number.classList.remove('numpad-numbers-1');
        number.classList.remove('numpad-numbers-3');
        number.classList.add('numpad-numbers-2');
    });

    toggler1.classList.remove('toggle-btn-1');
    toggler2.classList.remove('toggle-btn-1');
    toggler3.classList.remove('toggle-btn-1');
    body.classList.remove('theme-body-1');
    switchBody.classList.remove('switch-body-1');
    switchSlider.classList.remove('switch-slider-1');
    inputField.classList.remove('input-number-1');
    numpadBG.classList.remove('number-bg-1');
    delBtn.classList.remove('del-btn-1');
    resetBtn.classList.remove('reset-btn-1');
    equalBtn.classList.remove('equal-btn-1');
});

toggler3.addEventListener('click', e => {
    e.preventDefault();
    
    toggler1.classList.add('toggle-btn-3');
    toggler2.classList.add('toggle-btn-3');
    toggler3.classList.add('toggle-btn-3');
    body.classList.add('theme-body-3');
    switchBody.classList.add('switch-body-3');
    switchSlider.classList.add('switch-slider-3');
    inputField.classList.add('input-number-3');
    numpadBG.classList.add('number-bg-3');
    delBtn.classList.add('del-btn-3');
    resetBtn.classList.add('reset-btn-3');
    equalBtn.classList.add('equal-btn-3');

    toggler1.classList.remove('toggle-btn-2');
    toggler2.classList.remove('toggle-btn-2');
    toggler3.classList.remove('toggle-btn-2');
    body.classList.remove('theme-body-2');
    switchBody.classList.remove('switch-body-2');
    switchSlider.classList.remove('switch-slider-2');
    inputField.classList.remove('input-number-2');
    numpadBG.classList.remove('number-bg-2');
    delBtn.classList.remove('del-btn-2');
    resetBtn.classList.remove('reset-btn-2');
    equalBtn.classList.remove('equal-btn-2');

    // Removing and Adding Numpad Numbers Styles
    document.querySelectorAll('.numpad-numbers').forEach(number => {
        number.classList.remove('numpad-numbers-1');
        number.classList.remove('numpad-numbers-2');
        number.classList.add('numpad-numbers-3');
    });

    toggler1.classList.remove('toggle-btn-1');
    toggler2.classList.remove('toggle-btn-1');
    toggler3.classList.remove('toggle-btn-1');
    body.classList.remove('theme-body-1');
    switchBody.classList.remove('switch-body-1');
    switchSlider.classList.remove('switch-slider-1');
    inputField.classList.remove('input-number-1');
    numpadBG.classList.remove('number-bg-1');
    delBtn.classList.remove('del-btn-1');
    resetBtn.classList.remove('reset-btn-1');
    equalBtn.classList.remove('equal-btn-1');
});


// Actual Working of the Calculator

let string = "";
let buttons = document.querySelectorAll('.numpad-numbers');

Array.from(buttons).forEach( button => {
    button.addEventListener('click', e => {
        e.preventDefault();

        console.log(e.target);
        string += e.target.innerHTML;
        inputField.value = string;

        equalBtn.addEventListener('click', () => {
            if (inputField.innerText.contains = '..') {
                inputField.value = "Syntax Error";
            } else {
                string = eval(string);
                inputField.value = string;
            }
        });

        resetBtn.addEventListener('click', () => {
            string = '';
            inputField.value = string;
        });


        delBtn.addEventListener('click', () => {
            // Calculator.Input.value= Calculator.Input.value.substring(0,Calculator.Input.value.length-1)
            // inputField.value = inputField.value.substring(0,inputField.value.length-1);
            inputField.value = inputField.value.slice(0, -1);
            // inputField.value = string;
        });
    });
});