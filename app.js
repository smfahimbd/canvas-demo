const express = require("express");
const { createCanvas } = require("canvas");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  const canvas = createCanvas(500, 200);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, 500, 200);

  ctx.fillStyle = "#fff";
  ctx.font = "30px Arial";
  ctx.fillText("Canvas API Working ✅", 80, 100);

  res.setHeader("Content-Type", "image/png");
  res.send(canvas.toBuffer());
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
