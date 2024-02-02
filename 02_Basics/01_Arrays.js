const myarray = [1,2,34,54,76]
const heros = ['vishall','ironman']


// console.log(myarray[0])

// console.log(heros[1])

// Array methods  

// myarray.push(6)
// myarray.push(7)
// myarray.pop()

// myarray.unshift(2) // to added at 0th position
//myarray.shift()


//const newArr = myarray.join();

// console.log(myarray);

// console.log(newArr);


// Slice and Splice

//console.log("A ",myarray);

//slice last index not icluded in result <3
const myn1 =myarray.slice(1,3)

// console.log(myn1)  //[ 2, 34 ]
// console.log("B ",myarray); //B  [ 1, 2, 34, 54, 76 ]

// if modifies the original array till last index <=3
const myn2 = myarray.splice(1,3)
// console.log(myn2) //[ 2, 34, 54 ]
// console.log(myarray) //[ 1, 76 ]

const marverlheros  = ['ironman','thor','spidy']
const DC  = ['supman','fssh','spidy']

//marverlheros.push(DC)

// console.log(marverlheros)
// console.log(marverlheros[3][1])

// const allheros = marverlheros.concat(DC)
// console.log(allheros)

// Sprade (...name,...nm)  ****
const allNewHeros = [...marverlheros, ...DC]
console.log(allNewHeros)

//FLAT combines nested array
const anothorArray =[1,2,3,[4,5,6,[7,7],4],6,6]
const real_anatorArray = anothorArray.flat(Infinity)
console.log(real_anatorArray)

console.log(Array.isArray("Vishal"))
console.log(Array.from("VISHAL"))
console.log(Array.from({name : 'VISHAL'})) // return empty it can't identify it is an key or value
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



