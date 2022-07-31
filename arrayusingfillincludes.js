//fill()
const fillNum=[1,2,3,4,5,6,7,8,9,10];
console.log('before using fill: ',fillNum);
//console.log('After using fill(): ',fillNum.fill());
/**********OUTPUT*******************
before using fill:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
After using fill():  [
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]
after using fill:  [
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]
* ************************************/
//console.log('After using fill(20): ',fillNum.fill(20));
/**********OUTPUT*******************
After using fill(20):  [
  20, 20, 20, 20, 20,
  20, 20, 20, 20, 20
]
* ************************************/
//console.log('After using fill(20,3): ',fillNum.fill(20,3));
/**********OUTPUT*******************
After using fill(20,3):  [
   1,  2,  3, 20, 20,
  20, 20, 20, 20, 20
]
* ************************************/
console.log('After using fill(20,3,5): ',fillNum.fill(20,3,5));
console.log('after using fill: ',fillNum);
/**********OUTPUT*******************
After using fill(20,3,5):  [
  1, 2, 3, 20, 20,
  6, 7, 8,  9, 10
]
after using fill:  [
  1, 2, 3, 20, 20,
  6, 7, 8,  9, 10
]
* ************************************/
//includes()
const pdts=['pen','pencil','sharpener','pen'];
console.log('check pencil: ',pdts.includes('pencil'));//o/p=> check pencil:  true
console.log('check scale:',pdts.includes('scale'));//o/p=>check scale: false
console.log('check 2nd pen: ',pdts.includes('pen',2));//o/p=> check 2nd pen:  true
console.log('check case sensitive of Pen: ',pdts.includes('Pen'));//o/p=> heck case sensitive of Pen:  false
    