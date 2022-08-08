const user={
    name:'vivek',
    age:34,
    place:'chennai',
    getDetails(){
        console.log(`my name ${this.name} and my age ${this.age}`);
    }
};
for(let key in user)
{
    console.log(user[key]);
}
for(let key of Object.keys(user))
{
console.log(key);
}

for(let entry of Object.entries(user))
{
console.log(entry);
}
console.log(':', Object.keys(user));
console.log(':', Object.entries(user));
//cloning an object
//method1
// const userCopy=user;
// console.log(userCopy);
//method2
// let anotherObj={};
// for(let key in user) anotherObj[key]=user[key];
// console.log(anotherObj);
//method3
// let user1=Object.assign(user,{job:'Front end'});
// console.log(user1);
//method4
let userCopy={...user};
console.log(userCopy);