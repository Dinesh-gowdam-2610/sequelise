const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/productRoutes.js");
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("Working");
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
