import express from "express";
import bodyParser from "body-parser";

const app = express();

// //app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/:name", (req, res) => {
  //console.log(req.params);
  res.status(404).send("Not found");
});

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Shubha",
//     age: "35",
//   };
//   res.send(user);
// });

// app.post("/profile", (req, res) => {
//   console.log(req.body);
//   res.send("Success");
// });

app.listen(4000);
