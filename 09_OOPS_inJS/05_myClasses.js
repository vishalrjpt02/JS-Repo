
/////   ES6
/*
class User {

    constructor(userName, email, password){
        this.userName =userName;
        this.email =email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }
}


const chai = new User("VISHAL, VIshal@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

*/

// Behind the sceane .....

function User (userName, email, password){
    this.userName =userName;
    this.email =email;
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password} abc`
}

User.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new User("vishal", "VIshal@gmail.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

