const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/heavenhunter-database")
  .then(() => {
    console.log("mongodb connected (mango.js)");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

const userSchema = new mongoose.Schema({
  fullName: {
    type: String, // Full Name field
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
