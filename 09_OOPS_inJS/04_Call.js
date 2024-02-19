function SetUserName(username) {
    //complex db calls
    this.username =username;
    console.log("called");
}

function createUser(username, email, password) {
       

    //if we don't user this keyword the username will be undefined
    /*
       o/p-------->>
        called
        createUser { password: 'chai@fb.com', email: 'chai@fb.com' }

    */
    //coz funtion will be removed from call stack and values will be destroyed

    // Calls a method of an object, substituting another object for the current object.
    SetUserName.call(this, username);
    
/*   //Console output....

        called
        createUser {
            username: 'chai',
            password: 'chai@fb.com',
            email: 'chai@fb.com'
            }
            
*/

    this.password = email;
    this.email = email;
    
}


const chai =new createUser("chai", "chai@fb.com", '123' )
console.log(chai);