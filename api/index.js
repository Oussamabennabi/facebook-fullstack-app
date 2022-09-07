"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const path = require("path");
const cors = require("cors");
const fs = require("fs-extra");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

// app.use(express.static(__dirname + "/public/images"));

// app.use("/videos", express.static(path.join(__dirname, "public/videos")));
//middleware


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("cross-origin-resource-policy", "same-origin");
  next();
});

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      let type = req.params.type;
      let path = `./public/${type}s`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
});

app.post("/api/upload/:type", upload.single("file"), (req, res) => {
  res.status(200).send("FILE SUCCESSFULLY UPLOADED");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
