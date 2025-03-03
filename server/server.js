const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 4001;
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const credentials = require("./middleware/credentials");

// const bodyParser = require("body-parser");

// app.use(
//   cors({
//     origin: process.env.NODE_ENV === "production" ? "https://www.wgsitetest.com" : "http://localhost:3000",
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Built in Middleware
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from React in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  // Redirect all server calls to React index.html for client-side routing
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

// API Routes
app.use("/", require("./routes/routes"));

http.listen(PORT, () => {
  let host = http.address().address;
  let port = http.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
