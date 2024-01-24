// Based on way of storing type we have two types of datatypes

//premittive

// 7 types : String , Number , Boolean, null, undefined, Symbol, BigInt

const score =100;
const scorevalue =100.3
const isloggedIn =false
let userEamil ; //undefined

let num = 123454321n;

// Reference Types (non _premitive)

// Array, Objects, Function

const heros =["asb","RDJ","wers"]

let obj1 ={
    name  : "vishal",
    age : 23
}

const myfunction =function(){
    console.log("vishal")
}

console.log(typeof num);
console.log(typeof myfunction);


// javascript is dynamiclly typed