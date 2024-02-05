// console.log('vishal')

// sayMyNmae()

function sayMyNmae(){
    console.log('vishal')
}

function loginUserNmae(usernmae){
    if(usernmae === undefined){
        console.log("please enter username");
        return;
    }
    return usernmae;
}
//console.log(loginUserNmae(""))


// Rest Oprator in 
//[ 200, 3000, 400, 500 ] returns an array
function calculateCartPrice(...num1){
    return num1;
}
const user = {
    username : "vishal",
    price : 199
}




//console.log(calculateCartPrice(200,3000,400,500))

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

handleObject({
    username :"sam",
    price :399
})

const newArray =[100,200,300,400]


function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));