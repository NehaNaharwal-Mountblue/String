const toTitleCase = require('./string4');

const person = {first_name: "JoHN", middle_name: "doe", last_name: "SMith"};

console.log(toTitleCase(person.first_name + " " + person.last_name));
console.log(toTitleCase(person.first_name + " " + person.middle_name+ " " + person.last_name));