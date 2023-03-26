// const obj = new Object({ name: 'kelly });

// console.log(obj);

let account = {
    name: "Webbrain Academy",
    major: "Frontend",
    founded: 2020,
    'full name': 'Webbrain IT center',
    1: "Hi, I am number",
}

// console.log(account.name, account['founded']);
// console.log(account['full name'], account[1])

// const key = 'founded';

// account.key => undefined
// account[key] => 2020
// reaching the key of object by 'bracket' notation is also known as dynamic accessing the keys of object


// Object.freeze(account);

// account.square = '55kvm';
// delete account.founded;


// console.log(account) output is the same result as in the line 5 because Object.freeze() method blocks manipulation over the object 'account'. Once an object is frozen you can not melt it back.

// Object.seal(account);
// you can not manipulate over object while using Object.seal() method
// account.square = '55kvm';
// delete account.founded;

// but you can rewrite already existing values
// account.name = 'Webbrain Academy is Number One';

// const acc1 = {
//     name: 'Webbrain',
//     major: 'Frontend',
// }

// const acc2 = structuredClone(acc1); // the structuredClone returns the real copy of Object. No need to use methods such looping

// acc1.year = 2020;
// console.log(acc1, acc2, acc1 == acc2);

// console.log('name' in acc1);

// if ('name' in acc1) console.log('The key name exists in acc1');

const obj = {
    name: 'Webbrain',
    major: 'Frontend',
    founded: 2020,
    students: 30,
}

// looping all keys in obj
for (let key in obj) {
    console.log(key);
}