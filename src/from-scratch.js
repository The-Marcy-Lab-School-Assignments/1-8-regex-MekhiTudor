/** FEEDBACK: Great job getting all test cases to pass! */
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
  let match = str.match(/\d+/g)
  return match === null? [] : match;
   
}

const matchAllNumbersAsNumbers = (str) => {
  //regex to test for all numbers
  const arr = str.match( /\d+/g) || []
  //if arr is falsy return an empty string
  //if(!arr) return []
  //apply the number function to convert each element in the array to numbers.
  return arr.map(Number)
};

const matchAllWords = (str) => {
  //shout out ryan!
  const arr = str.match(/[a-z']+/gi) || []
  return arr
};

const replaceAllNumbers = (str) => {
  return str.replace(/\d+/g, "???")
};

const fixFileName = (str) => {
  return str.replace(/\s+/g, '_')
};

const nameRedacter = (str) => {
  return str.replace(/[A-Z]{2,}/g, "REDACTED")
};

const camelToSnakeCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
};

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
