const string = require('./strings');

const person = {first_name: "JoHN", middle_name: "doe", last_name: "SMith"};

function toTitleCase(person) {
    return person.toLowerCase().split(' ').map(function (name) {
      return (name.charAt(0).toUpperCase() + name.slice(1));
    }).join(' ');
  }

  module.exports = toTitleCase
  


