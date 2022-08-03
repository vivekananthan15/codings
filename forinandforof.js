//for...in - array
// const color=['red','green','blue'];
// for (const key in color) {
//     if (Object.hasOwnProperty.call(color, key)) {
//         const element = color[key];
//         console.log(element);
//     }
// }
const color=['red','green','blue'];
for (const key in color) {    
        const element = color[key];
        console.log(element);
}
//for...in object
const person={
    name:'test',
    age:35,
    place:'chennai',
    edu:'mca'
};
for(let key in person)
{
    console.log(person[key]);
}
/**********OUTPUT*******************
red
green
blue
test
35
chennai
mca
*  * ************************************/

//for...of - array
for (const iterator of color) {
    console.log(iterator);
}
//for...of - string
let txt="JVNP"
for(const value of txt)
{
    console.log(value);
}
/**********OUTPUT*******************
mca
red
green
blue
J
V
N
P
*  * ************************************/