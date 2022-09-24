const R = require("ramda");

// returns the number of countries in the world
const countryCount = (arr) => R.length(arr);

// finds the country with the most official languages, where they officially speak German (de).
const mostLanguagesCount = R.reduce(
  (acc, { languages }) => R.max(acc, R.length(languages)),
  0
);
const hasLanguage = R.curry((lang, arr) => arr.includes(lang));
const hasGerman = hasLanguage("de");

const germanCountriesWithMoreLanguages = (data) => {
  const mostLangCount = mostLanguagesCount(data);
  return R.pipe(
    R.filter(({ languages }) => hasGerman(languages)),
    R.filter(({ languages }) => R.length(languages) === mostLangCount),
    R.map(R.prop("country"))
  )(data);
};

// that counts all the official languages spoken in the listed countries.
const countAllUniqueLanguages = R.pipe(
  R.pluck("languages"),
  R.flatten,
  R.uniq,
  R.length
);

// to find the country with the highest number of official languages.
const languageCountPerCountry = (acc, { country, languages }) => (
  (acc[country] = R.length(languages)), acc
);

const countriesWithMoreLanguages = R.pipe(
  R.reduce(languageCountPerCountry, {}),
  R.invert,
  R.toPairs,
  R.sortBy(R.prop(0)),
  R.last,
  R.prop(1)
);

// to find the most common official language(s), of all countries.
const mostCommonLanguage = R.pipe(
  R.pluck("languages"),
  R.flatten,
  R.countBy(R.toLower),
  R.invert,
  R.toPairs,
  R.sortBy(R.prop(0)),
  R.last,
  R.prop(1)
);

const getCountryMetrics = R.applySpec({
  countryCount: countryCount,
  germanCountriesWithMoreLanguages: germanCountriesWithMoreLanguages,
  totalUniqueLanguages: countAllUniqueLanguages,
  moreLanguagesCountry: countriesWithMoreLanguages,
  mostCommonLanguage: mostCommonLanguage,
});

module.exports = {
  countryCount,
  germanCountriesWithMoreLanguages,
  countAllUniqueLanguages,
  countriesWithMoreLanguages,
  mostCommonLanguage,
  getCountryMetrics,
};
