const myObject ={
    js : 'Javascrit',
    cpp : 'C plus plus',
    rb : 'ruby',

}
// examples of for in loops

for(const key in myObject){
    console.log(` ${key} sortcut for ${myObject[key]}`);
}

// using forin loops for array

const programming =['js', 'rb', 'jsp']

for(const key in programming){
    console.log(programming[key]);
}

// foreach loops in JS

const programmings =['js', 'rb', 'jsp','py']

//callback function

programmings.forEach(function (item) {
    console.log(item);
})

// using arrow function in for each

programming.forEach((item) => {
    console.log(item);
})

// foreach for array ofobjects
