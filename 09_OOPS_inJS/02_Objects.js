function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

 function createUser(username, score){
    this.username = username
    this.score = score
 }

 // default prototype has been used
 createUser.prototype.increment = function(){
     this.score++
 }
 // inside of prototype a new function is  defined
 createUser.prototype.printMe = function(){
     console.log(`price is ${this.score}`);
 }

 
/* Error thrown if we Don't Use "---NEW---" keyword

C:\Users\visha\source\repos\vishalrjpt02\JS-Repo> node .\09_OOPS_inJS\02_Objects.js
C:\Users\visha\source\repos\vishalrjpt02\JS-Repo\09_OOPS_inJS\02_Objects.js:29
 tea.printMe()
     ^

TypeError: Cannot read properties of undefined (reading 'printMe')
    at Object.<anonymous> (C:\Users\visha\source\repos\vishalrjpt02\JS-Repo\09_OOPS_inJS\02_Objects.js:29:6)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.10.0
*/




const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

 tea.printMe()
 chai.printMe()





/************************

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

**************************/