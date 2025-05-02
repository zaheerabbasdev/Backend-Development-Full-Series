// require vs import
// import {sum} from "./Script.js";

// we cannot selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
// loading is synchronous for 'require' but can be asynchronous for 'import'

// For import something we can create a package.json and then add the ("type": "module") in the package.json file

import {sum, mul, PI} from "./math.js";
 
console.log(sum(1, 2));
console.log(PI);