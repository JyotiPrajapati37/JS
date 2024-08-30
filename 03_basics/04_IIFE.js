//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log('DB Connected');
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')
//IIFE shuold be closed in chai function use ; 