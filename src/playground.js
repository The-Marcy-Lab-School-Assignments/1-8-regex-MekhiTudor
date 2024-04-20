const hasCatsOrDogs = (str) => {
    return /[cat, dog]/i.test(str)
  };

console.log(hasCatsOrDogs('cat'))