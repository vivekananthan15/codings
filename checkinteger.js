function isInteger(number){
    return number % 1  == 0


}
console.log(isInteger(90));//true
console.log(isInteger(0));//true
console.log(isInteger('a'));//false
console.log(isInteger(90.99));//false
console.log(isInteger(-1));//true

