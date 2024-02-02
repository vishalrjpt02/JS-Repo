//const tinderuser =new Object()

const tinderuser ={}

tinderuser.id ="1234"
tinderuser.name ="Vishal"
tinderuser.isloggedIn =true

console.log( tinderuser);

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullName : {
            firstName : "VISHAL",
            lastName :  "Kumar"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastName);  // Kumar
const obj1 ={1: "a",2: "b",3: "c",4: "d"}
const obj2 ={1: "a",2: "b",3: "c",4: "d"}