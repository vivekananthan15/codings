//write pollyfills for map and filter
const arr=[1,2,5,2,3];
console.log(arr.map(item=>item*2));
console.log(arr.filter(item=>item!==2));

if(!Array.prototype.myMap){
    Array.prototype.myMap=function(fn){
        //console.log(this);
        const result=[];
        for(let i=0;i<this.length;i++){
            //console.log(this[i]);
            const val=fn(this[i]);
            result.push(val);
        }
        return result;        
    }
}

if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(fn){
        //console.log('filter');
        const res=[];
        for (let j = 0; j < this.length; j++) {
            const val1 = fn(this[j]);
            if(val1)  
            {
                res.push(this[j])
            }          
        }
        return res;
    }
}


console.log(arr.myMap(item=>item*2));
console.log(arr.myFilter(item=>item!==2));