const id1 = Symbol("id");
const id2 = Symbol("id");

let obj = {
    [id1]: 'webbrain',
    ["id2"]: "Academemy",
}

console.log(obj[id1]);
console.log(obj[id2]);
console.log(obj['id2']);