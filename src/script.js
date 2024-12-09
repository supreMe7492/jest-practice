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
