console.log("optional chaining");
let obj = {
    person : {
        name : 'Dheeraj'
    }
};

console.log("1 " + obj.person.name);

//no person time
//let obj2 = {   
//};
//console.log("2 " +obj2.person.name);
//Uncaught TypeError: Cannot read properties of undefined (reading 'name')

//no person time
let obj3 = {
    person : {
       
    }
};
console.log("3 " + obj3.person.name);


//no person time handle (check) 
let obj4 = {
    person : {
       
    }
};
console.log("4 " + obj4.person && obj4.person.name);

//without check property access called optional chaining
console.log("5 " +  obj4?.person?.name);
console.log("6 " +  obj?.person?.name);

//second syntax (dynamic chack)

let x = 'name';
let y = 'person';
console.log("7 " +  obj?.[y]?.[x]);

//other example

let main = {
    person : {
        name : 'Dheeraj'
    },
    arr : [1,2,3,4],
    func : () => {
        console.log("funtion called");
    },
};
//array index access
console.log("check array index =  " +  main?.arr?.[1]);
//function access : console in write :- main?.func?.()

//limitetes
//object is not at time not run
//property is not exited this not work modification 





