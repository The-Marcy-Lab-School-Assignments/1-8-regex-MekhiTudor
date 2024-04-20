const fixFileName = (str) => {
    return str.replace(/\s+/g, '_')
  };

  console.log(fixFileName("hello  world"))