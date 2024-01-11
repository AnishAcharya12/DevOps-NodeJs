var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello Anish" }');
});

app.get("/home", function (req, res) {
  res.send('{ "response": "Hello Anish from home" }');
});
app.get("/home/room", function (req, res) {
  res.send('{ "response": " Great!, It works! Hello Anish from home room" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
