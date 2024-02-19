const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(Descriptor);
//Math.PI = 5;

const chai = {
    name : 'ginger tea',
    price :     250,
    isAvilable : true,

    orderCahi : function () {
        console.log("CHai nahi bani");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'price', {
    writable: false,
    //enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
      console.log(`${key}  ${value}`);
}


