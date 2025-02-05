import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{head:"Enter your name here👇"});
});

app.post("/submit", (req, res) => {
  var n1=req.body["fName"];
  var n2=req.body["lName"];
  const l=n1.length + n2.length;
  res.render("index.ejs",{data:l});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
