//Функции

//Декларативный стиль
let c = 1;
function sum(a, b, c) {
  return a + b + c;
}

console.log(Math.random());
console.log(sum(2, 5, c));

function hi(name = "traveller...") {
  return `HI dear, ${name}`;
}
console.log(hi("Jone"));
console.log(hi());

//стиль функция-выражение

let foo = function () {
  return "....";
};
console.log(foo());

//функция-стрелка
//function sum(a, b) {
//   return a + b;
//}
//console.log(sum(2, 5));

const sum_1 = (a, b) => a + b;
let result = sum_1(2, 5);
console.log(result);

function hi_1(name, fn1, fn2) {
  fn1();
  let str = `Hi deare, ${name}`;
  fn2();
  return str;
}

function foo_1() {
  console.log("foo");
}

hi_1("Djedai", foo_1, () => console.log("Great!"));

// Написать функцию square() для нахождения площади прямоугольника

function square(width, height) {
  return width * height;
}
console.log(square(10, 20) == 200);

//напишите функцию sign(t) , которая принимает аргумент t и возвращает 1, если число t - полложительное , и -1, если t - отрицательное. В противном случае - 0*/

//const sign = (t) => (t > 0 ? 1 : t < 0 ? -1 : 0);

function sign(t) {
  if (t > 0) {
    return 1;
  }
  if (t < 0) {
    return -1;
  }
  return 0;
}

console.log(sign(3) == 1);
console.log(sign(-11) == -1);
console.log(sign(0) == 0);

// Написать функцию rand(), которая возвращает случайное целое число в диапазоне от n до m

const rand = function (n, m) {
  return Math.round(Math.random() * (m - n) + n);
};
let t1 = rand(10, 20);
console.log(t1 >= 10 && t1 <= 20);

//напишите функцию counter(), которая при каждом вызове будет возвращать число, на единицу большее предыдущего

function makeGenerator(i = 0) {
  return function () {
    return i++;
  };
}
const counter = makeGenerator();
console.log(counter());
console.log(counter());
console.log(counter());

console.clear;

function summa(...args){
    console.log(args.length)
    console.log(args[0])
    console.log(args[1])

    let result = 0;
    for(let i = 0; i<args.length; i++){
        result+=args[i];
    }
    return result;
}
summa(100,200)
console.log(summa(100,200));
