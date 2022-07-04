
function sum(name, ...args) {
    console.log(arguments);

    document.write(`Hello ${name} : <br>`);

    let sum = 0;
    for (let i in args) {
        document.write(args[i] + `<br>`);
        sum += args[i];
    }

    document.write(`total = ` + sum);

}

let arr = [10, 20, 30, 40];

sum("admin", ...arr);
//...arr {is a spread opeartor}

let obj1 = {
    name: "user"
};
let obj2 = {
    age: 25,
    work: "teacher"
};

let obj = { ...obj1, ...obj2  };

console.log(obj);


