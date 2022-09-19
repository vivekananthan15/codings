function multiply(a){
    return function(b){
        return a*b;
    }
}

console.log(multiply(5)(6));
console.log(multiply(10)(60));