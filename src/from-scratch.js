const helloWorldRegex = (str) => {
  return /^hello world/i.test(str)
};

const hasAVowel = (str) => {
  return /[aieou]/i.test(str)
};

const hasCatsOrDogs = (str) => {
  return /(cats|dogs)/i.test(str)
};

const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str)
};

const hasPunctuationEnd = (str) => {
  return /[.?!]$/i.test(str)
};

const hasNothingOrDigits = (str) => {
  return /^(\s*|\d+)$/.test(str)
};

const hasNoFlippers = (str) => {
  return /^[^BCcDEHIKOoXxl]*$/.test(str)
};

const isValidEmail = (str) => {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(str)
};

const isValidPhoneNumber = (str) => {
  return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(str)
};

const matchAllNumbers = (str) => {
  let regex = /\d+/g
  let match = str.match(regex)
  return match === null? [] : match;
   
}

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
