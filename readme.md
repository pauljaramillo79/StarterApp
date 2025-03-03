# starterapp

1. Create the root app folder
2. Initialize a Git repository
3. Create a 'client' and 'server' subfolders
4. Cd into 'server' folder and create a .gitignore file containing the following:

```Git
.env
request.rest

# dependencies
/node_modules
/client/node_modules
/.pnp
/client/.pnp
.pnp.js
/client/.pnp.js

# testing
/coverage
/client/coverage

# production
# /build
# /client/build

# misc
.DS_Store
/client/.DS_Store
.env.local
/client/.env.local
.env.development.local
/client/.env.development.local
.env.test.local
/client/.env.test.local
.env.production.local
/client/.env.production.local

npm-debug.log*
/client/npm-debug.log*
yarn-debug.log*
/client/yarn-debug.log*
yarn-error.log*
/client/yarn-error.log*
# Elastic Beanstalk Files
.elasticbeanstalk/*
!.elasticbeanstalk/*.cfg.yml
!.elasticbeanstalk/*.global.yml
```

5. Run the following commands in terminal

```
npm init -y
npm i body-parser
npm i cors
npm i dotenv
npm i express
npm i http
npm i --save-dev nodemon
```

6. Add the following line to the scripts dictionary in the package.json file:

```
"dev": "nodemon server.js"
```

7. Create a server.js file inside the server folder

```js
const express = require("express");
const PORT = process.env.PORT || 4001;
const path = require("path");
const app = express();
const http = require("http").createServer(app);

const bodyParser = require("body-parser");

// Fix for the Cannot Get... issue. Bsically redirects all server calls to Index.html and then lets React Router handle what to show on browser
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/routes"));

http.listen(PORT, () => {
  let host = http.address().address;
  let port = http.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
```

8. Open a new terminal window and cd into 'client' folder
9. Check the current node js version being used

```
nvm list
```

10. Select the desired node js version

```
nvm use v22.13.1
```

11. Run the following command:

```
npx create-react-app .
```
