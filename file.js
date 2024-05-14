const fs = require("fs"); //fs means file system you can chage it

//Reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line of codes"); //to show it is asynchronous

//Writing files
//to replace what is in the text file
// fs.writeFile("./docs/blog1.txt", "hello, prime", () => {
//   console.log("file was written");
// });
// //if file does not exist it creates it
// fs.writeFile("./docs/blog2.txt", "hello, prime", () => {
//   console.log("file was written");
// });

//Directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file created");
//   });
// } else {
//   //delete folder if it exists
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//Deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
