const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

const db = require("./models");

app.use("/images", express.static(path.join(__dirname, "images")));

db.sequelize.sync().then(() => {
  console.log("Drop and Resync Db");
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AssurerPlus application." });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/litige.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
