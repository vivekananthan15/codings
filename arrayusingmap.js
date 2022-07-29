const num=[1,2,3,4,5,6,7,8,9,10];
const sqrt=num.map((val)=>{
    return Math.sqrt(val).toFixed(2);
});
console.table(sqrt);
/**********OUTPUT*******************
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │ '1.00' │
│    1    │ '1.41' │
│    2    │ '1.73' │
│    3    │ '2.00' │
│    4    │ '2.24' │
│    5    │ '2.45' │
│    6    │ '2.65' │
│    7    │ '2.83' │
│    8    │ '3.00' │
│    9    │ '3.16' │
└─────────┴────────┘
 * ************************************/
//check age for voter
const users=[{name:'vivek',age:34},{name:'vinoth',age:37},{name:'vijay',age:40},{name:'vetha',age:8}];
const eligibleStatus=users.map((user)=>({
    ...user,
    status:user.age>18?"eligible":'not eligible'
}));
console.table(eligibleStatus);
/**********OUTPUT*******************
 * ┌─────────┬──────────┬─────┬────────────────┐
│ (index) │   name   │ age │     status     │
├─────────┼──────────┼─────┼────────────────┤
│    0    │ 'vivek'  │ 34  │   'eligible'   │
│    1    │ 'vinoth' │ 37  │   'eligible'   │
│    2    │ 'vijay'  │ 40  │   'eligible'   │
│    3    │ 'vetha'  │  8  │ 'not eligible' │
└─────────┴──────────┴─────┴────────────────┘
 * ************************************/
