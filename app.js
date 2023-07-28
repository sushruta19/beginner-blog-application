// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

// Creating an Express application
const app = express();

// Setting the view engine to use EJS templating
app.set('view engine', 'ejs');

// Configuring middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

// Making the lodash library available as a local variable in all views
app.locals._ = _;

const staticContentSchema = new mongoose.Schema({
  page : String,
  content : String
});
const StaticContent = mongoose.model("StaticContent", staticContentSchema);

const blogPostSchema = new mongoose.Schema({
  title : String,
  author : {
    type : String,
    default : "Soubhik"
  },
  content : String,
  createdAt : String
});
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// Connecting to blogDB (mongoDB database)
async function connectDatabase() {
  try {
    const mongoURI = "mongodb://127.0.0.1:27017/blogDB";
    mongoose.connect(mongoURI, {
      useNewUrlParser : true,
      useUnifiedTopology : true
    });
    console.log("Connected to Database!");
  } catch (error) {
    console.error("Error in connecting to database");
  }
}
connectDatabase();

// Home route handler
app.get("/", async function(req, res) {
  try {
    let staticContent = await StaticContent.findOne({page : /home/i}).select('content');
    let posts = await BlogPost.find({});
    res.render("home", {
      staticContent : staticContent.content,
      posts : posts
    });
  } catch (error) {
    console.error("Error in GET /", error);
  }
});

// About route handler
app.get("/about", async function(req, res) {
  try {
    let staticContent = await StaticContent.findOne({page : /about/i}).select('content');
    res.render("about", {
      staticContent : staticContent.content
    });
  } catch (error) {
    console.error("Error in get /about", error);
  }
});

// Contact route handler
app.get("/contact", async function(req, res) {
  try {
    let staticContent = await StaticContent.findOne({page : /contact/i}).select('content');
    res.render("contact", {
      staticContent : staticContent.content
    });
  } catch (error) {
    console.error("Error in get /contact", error);
  }
});

// Compose route handlers
app.get("/compose", function(req, res) {
  res.render("compose");
});

// Handling the POST request when creating a new blog post
app.post("/compose", async function(req, res) {
  try {
    const post = {
      title : req.body.title,
      author : req.body.author,
      content : req.body.content,
      createdAt : req.body.createdAt
    }
    await BlogPost.create(post);
    res.redirect("/");        // Redirecting the user back to the home page
  } catch (error) {
    console.error("Error in post /compose", error);
  }
});

// Dynamic route handler of individual blogs
app.get("/posts/:postTitle", async function(req, res) {
  try {
    const title = req.params.postTitle;
    const post = await BlogPost.findOne({
      title : title
    });

    if (!post) {
      // Post not found in the database
      return res.status(404).render("404");
    }
    res.render("post", {
      post : post
    });
  } catch (error) {
    console.log("Error in get /posts/", error);
  }  
});

// Catch-all route for non-existent routes
app.get("*", async function(req, res) {
  try {
    res.status(404).render("404");
  } catch (error) {
    console.error("Error in 404 route", error);
  }
});

// Starting the server
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started!");
});

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log("Closed Database connection");
    process.exit(0);
  } catch (error) {
    console.error("Error in closing connection", error);
    process.exit(1);
  }
});