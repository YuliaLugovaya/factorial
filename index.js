// Итерационный подсчет факториала
function factIterat(num) {
  if (num > 0) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr.reduce((acc, el) => acc * el);
  } else {
    return 'Значение аргумента меньше или равно нулю';
  }
}
console.log(factIterat(4))

// Рекурсивный расчет факториала
function factRec(num) {
  if (num > 0) {
    if (num === 1) {
      return 1;
    }
    return num * factRec(num - 1);
  } else {
    return 'Значение аргумента меньше или равно нулю';
  }
}
console.log(factRec(3))