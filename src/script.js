export function capitalize(string) {
  let firstLetter = string[0].toUpperCase();
  let remaining = string.slice(1);
  let capitalized = firstLetter + remaining;
  return capitalized;
}
