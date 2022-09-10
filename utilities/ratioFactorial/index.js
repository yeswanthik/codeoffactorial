const fact = require("../factorial/index.js");
const ratio = require("../ratio/index.js");
function ratioAndFactorial(a, b, c) {
  return ratio(a, b), fact(c);
}

module.exports = ratioAndFactorial;
