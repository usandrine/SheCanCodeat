const sumDigits = (n) => n === 0 ? 0 : (n % 10) + sumDigits(Math.floor(n / 10));
const power = (base, exponent) => exponent === 0 ? 1 : base * power(base, exponent - 1);

const reverseWords = (sentence) => sentence.split(" ").reverse().join(" ");

console.log(sumDigits(123));
console.log(power(2, 3));
console.log(reverseWords("Hello world"));
/* The recursion is less efficient  than iteration when it is in the case of large datasets beacuse
recursion is more effecient useful when we have less codes */
