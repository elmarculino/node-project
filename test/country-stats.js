const assert = require("assert");

const {
  countryCount,
  germanCountriesWithMoreLanguages,
  countAllUniqueLanguages,
  countriesWithMoreLanguages,
  mostCommonLanguage,
  getCountryMetrics,
} = require("../src/country-stats.js");

const data = [
  { country: "US", languages: ["en"] },
  { country: "BE", languages: ["nl", "fr", "de"] },
  { country: "LX", languages: ["lx", "fr", "de"] },
  { country: "CA", languages: ["en", "fr"] },
  { country: "NL", languages: ["nl"] },
  { country: "DE", languages: ["de"] },
  { country: "ES", languages: ["es"] },
];

const data1 = [{ country: "BR", languages: ["pt"] }];

const data2 = [
  { country: "US", languages: ["en"] },
  { country: "CA", languages: ["en", "fr"] },
];

const data3 = [
  { country: "US", languages: ["en"] },
  { country: "CA", languages: ["en", "fr"] },
  { country: "BE", languages: ["nl", "fr", "de"] },
];

describe("countryCount", () => {
  it("should return 7 for countryCount of data", () => {
    assert.equal(countryCount(data), 7);
  });

  it("should return 1 for countryCount of data1", () => {
    assert.equal(countryCount(data1), 1);
  });

  it("should return 2 for countryCount of data2", () => {
    assert.equal(countryCount(data2), 2);
  });

  it("should return 3 for countryCount of data3", () => {
    assert.equal(countryCount(data3), 3);
  });
});

describe("germanCountriesWithMoreLanguages", () => {
  it("should return ['BE', 'LX'] for germanCountriesWithMoreLanguages of data", () => {
    assert.deepStrictEqual(germanCountriesWithMoreLanguages(data), [
      "BE",
      "LX",
    ]);
  });

  it("should return [] for germanCountriesWithMoreLanguages of data1", () => {
    assert.deepStrictEqual(germanCountriesWithMoreLanguages(data1), []);
  });

  it("should return [] for germanCountriesWithMoreLanguages of data2", () => {
    assert.deepStrictEqual(germanCountriesWithMoreLanguages(data2), []);
  });

  it("should return ['BE'] for germanCountriesWithMoreLanguages of data3", () => {
    assert.deepStrictEqual(germanCountriesWithMoreLanguages(data3), ["BE"]);
  });
});

describe("countAllUniqueLanguages", () => {
  it("should return 1 for countAllUniqueLanguages of data", () => {
    assert.equal(countAllUniqueLanguages(data), 6);
  });

  it("should return 1 for countAllUniqueLanguages of data1", () => {
    assert.equal(countAllUniqueLanguages(data1), 1);
  });

  it("should return 2 for countAllUniqueLanguages of data2", () => {
    assert.equal(countAllUniqueLanguages(data2), 2);
  });

  it("should return 4 for countAllUniqueLanguages of data3", () => {
    assert.equal(countAllUniqueLanguages(data3), 4);
  });
});

describe("countriesWithMoreLanguages", () => {
  it("should return ['BR'] for countriesWithMoreLanguages of data1", () => {
    assert.deepStrictEqual(countriesWithMoreLanguages(data1), ["BR"]);
  });

  it("should return ['CA'] for countriesWithMoreLanguages of data2", () => {
    assert.deepStrictEqual(countriesWithMoreLanguages(data2), ["CA"]);
  });

  it("should return ['BE'] for countriesWithMoreLanguages of data3", () => {
    assert.deepStrictEqual(countriesWithMoreLanguages(data3), ["BE"]);
  });

  it("should return ['BE', 'LX'] for countriesWithMoreLanguages of data", () => {
    assert.deepStrictEqual(countriesWithMoreLanguages(data), ["BE", "LX"]);
  });
});

describe("mostCommonLanguage", () => {
  it("should return ['fr', 'de'] for mostCommonLanguage of data", () => {
    assert.deepStrictEqual(mostCommonLanguage(data), ["fr", "de"]);
  });

  it("should return ['pt'] for mostCommonLanguage of data1", () => {
    assert.deepStrictEqual(mostCommonLanguage(data1), ["pt"]);
  });

  it("should return ['en'] for mostCommonLanguage of data2", () => {
    assert.deepStrictEqual(mostCommonLanguage(data2), ["en"]);
  });

  it("should return ['en', 'fr'] for mostCommonLanguage of data3", () => {
    assert.deepStrictEqual(mostCommonLanguage(data3), ["en", "fr"]);
  });
});
