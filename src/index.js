import Notiflix from 'notiflix';
// import './sass/main.css';

const listEl = document.querySelector('[data-info="list"]');
const inputEl = document.querySelector('[data-info="input"]');
const historyEl = document.querySelector('.history__list');

let inputValue = '';
const inputArray = [];

listEl.addEventListener('click', e => {
  const value = e.target.dataset.info;
  if (value === '=') {
    onSolve();
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
    return;
  }
  if (value === 'clearInput') {
    while (inputArray.length !== 0) {
      inputArray.pop();
    }
    onInput();
    return;
  }
  if (value === 'list' || value === 'input') {
    return;
  }
  if (value === 'pi') {
    inputArray.push('3.1415');
    onInput();
    return;
  }

  if (value === 'x^2') {
    const num = Number(inputArray[inputArray.length - 1]);
    inputArray.pop();
    inputArray.push(`Math.pow(${num}, 2)`);
    onInput();
    return;
  }
  if (value === 'sqrt') {
    const num = Number(inputArray[inputArray.length - 1]);
    inputArray.pop();
    inputArray.push(`Math.sqrt(${num}, 2)`);
    onInput();
    return;
  }
  if (value === 'factorial') {
    inputArray.push('!');
    onInput(value);
    return;
  }
  if (value === 'clearHistory') {
    historyEl.innerHTML = '';
    return;
  }
  inputArray.push(value);
  onInput();
});

function onInput(symbol) {
  isCorrectInput(symbol);
  if (symbol === '.') {
    checkDots();
  }
  if (symbol === 'factorial') {
    checkFactorial();
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
  setTimeout(renderHistory(result), 1000);
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
    Notiflix.Notify.info('Це не може бути першим символом');
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
    Notiflix.Notify.info('На нуль ділити не можна');
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

function checkFactorial() {
  const elementOfArray = inputValue.split(' ');
  elementOfArray.map(item => {
    const miniArray = item.split('');
    const number = miniArray.length + 2;
    const count = Number(item);
    let numb = 1;
    for (let i = 1; i < count + 1; i += 1) {
      numb = numb * i;
    }
    let numbArray = numb.toString().split('');
    while (miniArray.length !== 0) {
      miniArray.pop();
    }
    for (let i = 1; i < number; i += 1) {
      inputArray.pop();
    }
    for (let a of numbArray) {
      inputArray.push(a);
    }
    numb = 1;
    if (miniArray.includes('.')) {
      inputArray.pop();
    }
  });
}

function renderHistory(result) {
  if (historyEl.children.length === 10) {
    historyEl.removeChild(historyEl.lastElementChild);
  }
  const markup = `<li class="history__item"><span class="opacity">${inputValue}</span>&nbsp&nbsp = &nbsp&nbsp<b>${result}</b></li>`;
  historyEl.insertAdjacentHTML('afterbegin', markup);
  const historyItemEl = document.querySelector('.history__item');
  historyItemEl.classList.add('animate');
}
