const visualnuts = require("./src/visualnuts.js");
const { getCountryMetrics } = require("./src/country-stats.js");

const limit = 100;

console.log("Exercise 1:");
for (let i = 1; i <= limit; i++) {
  const resp = visualnuts(i);
  console.log(resp);
}

const data = [
  { country: "US", languages: ["en"] },
  { country: "BE", languages: ["nl", "fr", "de"] },
  { country: "NL", languages: ["nl"] },
  { country: "DE", languages: ["de"] },
  { country: "ES", languages: ["es"] },
];

console.log("Exercise 2:");
const resp = getCountryMetrics(data);
console.log(resp);
