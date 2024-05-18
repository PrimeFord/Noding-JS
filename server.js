const http = require("http");
const fs = require("fs");
const _ = require("lodash");

//creating http you can assign const too
const server = http.createServer((req, res) => {
  //Using Lodash
  const num = _.random(0, 20);
  console.log(num);
  const greet = _.once(() => {
    console.log("hello");
  });
  greet();
  greet();
  //   console.log("request made");
  // console.log(req.url, req.method); //request object in console

  //we can use response header to do stuffs like set cookies

  //set header content type
  res.setHeader("Content-Type", "text/html"); //setting the header for content type

  //routing to prevent showing same content in diffrent routes

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      //response code
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      //response code
      res.statusCode = 200;
      break;
    case "/about-me": //redirecting it to /about if i have changed it
      //response code
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      //response code
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data); // the easier method if we are sending/writing just one thing we'd put data inside res.end()
      // res.end();

      res.end(data);
    }
  });

  //   res.write('<head><link rel="stylesheet" href="#"></head>');
  //   res.write("<h1>hello prime</h1>"); //writing the content
  //   res.write("<h2>hello prime again</h2>");

  //using html file instead of writing
  // res.end(); // to end response and send to browser
});

//listening method to allow us perform a request
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
}); //default is localhost(loop back for your computer ----127.0.0.1----) we just typed it while portnumber is like a gateway since diffrent app connect to internet so they all do it on diffrent port numbers to keep informations seperate (common is 3000)
