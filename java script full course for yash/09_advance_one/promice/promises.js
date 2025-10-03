const promises1 = new Promise(function(resolve, reject) {
    //do an async task
    // DB calls, cryptography, network calls
    setTimeout(function() {
        console.log("Async task completed");
        resolve();
    }, 1000);
});

promises1.then(function() {
    console.log("Promise consumed");
});

promises1.then(function() { // Removed resolve, reject as they are not needed here for a basic .then
    setTimeout(function() {
        console.log("async task 2 completed");
    }, 1000);
}).then(function() {
    console.log("async task 2 resolved");
});

const promisesThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            username: "yash",
            email: "yash @123.com"
        });
    }, 1000);
});
promisesThree.then(function(user) {
    console.log(user);
});

const promisesFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({
                username: "hitesh",
                pass: 1234
            });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});
promisesFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(() => console.log("the promise is either resolved or rejected"));

// Corrected line: 'promises1' should be 'Promise'
const promisesFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({
                username: "hitesh",
                pass: 1234
            });
        } else {
            reject("Error: Js went wrong");
        }
    }, 1000);
});

async function consumePromisesFive() {
    try {
        const responce = await promisesFive;
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromisesFive();

// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json(); // Await the JSON parsing
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUser();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))