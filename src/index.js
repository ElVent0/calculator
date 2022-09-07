// import functionOne from './js/function';

const listEl = document.querySelector('[data-info="list"]');
const inputEl = document.querySelector('[data-info="input"]');
const clearEl = document.querySelector('[data-info="AC"]');
const clearHistoryEl = document.querySelector('[data-info="clearHistory"]');
const bracketLeftEl = document.querySelector('[data-info="("]');
const bracketRightEl = document.querySelector('[data-info=")"]');
const interestEl = document.querySelector('[data-info="%"]');
const acEl = document.querySelector('[data-info="AC"]');
const piEl = document.querySelector('[data-info="pi"]');
const sinEl = document.querySelector('[data-info="sin"]');
const squareEl = document.querySelector('[data-info="x^2"]');
const oneEl = document.querySelector('[data-info="1"]');
const twoEl = document.querySelector('[data-info="2"]');
const threeEl = document.querySelector('[data-info="3"]');
const divisionEl = document.querySelector('[data-info="/"]');
const eEl = document.querySelector('[data-info="e"]');
const cosEl = document.querySelector('[data-info="cos"]');
const sqrtEl = document.querySelector('[data-info="sqrt"]');
const fourEl = document.querySelector('[data-info="4"]');
const fiveEl = document.querySelector('[data-info="5"]');
const sixEl = document.querySelector('[data-info="6"]');
const multiplicationEl = document.querySelector('[data-info="*"]');
// const inputEl = document.querySelector('[data-input]');
const tanEl = document.querySelector('[data-info="tan"]');
const factorialEl = document.querySelector('[data-info="!"]');
const sevenEl = document.querySelector('[data-info="7"]');
const eightEl = document.querySelector('[data-info="8"]');
const nineEl = document.querySelector('[data-info="9"]');
const minusEl = document.querySelector('[data-info="-"]');
// const inputEl = document.querySelector('[data-info=""]');
const lnEl = document.querySelector('[data-info="ln"]');
const logEl = document.querySelector('[data-info="log"]');
const zeroEl = document.querySelector('[data-info="0"]');
const dotEl = document.querySelector('[data-info="."]');
const equalEl = document.querySelector('[data-info="="]');
const plusEl = document.querySelector('[data-info="+"]');

let inputValue = '';
const inputArray = [];

// inputEl.addEventListener('click', e => {});

listEl.addEventListener('click', e => {
  const value = e.target.dataset.info;
  if (value === '=') {
    onSolve();
    // console.log(inputValue, inputArray);
    return;
  }
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    inputArray.push(` ${value} `);
    onInput(` ${value} `);
    return;
  }
  if (value === '%' || value === ')' || value === '^2' || value === '!') {
    inputArray.push(`${value} `);
    onInput(`${value} `);
    return;
  }
  if (value === '(') {
    inputArray.push(` ${value}`);
    onInput(` ${value} `);
    return;
  }
  if (value === '.' || value === '0') {
    inputArray.push(value);
    onInput(value);
    return;
  }
  if (value === 'AC') {
    if (inputArray[inputArray.length - 2] === '.') {
      inputArray.pop();
      inputArray.pop();
      onInput();
      return;
    }
    inputArray.pop();
    onInput();
    // console.log(inputValue, inputArray);
    return;
  }
  if (value === 'clearInput') {
    while (inputArray.length !== 0) {
      inputArray.pop();
    }
    onInput();
    // console.log(inputValue, inputArray);
    return;
  }
  if (value === 'list' || value === 'input') {
    return;
  }
  inputArray.push(value);
  onInput();
});

// oneEl.addEventListener('click', e => {
//   inputArray.push('1');
//   onInput();
// });
// twoEl.addEventListener('click', e => {
//   inputArray.push('2');

//   onInput();
// });
// threeEl.addEventListener('click', e => {
//   inputArray.push('3');

//   onInput();
// });
// fourEl.addEventListener('click', e => {
//   inputArray.push('4');

//   onInput();
// });
// fiveEl.addEventListener('click', e => {
//   inputArray.push('5');

//   onInput();
// });
// sixEl.addEventListener('click', e => {
//   inputArray.push('6');

//   onInput();
// });
// sevenEl.addEventListener('click', e => {
//   inputArray.push('7');

//   onInput();
// });
// eightEl.addEventListener('click', e => {
//   inputArray.push('8');

//   onInput();
// });
// nineEl.addEventListener('click', e => {
//   inputArray.push('9');

//   onInput();
// });
// zeroEl.addEventListener('click', e => {
//   inputArray.push('0');

//   onInput();
// });
// plusEl.addEventListener('click', e => {
//   inputArray.push(' + ');

//   onInput(' + ');
// });
// minusEl.addEventListener('click', e => {
//   inputArray.push(' - ');

//   onInput(' - ');
// });
// multiplicationEl.addEventListener('click', e => {
//   inputArray.push(' * ');

//   onInput(' * ');
// });
// divisionEl.addEventListener('click', e => {
//   inputArray.push(' / ');

//   onInput(' / ');
// });
// dotEl.addEventListener('click', e => {
//   inputArray.push('.');

