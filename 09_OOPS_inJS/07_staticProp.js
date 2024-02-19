class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const vishal = new User("Vishal")
console.log(vishal.createId());