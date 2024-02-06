// this keyword

const user = {
    username : "VISHAL",
    price :99,

    welcomeMessage :function() {
        console.log(`${this.username}, welcome to the jungle`);
       // console.log(this);
       /*
       {
            username: 'VISHAL',
            price: 99,
            welcomeMessage: [Function: welcomeMessage]
        }
       */
    }
}

// user.welcomeMessage()
// user.username ="SAM"
// user.welcomeMessage()
// console.log(this); // {}


// function chai(){
//     console.log(this)
// }


// const chai = () =>{
    
//     let username ="VISHAL"
//     console.log(this)
// }
// //chai()

// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }

//const addtwo = (num1,num2) => num1 + num2

// incase of {} return is needed but not in ()
//const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({usersername : "vishal"})
console.log(addtwo(3,4));



