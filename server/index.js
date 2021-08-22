const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hi there");
});

app.listen(3004, () => {
  console.log("Listen on the port 3004...");
});
