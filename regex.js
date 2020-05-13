'use strict'
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var match = alphabet.match(/def/i);

console.log(match);
console.log(match.length)

var match = alphabet.search(/def/i);

console.log(match);