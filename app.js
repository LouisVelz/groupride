const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const rideEvent = require("./routes/api/ride_event");
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
  mongoose.set('useFindAndModify', false);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) =>{
  res.send("Whats up?");
});
app.use("/api/users", users);
app.use("/api/rideevent", rideEvent);

app.use(passport.initialize());


require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
