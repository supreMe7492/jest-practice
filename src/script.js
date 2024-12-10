export function capitalize(string) {
  let firstLetter = string[0].toUpperCase();
  let remaining = string.slice(1);
  let capitalized = firstLetter + remaining;
  return capitalized;
}

export function reversedString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let last = string[i];
    string = string.slice(0, i);
    reversed = reversed.concat(last);
  }
  return reversed;
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export function ceaserCipher(string, range) {
  let cipher = "";

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90 - range) ||
      (charCode >= 97 && charCode <= 122 - range)
    ) {
      let newCharCode = charCode + range;
      cipher = cipher.concat(String.fromCharCode(newCharCode));
    } else if (charCode >= 90 - range && charCode <= 90) {
      let newCharCode = 65 - 26 + range;
      cipher = cipher.concat(String.fromCharCode(newCharCode));
    } else if (charCode >= 97 - range && charCode <= 122) {
      let newCharCode = 97 - 26 + range;
      cipher = cipher.concat(String.fromCharCode(newCharCode));
    } else {
      cipher = cipher.concat(string[i]);
    }
  }

  return cipher;
}

export function analyzeArray(arr) {
  const average =
    arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0) / arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const length = arr.length;
  return {
    average,
    max,
    min,
    length,
  };
}
