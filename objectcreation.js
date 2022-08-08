const personDetails={
    name:'vivek',
    age:35,
    interest:['blogger','tv'],
    isAlive:true,
    address:{
        city:'chennai',
        state:'tn',
    },
    greeting:function(){
        let msg=`My name is ${this.name}, i love ${this.interest} 
        and my location ${this.address}`;
        console.log(msg);
    }
};
personDetails.greeting();
/**********OUTPUT*******************
My name is vivek, i love blogger,tv
        and my location chennai
*  * ************************************/