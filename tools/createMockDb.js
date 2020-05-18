/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors });
const filePath = path.join(__dirname, "db.json");

fs.writeFile(filePath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
