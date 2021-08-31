"use strict";

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
/*
function anything() {
  console.log(doneTodos);
}*/

var anything = function anything() {
  return {
    name: "Yung"
  };
};
