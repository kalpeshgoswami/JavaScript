let text = "Smart Learning";

let text2 = "Learn JavaScript";

// ==> split method is used to convert a string into an array.

console.log(text.split("  "));
console.log(text2.split("  "));

console.log(text.split(" "));
console.log(text2.split(" "));

// ==> startsWith method check a string starts with 

console.log(text.startsWith("S"));
console.log(text2.startsWith("L"));

// ==> substring method extracts characters from a string 

console.log("substring :-", text.substring(2, 7));
console.log("substring :-", text2.substring(6, 16));
console.log("substring :-", text2.substring(-1));

// ==> toLowerCase method converts all characters in lower-case

console.log(text.toLowerCase());
console.log(text2.toLowerCase());

// ==> toUpperCase method converts all characters in upper-case

console.log(text.toUpperCase());
console.log(text2.toUpperCase());


let text3 = "       welcome       "

console.log(text3.length);

// ==> trim method removes whitespace from both the beginning and the end of the string

console.log(text3.trim());

// ==> trimStart method removes whitespace only from the beginning of the string

console.log(text3.trimStart());

// ==> trimEnd method removes whitespace  only from the end of the string

console.log(text3.trimEnd());