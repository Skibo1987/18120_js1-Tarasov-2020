//Управляющие конструкции

let quantity = 10; //количество товаров
let word = "товаров"; // слово

if (quantity % 100 < 5 || quantity % 100 > 20) {
  if (quantity % 10 == 1) word = "товар";
  if (quantity % 10 > 1 && quantity % 10 < 5) {
    word = "товара";
  }
}

console.log(`${quantity} ${word}`);

let num = Math.round(Math.random() * 100);
console.log(num % 2 ? `${num} нечетное` : `${num} четное`);
console.log(2 > 3 ? 4 : 5);

let day = 6; //воскресенье
let menu = "";
switch (day) {
  case 0:
    menu = "бутерброд с яйцом";
    break;
  case 1:
    menu = "каша овсянка";
    break;
  case 2:
    menu = "курица";
    break;
  case 3:
    menu = "салат";
    break;
  case 4:
    menu = "фрукты";
    break;
  case 5:
    menu = "стейк";
    break;
  case 6:
    menu = "шашлык рыбный";
    break;
}
console.log(day, menu);

console.clear();

let counter = 0;
while (counter < 5) {
  console.log(`${counter}, ${counter} <5 -> ${counter < 5}`);
  counter++;
}
console.clear();

for (let i = 0; i < 5; i++) {
  console.log("Шаг №" + i);
}

//Лаба про елочку))

let str = "*";
for (let i = 0; i < 5; i++) {
  console.log(str);
  str += "**";
}

let result = "";
const cols = 10,
  rows = 10;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    result += (i + 1) * (j + 1) + '\t';
  }
  result += "\n";
}

console.log(result);


///Home Work

