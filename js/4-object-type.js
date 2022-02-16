//Объектные типы

let obj1 = {
  firstName: "John",
  profession: "frontender",
  head: {
    hair: "blue",
    turn: function () {
      return this.hair;
    },
  },
  say: function () {
    return `Я ${this.firstName}, работаю в ${this.profession}`;
  },
};

obj1.salary = 100000;
console.log(obj1);
console.log(obj1.firstName);
console.log(obj1["firstName"]);
console.log(obj1.head.hair);
console.log(obj1["head"]["hair"]);
console.log(obj1.say());
console.log(obj1.head.turn());

console.log("brain" in obj1);
console.log("say" in obj1);
console.log("turn" in obj1);

for (let prop in obj1) {
  console.log(prop + "=" + obj1[prop]);
}

let o1 = { name: "q" };
let o2 = { name: "q" };
console.log(o1 == o2);
console.log(o1 == { name: "q" });

o1.toString = function () {
  return "Разраб " + this.name;
};
console.log(o1 + "");
console.log(o1.toString());

let o3 = { name: "o3", age: 23 };

function addYear(delta) {
  this.age += delta;
}
addYear.apply(o3, [5]);

console.log(o3);

addYear.call(o3, 5);
console.log(o3);

let arr = [8, 4, 5, 7, 1];

console.log(arr[3]);
console.log(arr.length);
console.log(arr);

console.log('"' + arr.toString() + '"');

console.log('"' + arr.join("-") + '"');
console.log("<ul><li>" + arr.join("</li><li>") + "</ul>");

let arr1 = [6, 7, 8];
let arr2 = [1, 2, 3];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr4 = [8, 4, 5, 7, 1];
console.log(arr4.slice() == arr4);
console.log(arr4.slice(2));
// console.log(arr4.reverse());
console.log(arr4.splice(2));
console.log(arr4);

console.clear;

arr5 = [3,45,24,78,9,12];
arr5.forEach(function(item){
    console.log(item)
});
console.log(arr5);

let arr6 = arr5.map(function(item, index, array){
    console.log(item, index);
    return item*2;
});
console.log(arr6);


const n = 13;
const fib = [0,1];
for(let i=2; i<n; i++){
    fib[i]= fib[i-1]+fib[i-2];
}
console.log(fib);
