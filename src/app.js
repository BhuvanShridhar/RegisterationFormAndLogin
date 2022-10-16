const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");
const Register = require("./models/homeSchema");
const port = process.env.port || 8000;

require("./db/connect");
const router = require("./routers/home");
const { join } = require("path");

const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Server running Successsfully hello from Anirban");
// });

// app.use(express.static(__dirname + "/public"));
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use("/", router);

app.get("/register", (req, res) => {
  res.render("register");
});
// app.use(express.static("public"));

// create a new user in our database
app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.name);
    // res.send(req.body.name);
    const password = req.body.password;
    const cpassowrd = req.body.cpassowrd;
    if (password === cpassowrd) {
      const registerUser = new Register({
        name: req.body.name,
        number: req.body.number,
        Email: req.body.Email,
        password: req.body.password,
        cpassowrd: req.body.cpassowrd,
      });

      const registered = await registerUser.save();
      res.status(201).render("register");
    } else {
      res.send("Password are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`connection Succesful on ${port}`);
});
