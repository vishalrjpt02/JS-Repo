const user ={
    username : "vishal",
    loginCount : 5,
    singedin : true ,

    getUserDetails : function() {
        //console.log("Got user detials from database");
        //console.log(`Username : ${this.username}` );
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// construstors in js

function User(userName,loginCount,isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting =function() {
        console.log(`Wecome ${this.userName}`);   
    }
    return this;
}

const userOne =new User('vishal',5,true)
const userTwo =new User('vishalwa',8,false)
console.log(userOne.constructor.);
console.log(userOne);
console.log(userTwo);
