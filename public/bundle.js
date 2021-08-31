"use strict";

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index) {
  numbers[index] = number + 1;
});
var newNumbers = numbers.map(function (number) {
  return number + 1;
});
var total = numbers.reduce(function (total, next) {
  return total + next; // 0 + 1, 1 + 2
});
console.log(total);
console.log(newNumbers);
console.log(numbers);
var todos = [{
  text: "Lavar a louça",
  done: false
}, {
  text: "Apanhar a lixo",
  done: true
}, {
  text: "Dobrar as roupas",
  done: true
}];
var doneTodos = todos.filter(function (todo) {
  return todo.text === "Dobrar as roupas";
});
console.log(doneTodos);
var find = todos.find(function (todo) {
  return todo.text === "Dobrar as roupas";
});
console.log(find);
var index = todos.findIndex(function (todo) {
  return todo.text === "Dobrar as roupas";
});
console.log(index);
var cars = ["fusca", "civic", "hb20"];
var hasFusca = cars.some(function (car) {
  return car === "fusca";
});
console.log(hasFusca);
