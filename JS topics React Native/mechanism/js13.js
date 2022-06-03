
arr = [1, 2, 3, 4];

let con = arr.reduce((a1, b1) => a1 + b1);

console.log(`total of array ` + con);


let person = [
    { name: "abc", age: 3 },
    { name: "xyz", age: 4 },
    { name: "bbb", age: 1 },
    { name: "mmm", age: 9 },
]

let permod = person.reduce((t, p) => t + p.age, 0);

console.log(" total age = " + permod);

let pername = person.reduce((n, p) => n + ` \n ` + p.name, "");

console.log(" total name = " + pername);