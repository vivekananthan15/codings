// converting string to number
let strValue="143";
console.log(strValue, typeof strValue);
let strPass = Number(strValue);
console.log(strPass, typeof strPass);

//converting boolean to number 
let booleanVal=true;
console.log(booleanVal, typeof booleanVal);
let booleanPass = Number(booleanVal);
console.log(booleanPass, typeof booleanPass);

//convert array and string to number - Nan return
let arrValue=[1,2,3,4,5];
console.log(arrValue, typeof arrValue);
let arrPast=Number(arrValue);
console.log(arrPast, typeof arrPast);
arrValue="stirumalaivasan";
console.log(arrValue, typeof arrValue);
arrPast=Number(arrValue);
console.log(arrPast, typeof arrPast);

//convert object to number - Nan return
let objValue={"name":"stirumalaivasan","age":10};
console.table(objValue);
console.log(typeof objValue);
objValue=Number(objValue);
console.log(objValue, typeof objValue);

//convert number to string
strValue=143;
console.log(strValue, typeof strValue);
strPass = String(strValue);
console.log(strPass, typeof strPass);

//converting boolean to string 
booleanVal=true;
console.log(booleanVal, typeof booleanVal);
booleanPass = String(booleanVal);
console.log(booleanPass, typeof booleanPass);

//converting parseInt & ParseFloat
const parseNumber="35.55";
console.log(parseNumber, typeof parseNumber);
let parseNo=parseInt(parseNumber);
console.log(parseNo, typeof parseNo);
parseNo=parseFloat(parseNumber);
console.log(parseNo, typeof parseNo);
parseNo=Number(parseNumber);
console.log(parseNo, typeof parseNo);
// Output
/******************************
 * 143 string
143 number
true boolean
1 number
[ 1, 2, 3, 4, 5 ] object
NaN number
stirumalaivasan string
NaN number
┌─────────┬───────────────────┐
│ (index) │      Values       │
├─────────┼───────────────────┤
│  name   │ 'stirumalaivasan' │
│   age   │        10         │
└─────────┴───────────────────┘
object
NaN number
143 number
143 string
true boolean
true string
35.55 string
35 number
35.55 number
35.55 number
 * ******************************/