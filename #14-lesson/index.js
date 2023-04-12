// Advanced
// simple object
let obj = {}

let map = new Map();

// setting key value pairs to the object
obj.name = 'Webbrain';
// the value will be added but the size of map will not change
// map.name = 'Academy';

map.set('name', "IT center");
// the key can be any type
map.set(false, "Sth");
// the same as String.includes
console.log(map.has(false));
// map.delete(key) deletes the value
// map.clear() cleares everything in map so size would become 0
console.log(obj, map);

// getting an exact value
console.log(map.get('name'));

// new Map receives an array which is an array of nested arrays that's lenght equal to 2 [key, value];
// new Map([[key, value], [key, value]])

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for(let value of map.keys()) shows only keys
// for(let value of map.entries()) shows only key value pairs in array
// for(let value of map) the same as entries
// for (let value of map.values()) {
//     console.log(value);
// }

const generator = map.entries();

console.log(generator);
// next method iterates over generator to show each key and value by one. When done is equal to true the
// iteration reached the end;
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// the way of transferring the new Map to simple object
const objectLiteral = Object.fromEntries(new Map([[false, 'sth'], ['name', 'Kelly']]));
console.log(objectLiteral);

console.log('========Set========');
// Set
let set = new Set();
set.add(obj);
set.add('string');
// set.delete(obj);
// set.clear();

console.log(set);
console.log(set.has(obj));

// WeakMap / WeakSet

// let map2 = new Map(...)
// map2 = null when the value of map2 set to null the previous value is stored in memory even when we do not use it. WeakMap and WeakSet do not have this behaviour