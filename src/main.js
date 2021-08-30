// var, const & let
 {// isso é um escopo, abre e fecha chaves
  const car = "fusca";
}

console.log(car) /* vai dar erro pois o const 
deixa o car isolado no escopo */

// var, const & let
const person = { name: "Yun"};

person.name = "Olivia"

console.log(person)// mutabilidade

// dar preferência sempre ao const por tornar o código mais seguro
// var, const & let
for (let index = 0; index < 10; index++) {
 console.log(index);
}

console.log(index)