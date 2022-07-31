//concatenation
let firstName="Hi";
let secondName="Welcome";
let resultName=`${firstName} ${secondName}`;
console.log(resultName);//op->Hi Welcome
resultName=firstName.concat(' ',secondName);
console.log(resultName);//op->Hi Welcome
firstName +=' ' + secondName;
console.log(firstName);//op->Hi Welcome

//Length
console.log("Length:"+resultName.length);//op->Length:10

//to uppercase and to lowercase
resultName=resultName.toUpperCase();
console.log(resultName);//op->HI WELCOME
console.log(resultName.toLowerCase());//op->hi welcome

//indexOf and lastIndexOf
let indexName=resultName.indexOf("E");
console.log(resultName+' & indexOf value: '+indexName);//op->HI WELCOME & indexOf value: 4
indexName=resultName.lastIndexOf('E');
console.log("lastIndexOf Value: "+indexName);//op->lastIndexOf Value: 9

//charAt and charCodeAt
console.log('charAt value:'+resultName.charAt(5));//op->charAt value:L
console.log('charCodeAt Value:'+resultName.charCodeAt(5));//op->charCodeAt Value:76

//substr and substring
console.log('substr value:',resultName.substr(0,4));//op->substr value: HI W
console.log('substring value:',resultName.substring(0,4));//op->substring value: HI W
console.log('substring value:',resultName.substring(4,0));//op->substring value: HI W
console.log('if length is invalid means substring value:',resultName.substring(0,24));//op->if length is invalid means substring value: HI WELCOME
console.log('if index is invalid means substring value:',resultName.substring(20,4));//op->if index is invalid means substring value: ELCOME
console.log('substring value:',resultName.substring(20,24));//op->substring value:

//slice method
console.log('slice string:', resultName.slice(0,4));//op->slice string: HI W
console.log('slice string:', resultName.slice(4,0));//op->slice string:
console.log('slice string:', resultName.slice(24,20));//op->slice string:
console.log('slice string:', resultName.slice(-3));//op->slice string: OME

//split method
console.log('split string:',resultName.split(""));//op->split string: ['H', 'I', ' ', 'W','E', 'L', 'C', 'O', 'M', 'E']
console.log('split string:',resultName.split(" "));//op->split string: [ 'HI', 'WELCOME' ]
console.log('split string:',resultName.split(" ",2));//op->split string: [ 'HI', 'WELCOME' ]
let fullName="welcome to jvnp";
let splitName=fullName.split(" ");
console.log(splitName);//op->[ 'welcome', 'to', 'jvnp' ]

//replace()
console.log('before replace: ',resultName);//op->before replace:  HI WELCOME
resultName=resultName.replace('HI',"Hi");
console.log("after replace:", resultName);//op->after replace: Hi WELCOME

//includes()
const petsNames=['dog','cat','cow','sheep'];
console.log('Include value: ',petsNames.includes('sheep'));//op->Include value:  true
console.log('Include value(if not): ',petsNames.includes('parrot'));//op->Include value(if not):  false

//trim()
resultName=` ${resultName} `;
console.log("before trim: ",resultName,' length is: ', resultName.length);//op->before trim:   Hi WELCOME   length is:  12
resultName=resultName.trim();
console.log("after trim: ",resultName,' length is: ', resultName.length);//op->after trim:  Hi WELCOME  length is:  10

//padStart() & padEnd()
let salary=50000;
let newSalary=salary.padStart(2,0);
console.log("Salary: ", newSalary);//op->
newSalary=salary.padEnd(2,0);
console.log("Salary: ", newSalary);//op->

//string.fromCharCode()
console.log(String.fromCharCode(65,66,67,68,69,70));//op->ABCDEF

/*
Hi Welcome
Hi Welcome
Hi Welcome
Length:10
HI WELCOME
hi welcome
HI WELCOME & indexOf value: 4
lastIndexOf Value: 9
charAt value:L
charCodeAt Value:76
substr value: HI W
substring value: HI W
substring value: HI W
if length is invalid means substring value: HI WELCOME
if index is invalid means substring value: ELCOME
substring value:
slice string: HI W
slice string:
slice string:
slice string: OME
split string: [
  'H', 'I', ' ', 'W',
  'E', 'L', 'C', 'O',
  'M', 'E'
]
split string: [ 'HI', 'WELCOME' ]
split string: [ 'HI', 'WELCOME' ]
[ 'welcome', 'to', 'jvnp' ]
before replace:  HI WELCOME
after replace: Hi WELCOME
Include value:  true
Include value(if not):  false
before trim:   Hi WELCOME   length is:  12
after trim:  Hi WELCOME  length is:  10
Salary:  50000
Salary:  50000
ABCDEF
*/