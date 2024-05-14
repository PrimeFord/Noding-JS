// --Modules & Require--
const xyz = require("./people");

console, log(xyz);
console.log(xyz.people, xyz.ages);

//Destructuring
const { people } = require("./people");
const { people, ages } = require("./people");
console.log(people);
console.log(people, ages);

//operating system
const os = require("os");

console.log(os);
console.log(os.platform(), os.homedir());
