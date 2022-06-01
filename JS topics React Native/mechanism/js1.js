setTimeout(() => {
    console.log("We are inside settimeout");
}, 3000);

let sum2 = (a, b) => a + b;
let half = a => a / 2;

sum2(10, 20);
half(25);


let obj1 = {
    greeting: "Good Morning",
    names: ["aman", "Rohan", "Skill", "DJboy"],
    speak() {
        this.names.forEach((student) => {
            console.log(this.greeting + " bol bhai bol " + student);
        });
    }
}

obj1.speak();