//   onInput(' . ');
// });
// equalEl.addEventListener('click', e => {
//   onSolve();
// });

function onInput(symbol) {
  isCorrectInput(symbol);
  if (symbol === '.') {
    checkDots();
  }
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
  let resultString = `${result}`;
  let resultArray = resultString.split('');
  inputArray.pop();
  resultArray.map(a => {
    inputArray.push(a);
  });
}

function isCorrectInput(symbol) {
  if (
    (inputArray.length === 1 &&
      (inputArray[0] === ' * ' ||
        inputArray[0] === ' / ' ||
        inputArray[0] === '% ' ||
        inputArray[0] === ') ' ||
        inputArray[0] === '! ' ||
        inputArray[0] === '^2 ')) ||
    inputArray[0] === '.'
  ) {
    inputArray.pop();
    alert('Це не може бути першим символом');
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
  if (symbol === '.' && inputArray[inputArray.length - 2] === '.') {
    inputArray.pop();
    return;
  }
  if (symbol === '0' && inputArray[inputArray.length - 2] === ' / ') {
    inputArray.pop();
    alert('На нуль не ділимо');
    return;
  }
  if (
    symbol === ' ( ' &&
    (inputArray[inputArray.length - 2] === '1' ||
      inputArray[inputArray.length - 2] === '2' ||
      inputArray[inputArray.length - 2] === '3' ||
      inputArray[inputArray.length - 2] === '4' ||
      inputArray[inputArray.length - 2] === '5' ||
      inputArray[inputArray.length - 2] === '6' ||
      inputArray[inputArray.length - 2] === '7' ||
      inputArray[inputArray.length - 2] === '8' ||
      inputArray[inputArray.length - 2] === '9' ||
      inputArray[inputArray.length - 2] === '0')
  ) {
    inputArray.pop();
    inputArray.push(' * ');
    inputArray.push('(');
    return;
  }
  if (
    symbol === ' ( ' &&
    (inputArray[inputArray.length - 2] === ' + ' ||
      inputArray[inputArray.length - 2] === ' - ' ||
      inputArray[inputArray.length - 2] === ' * ' ||
      inputArray[inputArray.length - 2] === ' / ' ||
      inputArray[inputArray.length - 2] === '+ ' ||
      inputArray[inputArray.length - 2] === '- ' ||
      inputArray[inputArray.length - 2] === '* ' ||
      inputArray[inputArray.length - 2] === '/ ')
  ) {
    const temporaryValue = inputArray[inputArray.length - 2];
    inputArray.pop();
    inputArray.pop();
    inputArray.push('');
    inputArray.push(temporaryValue);
    inputArray.push('(');
    return;
  }
  if (
    inputArray[inputArray.length - 2] === ') ' &&
    (inputArray[inputArray.length - 1] === '1' ||
      inputArray[inputArray.length - 1] === '2' ||
      inputArray[inputArray.length - 1] === '3' ||
      inputArray[inputArray.length - 1] === '4' ||
      inputArray[inputArray.length - 1] === '5' ||
      inputArray[inputArray.length - 1] === '6' ||
      inputArray[inputArray.length - 1] === '7' ||
      inputArray[inputArray.length - 1] === '8' ||
      inputArray[inputArray.length - 1] === '9' ||
      inputArray[inputArray.length - 1] === '0')
  ) {
    const temporaryValue = inputArray[inputArray.length - 1];
    inputArray.pop();
    inputArray.push('*');
    inputArray.push(' ');
    inputArray.push(temporaryValue);
    return;
  }
  if (
    inputArray[inputArray.length - 2] === ') ' &&
    (inputArray[inputArray.length - 1] === ' + ' ||
      inputArray[inputArray.length - 1] === ' - ' ||
      inputArray[inputArray.length - 1] === ' * ' ||
      inputArray[inputArray.length - 1] === ' / ' ||
      inputArray[inputArray.length - 1] === '+ ' ||
      inputArray[inputArray.length - 1] === '- ' ||
      inputArray[inputArray.length - 1] === '* ' ||
      inputArray[inputArray.length - 1] === '/ ')
  ) {
    const temporaryValue = inputArray[inputArray.length - 1];
    inputArray.pop();
    inputArray.pop();
    inputArray.push(')');
    inputArray.push(temporaryValue);
    return;
  }
  if (
    inputArray[inputArray.length - 2] === ') ' &&
    inputArray[inputArray.length - 1] === ' ('
  ) {
    inputArray.pop();
    inputArray.push('*');
    inputArray.push(' (');
    return;
  }
}

function checkZeros() {
  const elementOfArray = inputValue.split(' ');
  const temporaryArray = [];
  elementOfArray.map(item => {
    const miniArray = item.split('');
    if (miniArray.length !== 1) {
      while (miniArray.indexOf('0') === 0) {
        miniArray.shift();
      }
    }
    temporaryArray.push(miniArray.join(''));
  });
  inputValue = temporaryArray.join(' ');
}

function checkDots() {
  const elementOfArray = inputValue.split(' ');
  elementOfArray.map(item => {
    const miniArray = item.split('');
    if (miniArray.includes('.')) {
      inputArray.pop();
    }
  });
}
