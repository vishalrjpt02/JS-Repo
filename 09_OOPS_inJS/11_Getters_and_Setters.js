class User {
    constructor(email, password){
        this.email = email;
        this.password =password;
    }

    get password(){
        return this._password.toUppercase()
    }

    set password(value){
        this._password = value;
    }
    set email(value){
        this.email = value;
    }
    
}  

const vishal = new User("vishal@123", "123")
console.log(vishal);