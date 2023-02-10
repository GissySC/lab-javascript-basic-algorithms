//Iteration 1: Names and Input
let hacker1 ="Nacho";
console.log(`The driver's name is ${hacker1}`);
let hacker2 ="Adrián";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration 3: Loops
//3.1
let result = "";
for (let value of hacker1) {
  result += value.toUpperCase() + " ";
}
console.log(result);

//3.2
let reverse = "";
for (let i = hacker2.length -1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);

//3.3
let comparisonResult = 0;

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    comparisonResult = -1;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    comparisonResult = 1;
    break;
 }
}

if (comparisonResult === -1) {
  console.log("The driver's name goes first.");
} else if (comparisonResult === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else { 
  console.log("What?! You both have the same name?");
}

//*******************Bonus 1:*******************
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non consequat turpis. Duis volutpat pharetra sagittis. Integer cursus eros ex, sit amet laoreet elit maximus vitae. Duis rutrum scelerisque nibh sit amet sagittis. Aliquam mauris nibh, euismod nec ligula nec, rutrum rutrum dui. Nulla luctus arcu et lectus placerat interdum. Sed ultrices quis quam sollicitudin dapibus. Cras non dignissim lectus, vitae congue felis. Fusce a est porta, lacinia sem nec, pharetra libero. Nullam quis elit magna. Etiam maximus ipsum ligula, ac porttitor nisi varius ut. Aliquam non purus lobortis, sagittis velit in, molestie turpis. Nullam ligula tortor, vulputate eget eros non, finibus interdum sem. Morbi vitae mi auctor, feugiat erat at, bibendum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vestibulum quam et bibendum finibus. In in eros a justo placerat porta. Nunc sit amet dui in augue aliquet tempor quis eget leo. Praesent turpis enim, bibendum convallis neque et, tincidunt posuere erat. Nunc at sagittis massa, in sodales lectus. Etiam volutpat rutrum velit vitae fringilla. Donec eget placerat metus, et tincidunt ante. Praesent malesuada lobortis lacus tincidunt lobortis. Maecenas et turpis vel nunc commodo rutrum vitae eget tortor. Proin a cursus lorem. Praesent nunc nunc, blandit id velit consequat, mattis tincidunt tellus. Curabitur eu venenatis lectus, a luctus eros. Aliquam tempus leo in egestas sagittis. Cras sed justo vitae urna blandit dapibus et vitae sem. Sed eleifend semper felis, a cursus orci tincidunt pharetra. Pellentesque eget varius est. Suspendisse vitae maximus urna. Proin vehicula vel sapien et porttitor. Sed ac suscipit justo. Integer ac nisi at purus interdum venenatis a quis lacus. Etiam eu pellentesque purus. Vestibulum aliquam arcu et rhoncus pretium."

let wordsCounter = loremIpsum.split(' ').length;
console.log(`The number of words in the loremIpsum string is ${wordsCounter}.`);

//*******************Bonus 2:*******************
let phraseToCheck = "Was it a car or a cat I saw?";

const cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");

let isPalindrome = true;

for (let i=0; i < cleanPhrase.length/2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length -1 -i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${phraseToCheck} is a palindrome.`);
} else {
  console.log(`${phraseToCheck} is not a palindrome.`);
}
