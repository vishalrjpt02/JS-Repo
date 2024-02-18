function SetUserName(username) {
    //complex db calls
    this.username =username;
    console.log("called");
}

function createUser(username, email, password) {
       
    SetUserName.call(this, username);
    
    this.password = email;
    this.email = email;
    
}


const chai =new createUser("chai", "chai@fb.com", '123' )
console.log(chai);