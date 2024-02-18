class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }

}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(` A new course was added by ${this.username}`)

    }
}

const chai = new Teacher("chai", "chai@gmailc.om", "123")
chai.addCourse();
chai.logMe();
const msalachai =new User("MasalaCahi")
msalachai.logMe()

//console.log(chai );