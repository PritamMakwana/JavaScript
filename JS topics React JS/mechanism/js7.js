console.log("callback");

// Pretend that this response is coming from the server
const students = [
    { name: "john", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]

function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('info').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent, getStudents);
// getStudents();

// A callback is a function that is executed after another function has finished executing.