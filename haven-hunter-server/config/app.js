const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Import the User schema from "./mongo"
const User = require("./mongo");

mongoose
  .connect("mongodb://0.0.0.0:27017/heavenhunter-database")
  .then(() => {
    console.log("mongodb connected (app.js)");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route to handle GET request
app.get("/", cors(), (req, res) => {
  // Add your logic here if needed
  res.send("Hello World!");
});

// Route to handle POST request for login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      // You may perform password comparison here if needed
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

// Route to handle POST request for signup
app.post("/signup", async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      const newUser = new User({
        email: email,
        password: password,
        fullName: fullName,
      });

      await newUser.save();
      res.json("success");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
