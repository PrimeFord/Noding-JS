const express = require("express");

//express app
const app = express();

// Registerung view engine (we using ejs)
app.set("view engine", "ejs");

// app.set("views", "myviews"); //we use this when we have a file with our view

//Listening for requests
app.listen(3000);

// Listening to GET request
app.get("/", (req, res) => {
  //   res.send("<p>Home Page</p>"); //another method apart from write() it sets the header and status code
  //   res.sendFile("./views/index.html", { root: __dirname }); //when sending a file --root: __dirname-- is to set a root path so the express will not go and look from the base path of the system
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs }); //using ejs //second arg is to pass properties to ejs file
});

app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>"); //another method apart from write() it sets the header and status code
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about"); //using ejs
});

// create blog form
app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//redirect
// app.get("/about-us", (req, res) => {
//   //   res.redirect("/about");
// });

//404 Page
app.use((req, res) => {
  //this 404 has to be the last which means after going throw all paths
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
