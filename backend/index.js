const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const chatRoutes = require("./src/routes/chatRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", chatRoutes);

app.get("/", (req, res) => {
  res.send("ChatGPT Clone Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
