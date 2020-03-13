const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds035553.mlab.com:35553/heroku_n1jwctd6", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api"));
app.use(require("./routes/html"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});