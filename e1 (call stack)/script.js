//basic example

function greeting(){
   sayHi();
   return 'Fim'
}

function sayHi(){
    console.log('Hi ativado!')
}

console.log(greeting());
// Hi ativado!
// Fim


/*step by step

1. Ignore all functions, until it reaches the greeting() function invocation.
2. Add the greeting() function to the call stack list. 
call stack = [greeting()]

3. Execute all lines of code in greeting();
4. Get to sayHi() function invocation
5. Add sayHi() to call stack list
call stack = [sayHi(), greeting()]

6. execute all lines of code inside the sayHi() function, until reaches its end.
7. Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.
8. Delete the sayHi() function from our call stack list. 
call stack = [greeting()]

9.When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.

10. Delete the greeting() function from the call stack list.
call stack = []


*/
