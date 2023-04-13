// Lexical Environment and Closure

/*
    Lexical Environment consists of two parts: Environment Record and Refference

    * Environment Record is an object which keeps all variables of local function in key value pairs
    * Refference is a link to outer Lexical Environment of any function, scope, code

 */

// Example

let name = 'Jane';

function findFromOuter() {
    console.log(name) // name

    // Here the function itself does not have its own variable called name but its Lexical Environment has a refference to outher lexical environment which has an Environment Record where name variable could be accessed
}
findFromOuter();

// Closure is a  function that remembers its outer variables and can access them

// Example
function outFunc() {
    let age = 5;

    return function () {
        return age + 5;

        // Here Lexical Environment of inner Func helps to reach the variable age but using that variable by outher such as inner function is called closure
    }
}

const result = outFunc()();

console.log(result);