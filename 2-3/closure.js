// Example 1

function calling (){
    console.log(getClosure())
}

function getClosure(){
    return "Xin Chao"
}


// Example 2

function adding(a,b){
    return a + b;
}

function multiply(c){
    console.log(adding(3,2)*c)
}

multiply(4)