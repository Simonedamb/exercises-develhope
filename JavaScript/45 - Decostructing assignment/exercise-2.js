const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let { id: a, firstName: b, lastName: c, age: d } = person;

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

console.log(a, b, c, d);
// console.log(id, firstName, lastName, age);
