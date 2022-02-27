const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
// const favoritesRoute =  require("./routes/addFovorite");
// const multer = require("multer");
// const path = require("path");

dotenv.config();
//allow app to use json data
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

//
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

console.log("Amanda");
app.listen("5000", () => {
  console.log("listening on 5000");
});
