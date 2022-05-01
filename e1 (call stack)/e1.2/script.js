function greeting(nome){
    
   return(`${sayHi()}, ${capitalize(nome)} ${praise()}`);

}

function sayHi(){
    return 'Hi'
}

function praise(){
    return "you're very cool!"
}

function capitalize(nome){
    return nome.charAt(0).toUpperCase() + nome.substr(1);
}

function display(nome){
    console.log(greeting(nome))
}

display('murilo')

//Hi, Murilo you're very cool!