//Объектно-ориентированное программирование
function City(name, population) {
  this.name = name;
  this.population = population;
}
let c1 = new City("Москва", 1.1e7);
console.log(c1.name, c1.population);

City.prototype.show = function () {
  for (let i in this) console.log(`${i}=${this[i]}`);
};
let c2 = new City("Казань", 2.5e6);
c2.show();

function Student(name = "ноунейм") {
  this.name = name;
  this.say = function () {
    return `Я джун ${this.name}`;
  };
}
Student.prototype.say = function () {
  return `Я студент ${this.name}`;
};
let student1 = new Student("Олег");
console.log(student1.say());
///Наследование
function Metropolis(name, population, location) {
  City.apply(this, [name, population]);
  this.location = location;
}
Metropolis.prototype = new City();
Metropolis.prototype.constructor = Metropolis;
let c3 = new Metropolis("Екатеринбург", 3e6);
c3.show();
console.log(c3.constructor);

///Классы

class City1 {
  constructor(name, population) {
    this.name = name;
    this.population = population;
  }
  show() {
    ///
  }
}

let c4 = new City1("Москва", 1.1e7);
c4.show();

class Math2 {
  static isOdd(num) {
    return !!(num % 2);
  }
}
console.log(Math2.isOdd(23));
console.log(Math2.isOdd(56));

class Goods {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  show() {
    for (let prop in this) {
      console.log(`${prop}=${this[prop]}`);
    }
  }
}

class Phone extends Goods {
  constructor(title, price) {
    super(title, price);
    this.type = "смартфон";
  }
}

let goods = [];
goods.push(new Goods("Смартфон 1", 45000));
goods.push(new Goods("Смартфон 2", 95000));
goods.push(new Phone("Смартфон 3", 5000));

goods.forEach((item) => item.show());


goods.push(new Goods("Смартфон 1", 45000));
goods.push(new Goods("Смартфон 2", 95000));
goods.push(new Phone("Смартфон 3", 5000));

goods.forEach((item) => item.show());
