// require(): A built-in function in include external modules that exits in separate files.

// module.exports: a special object


const sum = (a, b) => a + b;

const mul = (a, b) =>  a * b;

const g = 9.8;

const PI = 3.144


// if we want to send the above things like sum, mul, g and pi so we use an object like below

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI,

}

module.exports = obj;

// module.exports = "hello ";
// when we cannot export any module so the it can export an empty object.


