// Array
let obj = { name: 'Alex' }

let arr = [
    1,
    'Hello',
    obj,
    () => console.log('hello'),
    null,
    undefined,
    true,
];

let arr2 = new Array(5);

console.log(arr2, arr2.length);

console.log(arr.concat(arr2));
console.log(Array.isArray(arr));

let user = [
    'Kolin',
    'Sam',
    'Jane',
    'Michael',
];


// for of => to work with values
for (value of user) {
    console.log(value);
}

// for in => to work with indexes
for (index in user) {
    console.log(index);
}
// methods
/*
    arr.push() adds sth to the end of the arr
    arr.pop() removes sth from the end of arr
    arr.shift() removes an element from the beginning of arr
    arr.unshift() adds an element to the beginning of arr
    arr.splice() cuts an array, or removes one element to add another one or others. This method manipulates the arr.
    arr.slice() cuts an array without manipulating.

*/


// let ar = [12, 3, 4, "hey", true, function () {}, null, undefined];

// console.log(ar[0]);
// console.log(ar.at(-2));

// let ar = new Array(5, 1); // array length

// console.log(ar[100]);
// console.log(ar);

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7];

// // console.log(ar1.toString() + ar2.toString());
// console.log(ar1.join(" / "));

// console.log(typeof {});
// console.log(Array.isArray(0));

// let ar = [];

// console.log(ar == 0);
// console.log(ar == "0");

// let user = ["Abdulloh", "Muhammad", "Sardorbek", "Shohruh"];

// for (let i = 0; i < user.length; i++) {
//   console.log(user[i].toUpperCase());
// }

// console.log(user[0].toUpperCase());

// for (i of user) {
//   console.log(i.toUpperCase());
// }

// let ar = [1, 2, 3];

// ar.pop();
// ar.push(4);

// console.log(ar[1]);

// ar.unshift(0);
// ar.shift();

// console.log(ar[1]);

// let ar = [1, 2, 3, 4, 5];
// console.log(ar.slice(1, 3));
// console.log(ar);

// let ar = [1, 2, 3, 4, 5]; // insertion, remove

// console.log(ar.splice(2, 1, "Najmiddin tushundingizmi?"));
// console.log(ar);

// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];
// console.log(ar1.concat(ar2, ar1));

// console.log(ar1.indexOf(1, 3));
// console.log(ar1.lastIndexOf(1, 3));

// let str = "1,23,3,4";

// console.log(str.split(","));

// console.log(ar1.join("").split(","));

// geCacl(ar){

// }

// let ar1 = [1, 2, 3, 4];
// let ar2 = ["webbrain", "academy"];
// res = {
//   w: 1,
//   e: 2,
//   b: 2,
//   r: 1,
//   n: 1,
//   c: 1,
//   a: 3,
//   d: 1,
//   m: 1,
// };

// // ar1.reverse();
// console.log(ar1.includes(11));