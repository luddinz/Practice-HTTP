const fs = require("fs");

function writeJson(data) {
  fs.writeFileSync("./object.json", JSON.stringify(data));
}

writeJson({
  name: "Fariz Muhammad",
  job: "IT Support",
  address: "Ciater, Tangerang Selatan",
});
