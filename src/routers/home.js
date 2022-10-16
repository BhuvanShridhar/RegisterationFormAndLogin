const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

// router.post("/register", async (req, res) => {
//   try {
//     const addingRecords = new userSchema(req.body.name);
//     console.log(name);
//     const insertRecords = await addingRecords.save();
//     res.status(201).send(insertRecords);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

module.exports = router;
