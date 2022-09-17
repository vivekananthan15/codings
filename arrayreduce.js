const arr=[2,3,68,52,255,68,10,76,311,567,79,97,76,33,3,1,08,7,64];
const res=arr.reduce((acc,cur)=>{
return acc+cur;
},0);
console.log(res);

var x=['my name','your name'];
var mapr=x.map( (item,index) => item + 'is');
console.log(mapr);

var stuMark = [60,40,20,70,90];
var stu = stuMark.filter((item)=>{
    if(item<30){
       return item;
    }
})
console.log(stu + ' ' + stu.length);

var a1=[1,2,3,4,6,-1,4,6,7];
let someval = a1.some((item) => {
    return item<0;
});
console.log(someval);
let everyval = a1.every((item) =>{
    console.log(item);
    return item<0;
})
console.log(everyval);
