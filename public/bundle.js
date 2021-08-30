"use strict";

// var, const & let
{
  // isso é um escopo, abre e fecha chaves
  var _car = "fusca";
}
console.log(car);
/* vai dar erro pois o const 
deixa o car isolado no escopo */
// var, const & let

var person = {
  name: "Yun"
};
person.name = "Olivia";
console.log(person); // mutabilidade
// dar preferência sempre ao const por tornar o código mais seguro
// var, const & let

for (var _index = 0; _index < 10; _index++) {
  console.log(_index);
}

console.log(index);
