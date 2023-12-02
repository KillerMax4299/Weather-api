const express = require("express");
const router = express.Router();
const { forecast, weather } = require("./middleware");

router.get("/", function (req, res) {
  res.json({ status: "success", message: "Welcome to Weather API" });
});

router.get("/getforecast/:city", async (req, res) => {
  const data = req.params.city;
  const result = await forecast(data)
  res.json(result)
});

router.get("/getweather/:city", async (req, res) => {
  const data = req.params.city;
  const result = await weather(data);
  res.json(result);
});

module.exports = router;
