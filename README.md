# Beginner Blog Application
A simple blog website created using EJS templates and Express with MongoDB database integration. It demonstrates how to render EJS templates, utilize dynamic Express routes, and perform CRUD operations with MongoDB.

## Features
* Simple Node.js web application that renders HTML content using EJS templates.
* Every new post created gets a dynamic route for individual access.
* Bootstrap has been used for styling.
* Integration with MongoDB to store and retrieve blog posts and static content.

## Directory Structure
```
📦 beginner-blog-application
 ┣ 📂 public
 ┃ ┣ 📂 css
 ┃ ┃ ┗ 📜 styles.css
 ┃ ┗ 📂 js
 ┃   ┗ 📜 compose-script.js
 ┣ 📂 views
 ┃ ┣ 📜 home.ejs
 ┃ ┣ 📜 about.ejs
 ┃ ┣ 📜 contact.ejs
 ┃ ┣ 📜 compose.ejs
 ┃ ┣ 📜 post.ejs
 ┃ ┣ 📜 404.ejs
 ┃ ┗ 📂 partials
 ┃   ┣ 📜 header.ejs
 ┃   ┗ 📜 footer.ejs
 ┣ 📜 app.js
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┗ 📜 insertStaticContent.js
```

In this directory structure:

* The public directory contains the static assets for your application, such as the css directory with the styles.css file and the js directory with the compose-script.js file.
* The views directory holds the EJS templates for your application, including home.ejs, about.ejs, contact.ejs, compose.ejs, post.ejs, and 404.ejs.
    * Additionally, the partials directory inside views contains the reusable partial templates, specifically header.ejs and footer.ejs.
* The **app.js** file is responsible for handling all the routes and logic of your blog application.
* The insertStaticContent.js file in the root directory is used to insert static content into the MongoDB collection.
* The package.json and package-lock.json files store the configuration and dependencies for your project.

## How to run the project in your local system?
- Make sure that you have node, git and MongoDB installed in your system.
- Clone the repository to your local machine
```bash
git clone https://github.com/sushruta19/beginner-blog-application.git
```
- Navigate to the `beginner-blog-application` directory
```bash
cd beginner-blog-application
```
- Install the required dependencies by running the following command:
```bash
npm install
```
- Once the dependencies are installed, run the `insertStaticContent.js` script.
```bash
node insertStaticContent.js
```
- Start the server by running the command
```bash
npm start
```
- This will start our application. Our server is running at `localhost:3000`.
- Open a web browser and visit http://localhost:3000 to access the Blog
- You will see the `home.ejs` file being rendered.
- To create a new post, go to `localhost:3000/compose`.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements for the Blog-Application, please do the following steps : 
- **Fork** the repository. <br>![Fork Icon](https://i.imgur.com/an7hXVR.png)
- **Clone** the repository: Clone the forked repository to your local machine using the following command:
```bash
git clone <forked-repo-url>
```
This will create a local copy of the project that you can work on.
- **Create a new branch**: Before making any changes, create a new branch to work on your changes. Naming the branch based on the feature or bug fix you're working on is a good practice. For example:
```bash
git checkout -b improvement/ui-refactoring  #for improvements
git checkout -b bugfix/login-issue          #for bugfix
git checkout -b feature/user-registration   #for new features
git checkout -b hotfix/security-vulnerable  #for hotfix
```
Here the slash(/) doesn't denote any address but its a part of the new branch name "bugfix/anything", etc.
- **Make your changes**: Make the necessary changes or additions to the project
- Stage, commit and push your changes to **your** remote forked repo at the new branch(not the master branch of your remote forked repo)
```bash
git add .
git commit -m "Add a concise commit message describing the changes"
git push origin <new-branch-you-worked-on>
```
- **Create a pull request**: Then, from your forked repository's page on GitHub, click on the "New pull request" button to create a pull request (PR) to the original repository. Provide a clear description of the changes you've made and why they are valuable. It's also helpful to reference any relevant issues or feature requests.
- The project maintainers or other contributors may provide feedback or request changes on your pull request. Be responsive and address the feedback accordingly. This may involve making additional commits to your branch based on the feedback.
- Once your pull request is approved, the project maintainers will merge your changes into the main branch. At this point, your contributions are part of the project.

Please make sure to follow these guidelines to ensure a smooth and collaborative contribution process. If you have any questions or need further assistance, feel free to reach out to us.

Thank you for your contribution!

#### ! Please put `node_modules/` in your `.gitignore` file. ! Do not push them in remote repo!
## License
This project is licensed under the [MIT License](LICENSE)
