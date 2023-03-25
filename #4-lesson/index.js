// if => (<, >, <=, >=, ==, ===)
// if(condition === yomg'ir) ...

let data = "yomg'ir";

// switch => ===
switch (data) {
    case "yomg'ir":
        console.log("Bugun yomg'ir");
        break;
    case "qor":
        console.log('Bugun qor');
        break;
    default: console.log('Ob-havo no aniq');
}

// for (initialState, ending, step);
// for (i = 1; i < 10; i++) {
//     console.log('hi');
// }

//
firstFor: for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('=========================================');
    if (i === 5) break firstFor;
}