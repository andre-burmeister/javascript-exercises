const repeatString = function(str, n) {
  if (n < 0) {
    return "ERROR"
  }
  let returnStr = ""
  for (let i=0; i<n; i++) {
    returnStr = returnStr + str
  }
  return returnStr
};

// Do not edit below this line
module.exports = repeatString;
