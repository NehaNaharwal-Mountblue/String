const string = require('./strings');

function convertToString(arr){
    return arr.toString(" ").replace(/,/g," ");
}

module.exports = convertToString


