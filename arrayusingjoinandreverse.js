//join()
const pdts=['pen','pencil','sharpener','pen'];
console.log('before join():',pdts);
console.log('using join(): ',pdts.join());
console.log('using join(): ',pdts.join('|'));
console.log('using join(): ',pdts.join(0));
/**********OUTPUT*******************
before join(): [ 'pen', 'pencil', 'sharpener', 'pen' ]
using join():  pen,pencil,sharpener,pen
using join():  pen|pencil|sharpener|pen
using join():  pen0pencil0sharpener0pen
* ************************************/
//reverse()
const revNum=[1,2,3,4,5,6,7,8,9,10];
console.log('Before reverse: ',revNum);
console.log('Before reverse: ',revNum.reverse());
//reversing an array object
const objVal={0:10,1:20,2:30,3:40,length:4};
console.log(objVal);
//console.log(objVal.reverse());
Array.prototype.reverse.call(objVal);
console.log(objVal);
/**********OUTPUT*******************
Before reverse:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Before reverse:  [
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1
]
{ '0': 10, '1': 20, '2': 30, '3': 40, length: 4 }
{ '0': 40, '1': 30, '2': 20, '3': 10, length: 4 }
* ************************************/