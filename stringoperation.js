//concatenation
let firstName="Hi";
let secondName="Welcome";
let resultName=`${firstName} ${secondName}`;
console.log(resultName);
resultName=firstName.concat(' ',secondName);
console.log(resultName);
firstName +=' ' + secondName;
console.log(firstName);

//Length
console.log("Length:"+resultName.length);

//to uppercase and to lowercase
resultName=resultName.toUpperCase();
console.log(resultName);
console.log(resultName.toLowerCase());

//indexOf and lastIndexOf
let indexName=resultName.indexOf("E");
console.log(resultName+' & indexOf value: '+indexName);
indexName=resultName.lastIndexOf('E');
console.log("lastIndexOf Value: "+indexName);

//charAt and charCodeAt
console.log('charAt value:'+resultName.charAt(5));
console.log('charCodeAt Value:'+resultName.charCodeAt(5));

//substr and substring
console.log('substr value:',resultName.substr(0,4));
console.log('substring value:',resultName.substring(0,4));
console.log('substring value:',resultName.substring(4,0));
console.log('if length is invalid means substring value:',resultName.substring(0,24));
console.log('if index is invalid means substring value:',resultName.substring(20,4));
console.log('substring value:',resultName.substring(20,24));

//slice method
console.log('slice string:', resultName.slice(0,4));
console.log('slice string:', resultName.slice(4,0));
console.log('slice string:', resultName.slice(24,20));
console.log('slice string:', resultName.slice(-3));

//split method
console.log('split string:',resultName.split(""));
console.log('split string:',resultName.split(" "));
console.log('split string:',resultName.split(" ",2));
let fullName="welcome to jvnp";
let splitName=fullName.split(" ");
console.log(splitName);

//replace()
console.log('before replace: ',resultName);
resultName=resultName.replace('HI',"Hi");
console.log("after replace:", resultName);

//includes()
const petsNames=['dog','cat','cow','sheep'];
console.log('Include value: ',petsNames.includes('sheep'));
console.log('Include value(if not): ',petsNames.includes('parrot'));

//trim()
resultName=` ${resultName} `;
console.log("before trim: ",resultName,' length is: ', resultName.length);
resultName=resultName.trim();
console.log("after trim: ",resultName,' length is: ', resultName.length);

//padStart() & padEnd()
let salary="50000";
let newSalary=salary.padStart(2,0);
console.log("Salary: ", newSalary);
newSalary=salary.padEnd(2,0);
console.log("Salary: ", newSalary);

//string.fromCharCode()
console.log(String.fromCharCode(65,66,67,68,69,70));