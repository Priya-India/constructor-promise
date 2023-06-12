

// Async code
// 3 States
// 1. Pending
// 2. Fulfil
// 3. Reject/Failed

function fetchUser(userId) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (userId === 111) {
                let user = {
                    id: 1234,
                    name: "Priya Chherke",
                    age: 26
                }
                resolve(user);
            }else{
                reject("User not found.");
            }
        }, 5000);
    })
    return promise;
}

let promise = fetchUser(118)
promise.then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
})


// let userId = 1234;

// function fetchUser(userId){

//     let promise = new Promise(function(resolve, reject){

//     })



//     let user = {
//         id: 1234,
//         name: "Priya Chherke",
//         age: 26
//     }
// }

// let showUserProfile = function(user){
//     console.log(user.id + ' ' + user.name + ' '+ user.age);
// }

// fetchUser(showUserProfile, userId);

