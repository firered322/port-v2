const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server up and running at port: ${port}`);
});
