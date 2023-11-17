const express = require("express");
const router = express.Router();
const { apicall } = require("./middleware");

router.get("/", function (req, res) {
  res.json({ status: "success", message: "Welcome to Weather API" });
});

router.get("/getWeather/:city", async (req, res) => {
  const data = req.params.city;
  const result = await apicall(data)
  res.json(result)
});

module.exports = router;
