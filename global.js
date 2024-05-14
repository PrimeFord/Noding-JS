// --Global Object--

console.log(global);

setTimeout(() => {
  //adding global.setTimeout is not necesssary
  console.log("in time out");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in interval");
}, 1000);

console.log(__dirname); //gives the absolute path of the current folder
console.log(__filename); //gives the absolute path of the file folder
