const todos = [
  { text: "Lavar a louça", done: false },
  { text: "Apanhar a lixo", done: true },
  { text: "Dobrar as roupas", done: true },
];

const doneTodos = todos.filter((todo) => todo.text === "Dobrar as roupas");

console.log(doneTodos);
/*
function anything() {
  console.log(doneTodos);
}*/

const anything = () => ({ name: "Yung" });
