console.log('example 1... get data');

function getData() {
    console.log("Started getData");
    url = "./mechanism/js10text.txt";
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.text();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    })
}

console.log("Before running getData");
getData();
console.log("After running getData");


//-----------------------------------------------------------------------------------

// console.log('example 2... getdata using api external');
// function getData() {
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log("Inside first then")
//         return response.json();
//     }).then((data) => {
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// console.log("Before running getData");
// getData();
// console.log("After running getData");

//-----------------------------------------------------

// console.log('example 3... postdata');
// function postData() {
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"aman12323","salary":"123","age":"23"}'
//     params = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response => response.json())
//         .then(data => console.log(data)
//         )
// }

// postData();