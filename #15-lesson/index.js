// Recursion - the repetition of something

// let counter = 0;

// const sum = (n) => {
//     counter += n;
//     if (n) {
//         sum(--n);
//     }
// }

// console.log(sum(4));

// let counter = 0;

// function sum(num) {
//     if (num === 1) {
//         counter += num;
//     } else {
//         counter += num;
//         sum(--num);
//     }
// }

// sum(4);

// console.log(counter);


company = {
    sales: [
        { name: 'Alex', salary: 1 },
        { name: 'Alice', salary: 2 },
    ],
    development: {
        sites: [
            { name: 'John', salary: 3 },
            { name: 'Marrin', salary: 4 }
        ],
        dev: [
            { name: 'Peter', salary: 5 },
            { name: 'Jane', salary: 6 }
        ],
        // internals: [{ name: 'Jack', salary: 1300 }]
    }
}

const getCalc = (company) => {
    if (Array.isArray(company)) {
        return company.reduce((acc, elem) => acc += elem.salary, 0);
    } else {
        let sum = 0;
        for (let value of Object.values(company)) {
            sum += getCalc(value);
        }
        return sum;
    }
}

getCalc(company); // 21
console.log(getCalc(company));

// let sum = 0;
// const getCalc = (company) => {
//     if (Array.isArray(company)) {
//         sum += company.reduce((acc, elem) => acc += elem.salary, 0);
//     } else {
//         for (let key in company) {
//             getCalc(company[key])
//         }
//     }
// }

// getCalc(company);
// console.log(sum);