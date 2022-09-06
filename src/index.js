// import functionOne from './js/function';

const inputEl = document.querySelector('[data-input]');
const clearEl = document.querySelector('[data-clear]');
const clearHistoryEl = document.querySelector('[data-clear-history]');
const bracketLeftEl = document.querySelector('[data-bracket-left]');
const bracketRightEl = document.querySelector('[data-bracket-right]');
const interestEl = document.querySelector('[data-interest]');
const acEl = document.querySelector('[data-ac]');
const piEl = document.querySelector('[data-pi]');
const sinEl = document.querySelector('[data-sin]');
const squareEl = document.querySelector('[data-square]');
const oneEl = document.querySelector('[data-one]');
const twoEl = document.querySelector('[data-two]');
const threeEl = document.querySelector('[data-three]');
const divisionEl = document.querySelector('[data-division]');
const eEl = document.querySelector('[data-e]');
const cosEl = document.querySelector('[data-cos]');
const sqrtEl = document.querySelector('[data-sqrt]');
const fourEl = document.querySelector('[data-four]');
const fiveEl = document.querySelector('[data-five]');
const sixEl = document.querySelector('[data-six]');
const multiplicationEl = document.querySelector('[data-multiplication]');
// const inputEl = document.querySelector('[data-input]');
const tanEl = document.querySelector('[data-tan]');
const factorialEl = document.querySelector('[data-factorial]');
const sevenEl = document.querySelector('[data-seven]');
const eightEl = document.querySelector('[data-eight]');
const nineEl = document.querySelector('[data-nine]');
const minusEl = document.querySelector('[data-minus]');
// const inputEl = document.querySelector('[data-input]');
const lnEl = document.querySelector('[data-ln]');
const logEl = document.querySelector('[data-log]');
const zeroEl = document.querySelector('[data-zero]');
const dotEl = document.querySelector('[data-dot]');
const equalEl = document.querySelector('[data-equal]');
const plusEl = document.querySelector('[data-plus]');

let inputValue = '';
const inputArray = [];

// inputArray.push(element);

inputEl.addEventListener('click', e => {});

oneEl.addEventListener('click', e => {
  inputArray.push('1');

  onInput();
});
twoEl.addEventListener('click', e => {
  inputArray.push('2');

  onInput();
});
threeEl.addEventListener('click', e => {
  inputArray.push('3');

  onInput();
});
fourEl.addEventListener('click', e => {
  inputArray.push('4');

  onInput();
});
fiveEl.addEventListener('click', e => {
  inputArray.push('5');

  onInput();
});
sixEl.addEventListener('click', e => {
  inputArray.push('6');

  onInput();
});
sevenEl.addEventListener('click', e => {
  inputArray.push('7');

  onInput();
});
eightEl.addEventListener('click', e => {
  inputArray.push('8');

  onInput();
});
nineEl.addEventListener('click', e => {
  inputArray.push('9');

  onInput();
});
zeroEl.addEventListener('click', e => {
  inputArray.push('0');

  onInput();
});
plusEl.addEventListener('click', e => {
  inputArray.push(' + ');

  onInput(' + ');
});
minusEl.addEventListener('click', e => {
  inputArray.push(' - ');

  onInput(' - ');
});
multiplicationEl.addEventListener('click', e => {
  inputArray.push(' * ');

  onInput(' * ');
});
divisionEl.addEventListener('click', e => {
  inputArray.push(' / ');

  onInput(' / ');
});
dotEl.addEventListener('click', e => {
  inputArray.push('.');

  onInput(' . ');
});
equalEl.addEventListener('click', e => {
  onSolve();
});

function onInput(symbol) {
  isCorrectInput(symbol);
  inputValue = inputArray.join('');
  inputEl.value = inputValue;
}

function onSolve() {
  if (inputValue === '') {
    return;
  }
  checkZeros();
  const result = eval(inputValue);
  inputEl.value = result;
  inputValue = '';
  inputArray.splice(0, inputArray.length);
  inputArray.push(result);
}

function isCorrectInput(symbol) {
  if (
    inputArray.length === 1 &&
    (inputArray[0] === ' * ' || inputArray[0] === ' / ')
  ) {
    inputArray.pop();
    return;
  }
  if (
    (symbol === ' + ' ||
      symbol === ' - ' ||
      symbol === ' * ' ||
      symbol === ' / ') &&
    (inputArray[inputArray.length - 2] === ' + ' ||
      inputArray[inputArray.length - 2] === ' - ' ||
      inputArray[inputArray.length - 2] === ' * ' ||
      inputArray[inputArray.length - 2] === ' / ')
  ) {
    inputArray.pop();
    return;
  }
}

function checkZeros() {
  const elementOfArray = inputValue.split(' ');
  const temporaryArray = [];
  elementOfArray.map(item => {
    const miniArray = item.split('');
    while (miniArray.indexOf('0') === 0) {
      miniArray.shift();
    }
    temporaryArray.push(miniArray.join(''));
  });
  inputValue = temporaryArray.join(' ');
}
