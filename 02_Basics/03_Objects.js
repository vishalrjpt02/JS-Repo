//const tinderuser =new Object()

const tinderuser ={}

tinderuser.id ="1234"
tinderuser.name ="Vishal"
tinderuser.isloggedIn =true

//console.log( tinderuser);

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullName : {
            firstName : "VISHAL",
            lastName :  "Kumar"
        }
    }
}

//console.log(regularUser.fullname.userFullName.lastName);  // Kumar
const obj1 ={1: "a",2: "b",3: "c",4: "d"}
const obj2 ={1: "a",5: "b",3: "c",4: "d"}
const obj4 ={1: "a",8: "b",3: "c",4: "d"}

const obj3 =Object.assign({},obj1,obj2,obj4)

// Sprade in objects
const obj5 ={...obj1,...obj2,...obj4}
//console.log(obj5)


//for data coming from database

const users =[
    {
        id: 101,
        email : "vishal@vishal.com"
    },
    {
        id: 101,
        email : "vishal@vishal.com"
    },
    {
        id: 101,
        email : "vishal@vishal.com"
    },

]

users[1].email
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

/*
[ 'id', 'name', 'isloggedIn' ]
[ '1234', 'Vishal', true ]
[ [ 'id', '1234' ], [ 'name', 'Vishal' ], [ 'isloggedIn', true ] ] */
 

//console.log(tinderuser.hasOwnProperty("isLoggedIn"));



//*****/  De-structring of objects/function in js*****/

const course ={
    coursename : "js hindi",
    price : "999",
    courseInstruster : "Vishal"

}

// genral calling of function data
console.log(course.price); 

//example of destructring
const {courseInstruster : VishalSir} = course
// console.log(VishalSir);  //"Vishal"

// const navbar =({company}) => {   // props.company is replcaed as company

// }

// navbar(company = vishal);

// json examples...

// {
//     "name" : "vishal",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

