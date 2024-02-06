//********  FOR OF ************///

//["", "", ""]
//[{},{},{}]

const arr =[1,,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greeting ="Hello Greeting!"
for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}


// ********    MAPS in JS ***********//
//Unique values only


const map =new Map();
map.set('IN', 'India')
map.set('CN', 'China')
map.set('USA', 'United states of america')
map.set('JN', 'JAPAN')

//console.log(map)

for(const [key, value]of map){
    console.log(key, ':-'  ,value);
}

const myObject={
    'game1' : 'NFS',
    'game2' : 'spidyman'
}


//won't work coz MAP is not iterable
// for(const [key, value]of map){
//     console.log(key, ':-'  ,value);
// } 


