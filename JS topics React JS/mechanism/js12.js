
console.log("filter");
arr = [10, 20, 22, 45, 66, 9, 15, 5, 25];

let con = arr.filter(arr => arr % 2 == 0);

console.log(con);


let person = [
    { name: "abc", age: 30 },
    { name: "xyz", age: 45 },
    { name: "bbb", age: 10 },
    { name: "mmm", age: 90 },
]

let permod = person.filter(p => p.age <= 30 || p.name == "mmm");

console.log(permod);

console.log("find");
var ages = [10,23,19,20];
console.log(ages);

var b = ages.find(checkAdult);
console.log(b);

function checkAdult(age){
        return age >= 18;
}