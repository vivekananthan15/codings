const num1=[1,2,3,4,5,6,7,8,9,10];
num1.forEach((value)=>{
    console.log('Values:',value);
});
/**********OUTPUT*******************
 * 
Values: 1
Values: 2
Values: 3
Values: 4
Values: 5
Values: 6
Values: 7
Values: 8
Values: 9
Values: 10
 * 
 * ************************************/
num1.forEach((val,index)=>{
    console.log(`Index: ${index} Value: ${val}`);
});
/**********OUTPUT*******************
Index: 0 Value: 1
Index: 1 Value: 2
Index: 2 Value: 3
Index: 3 Value: 4
Index: 4 Value: 5
Index: 5 Value: 6
Index: 6 Value: 7
Index: 7 Value: 8
Index: 8 Value: 9
Index: 9 Value: 10
************************************/
const usersDetails=[
    {fullName:'vivek',age:35,place:'chennai'},
    {fullName:'vinoth',age:38,place:'trichy'}, 
    {fullName:'vijay',age:40,place:'madurai'},   
];
usersDetails.forEach((val)=>{
    console.log(val.fullName);
});
/**********OUTPUT*******************
vivek
vinoth
vijay
************************************/