const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/registeration")
  .then(() => {
    console.log("connection Succcessful");
  })
  .catch((Error) => {
    console.log("Connection not Successful");
  });
