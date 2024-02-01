// let myDate = new Date()
// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2024,0,1)

//let myCreatedDate = new Date(2023,0,23,5,3)
//let myCreatedDate = new Date(2024,0,4,5,3,8)

//console.log(myCreatedDate.toLocaleDateString())

let timeStamp =Date.now();

// console.log(timeStamp)

// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate =new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay() }tme is now`

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))


