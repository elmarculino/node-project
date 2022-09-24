// returns the number of countries in the world
// finds the country with the most official languages, where they officially speak German (de).
// that counts all the official languages spoken in the listed countries.
// to find the country with the highest number of official languages.
// to find the most common official language(s), of all countries.

const data = [
  {
    country: "US",
    languages: ["en"],
  },
  {
    country: "BE",
    languages: ["nl", "fr", "de"],
  },
  {
    country: "NL",
    languages: ["nl"],
  },
  {
    country: "DE",
    languages: ["de"],
  },
  {
    country: "ES",
    languages: ["es"],
  },
];

const countryCount = (arr) => data.length;

const mostLanguages = (arr, lang) =>
  arr
    .filter(({ languages }) => languages.includes(lang))
    .sort((x, y) => x.languages.length - y.languages.length)
    .slice(-1)[0].country;

const languageCount = (arr) =>
  arr.map((country) => ({
    ...country,
    languageCount: country.languages.length,
  }));

const mostLanguagesCountry = (arr) =>
  arr.sort((x, y) => x.languages.length - y.languages.length).slice(-1)[0]
    .country;

const mostCommonLanguage = (arr) => {
  const langArr = arr.map(({ languages }) => languages).flat();

  return langArr.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), {}));
};
console.log(countryCount(data));
console.log(mostLanguages(data, "de"));
console.log(languageCount(data));
console.log(mostLanguagesCountry(data));
console.log(mostCommonLanguage(data));
