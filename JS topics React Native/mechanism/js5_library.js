
let name = "john";

function user(name) {
    return `hello ${name} `;
}

class test {
    constructor() {
        console.log("this is constructor");
    }
}


export { name, user, test };



// single module using keyword export
// example
// export let name = "john";

// export function user(name) {
//     return `hello ${name} `;
// }

// export class text {
//     constructor() {
//         console.log("this is constructor");
//     }
// }


