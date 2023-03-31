// String
// const str1 = "Webbrain";
// const str2 = 'webbrain';
// const str3 = `webbrain`;

// escape correctors \ \n \t ...

// const str1 = 'webbrain';
// const str2 = new String('web');

// console.log(str1, str2);
// console.log(typeof str2);

// console.log(str1.localeCompare(str2));
// the result is 1 because str1 includes the str2;
// console.log(str2.localeCompare(str1));
// the result is -1 because the str2 does not includes the str1

// let str3 = 'web';

// console.log(str2.localeCompare(str3));
// the result is 0 because the content of str2 is the same as the content str3

// Note: Strings are immutable, so we cannot change the content or letters by accessing with str[0] ... index

const str = "HEllO";

// console.log(str.toLocaleLowerCase('en-US'));

// console.log(str.lastIndexOf('l'));
// console.log(str.indexOf('l'));

console.log(str.padStart(10, "-"));
console.log(str.padEnd(10, "."));

// Itirates by every char in the string
for (char of str) {
    console.log(char);
}

const newStr = "HEllo Web Academy Center";

console.log(newStr.split(" ", 3));