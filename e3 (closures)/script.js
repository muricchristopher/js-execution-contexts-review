// basically, the closures work in this way:

// --> when you have a function defined inside of another function, 
// that inner function has access to the variables and scope of the outer function even if the outer function finishes executing 
// and those variables are no longer accessible outside of that function.


// function( x ){
//     let hi = 'hi'

//     function (y){


//         //CLOSURE
//         -> can acess x parameter;
//         -> can acess y parameter
//         -> can acess variable hi

//     }

// }

var count = 0;

function makeAdder(x){

	return function inner(y){
    	return x + y;
    };

}

var add5 = makeAdder(5);


count += add5(2);

function number(x){
    return function teste(y){
        return x + y
    }
}

const number5 = number(5)