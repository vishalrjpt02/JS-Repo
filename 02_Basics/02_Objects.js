// singleton unique instance 


//Object Literals

//object literls

const mySym = Symbol("Key1")

const Juser ={
    name : "Vishal",
    age :19,
    [mySym] : "mykey1",
    Location : "Delhi",
    email : "vishal.google.com",
    isLoggedIn : false,
    lsatLoginDays : ["Monday","Tuesday"]
}

Juser.email ='vishal@adobe.com'

// console.log(Juser.email) //
// console.log(Juser["email"]) //
// console.log(Juser["name"]) // in some sepcial cases []
// console.log(Juser[mySym])    // forKeys nad symbols no need for ".." this

///Freeze keyword 
//Object.freeze(Juser) ; // now the value of on=bject can't be changed
Juser.email ='vishal.paytm.com'

// console.log(Juser)

/*{
    name: 'Vishal',
    age: 19,
    Location: 'Delhi',
    email: 'vishal@adobe.com',
    isLoggedIn: false,
    lsatLoginDays: [ 'Monday', 'Tuesday' ],
    [Symbol(Key1)]: 'mykey1'
  }
*/


Juser.gretting = function(){
    console.log("helllo js user")
}
Juser.grettingtwo = function(){
    console.log(`helllo js user ${this.name}`)
}

console.log(Juser.gretting());
console.log(Juser.grettingtwo());