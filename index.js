const express = require("express");

const app = express();

// view engine setup
app.set("views", require("path").join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(require("path").join(__dirname, "public")));

const port = process.env.PORT || 5000;

//routes
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server up and running at port: ${port}`);
});
