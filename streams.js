const fs = require("fs");

//Reading stream from a file
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
}); // use encoding if you dont want to use .toString()

//Writing stream from a file
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log("----NEW CHUNK----");
  console.log(chunk); //chunks will be in a buffer format then you will need .toString to show it
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
}); //.on() is an eventListener like in js

//Pipe is a shorter way of using read.on()
//Piping
readStream.pipe(writeStream);
