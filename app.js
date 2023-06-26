// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

// Pre-defined content for different sections of the website
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Array to store the blog posts
const posts = [];

// Creating an Express application
const app = express();

// Setting the view engine to use EJS templating
app.set('view engine', 'ejs');

// Configuring middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Making the lodash library available as a local variable in all views
app.locals._ = _;

// Home route handler
app.get("/", function(req, res) {
  res.render("home", {
    startingContent : homeStartingContent,
    postsVar : posts
  });
});

// About route handler
app.get("/about", function(req, res) {
  res.render("about", {aboutContentVar : aboutContent});
});

// Contact route handler
app.get("/contact", function(req, res) {
  res.render("contact", {contactContentVar : contactContent});
});

// Compose route handlers
app.get("/compose", function(req, res) {
  res.render("compose");
});

// Handling the POST request when creating a new blog post
app.post("/compose", function(req, res) {
  const post = {
    title : req.body.postTitle, // Extracting the title from the request body
    content : req.body.postBody // Extracting the content from the request body
  };
  posts.push(post);          // Adding the new post to the global posts array
  
  res.redirect("/");        // Redirecting the user back to the home page
});

// Dynamic route handler of individual blogs
app.get("/posts/:postName", function(req, res) {
  const postName = _.lowerCase(req.params.postName);
  for(let i = 0; i < posts.length; i++) {
    if(_.lowerCase(posts[i].title) === postName) {  // Checking if the post title matches the requested post name
      res.render("post", {
        postTitleVar : posts[i].title,            // Passing the post title to the post.ejs view
        postContentVar : posts[i].content         // Passing the post content to the post.ejs view
      });
    }
  }
});

// Starting the server
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
