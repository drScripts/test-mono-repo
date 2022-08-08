const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("YOWW HELLO WORLDDDD World 22224455!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
