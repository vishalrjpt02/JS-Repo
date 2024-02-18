// let myName = "vishal     ";

// console.log(myName.trueLenght);

let myHero =["thor","SPidy"]

let heroPower ={
    thor :  "hammer",
    Spidy: "sling",

    getSpidierPower : function () {
        console.log(`Spidy power is ${this.Spidy}`);
    }
}

Object.prototype.vishal = function () {
    console.log(`vishal is present in all onjects`);
}

Array.prototype.heyVishal = function () {
    console.log(`vishal is present in all onjects`);
}

// heroPower.vishal();

// myHero.vishal(); // here we have vishal function is preent in superlevel of object so ereryone has access to it
// myHero.heyVishal();
//heroPower.heyVishal();  //thow error coz heyVishal is presnt only till Myarray not Object.protoype




// Inheritance

const user = {
    name : "chai",
    email : "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const TechnicalSupport = {
    isAvilable : false
}

const TaSupport = {
    makeAssignement : 'js Assignement',
    fullTime: true,
    __proto__: TechnicalSupport

}

teacher.__proto__ = user

// Modern Sintax 
Object.setPrototypeOf(TechnicalSupport, teacher)

let anathorUserName = "chaiAurCode    ";

String.prototype.trueLenght = function () {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);

}

anathorUserName.trueLenght();
"vishal".trueLenght();
"iceTea".trueLenght();
