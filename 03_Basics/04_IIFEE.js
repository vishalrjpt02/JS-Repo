
//Immediately Invoked Function Expression (IIFEE)

(function chai(){
    // named IIFEE
    console.log(`DB Connected`)
})() ;

(() => {
    console.log(`DB connected two ${name}`)
})('vishal') ;

