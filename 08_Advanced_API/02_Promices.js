// in depth.....

const promiseOne = new Promise(function (resolve, reject) {
    // we can do any sysnc task
    //db calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complted');
        resolve();
    }, 1000)
})



promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function () {
    console.log("Async 2 resolved");
})




const PromiseThee =new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({username : "Chai", email : "chai@example.com"})
    },1000)
})
PromiseThee.then(function (user) {
    console.log(user);
})



const prommiseForth = new Promise(function (resolve,reject) {
    setTimeout(function () {     
        let error =false;
        if(!error){
            resolve({username : "Vishal", Password : "86457"})
        }
        else{
            reject ('error occured')
        }
    },1000)
})
const username = prommiseForth.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or Rejected")) 



const promiseFive =new Promise(function (resolve, reject) {
    setTimeout(function () {     
        let error =true;
        if(!error){
            resolve({username : "JavaScript", Password : "2344"})
        }
        else{
            reject ('Error: JS error occured')
        }
    },1000)
})




async function consumePromiseFive() {
    try {
        const response  =await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();



// async function getAllUsers() {
//     try {
//         var response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E :", error);
//     }

// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
