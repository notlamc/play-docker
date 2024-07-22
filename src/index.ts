import dotenv from "dotenv";

dotenv.config();

import express from "express";

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
