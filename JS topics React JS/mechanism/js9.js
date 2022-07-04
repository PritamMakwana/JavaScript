console.log("Async and Await");

async function pritam() {
    console.log('Inside pritam function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
    // return "harry";
}

console.log("Before calling pritam")
let a = pritam();
console.log("After calling pritam")
console.log(a);
console.log("After calling pritam is console in print")
a.then(data => console.log(data))
console.log("Last line of this js file") 