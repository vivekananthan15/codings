const value1=537;
const value2="537";
const value3=537;
let resCoercion=value1+value2;
console.log(resCoercion, typeof resCoercion);

resCoercion=value1+value2+value1+value1;
console.log(resCoercion, typeof resCoercion);

resCoercion=value1+value1+value2+value1;
console.log(resCoercion, typeof resCoercion);

resCoercion=value2+value2;
console.log(resCoercion, typeof resCoercion);

resCoercion=Number(value2)+Number(value2);
console.log(resCoercion, typeof resCoercion);