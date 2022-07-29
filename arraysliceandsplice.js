const num=[1,2,3,4,5,6,7,8,9,10];
console.log('before slice: ',num);
console.log('slice: '+num.slice());
console.log('slice(2): '+num.slice(2));
console.log('slice(2,5): '+num.slice(2,5));

console.log('after slice: ',num);
/**********OUTPUT*******************
 * before slice:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
slice: 1,2,3,4,5,6,7,8,9,10
slice(2): 3,4,5,6,7,8,9,10
slice(2,5): 3,4,5
 * ************************************/

console.log('before splice: ',num);
let removedElements=num.splice(2);
console.log('removed items:'+removedElements);
console.log('after splice: ',num);
const n1=[1,2,3,4,5,6,7,8,9,10];
let remEl=n1.splice(2,2);
console.log('before splice: ',n1);
console.log('removed items: ',remEl);
console.log('after splice: ',n1);
/**********OUTPUT*******************
before splice:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
removed items:3,4,5,6,7,8,9,10
after splice:  [ 1, 2 ]
before splice:  [
  1, 2, 5,  6,
  7, 8, 9, 10
]
removed items:  [ 3, 4 ]
after splice:  [
  1, 2, 5,  6,
  7, 8, 9, 10
]
 * ************************************/
const n2=[1,2,3,4,5,6,7,8,9,10];
remEl=n2.splice(2,2,[0,00,000,0000]);
console.log('before splice: ',n2);
console.log('removed items: ',remEl);
console.log('after splice: ',n2);
/**********OUTPUT*******************
before splice:  [ 1, 2, [ 0, 0, 0, 0 ], 5, 6, 7, 8, 9, 10 ]
removed items:  [ 3, 4 ]
after splice:  [ 1, 2, [ 0, 0, 0, 0 ], 5, 6, 7, 8, 9, 10 ]
* ************************************/
const n3=[1,2,3,4,5,6,7,8,9,10];
remEl=n3.splice(2,2,10,100,1000);
console.log('before splice: ',n3);
console.log('removed items: ',remEl);
console.log('after splice: ',n3);
/**********OUTPUT*******************
before splice:  [
    1, 2, 10, 100,
 1000, 5,  6,   7,
    8, 9, 10
]
removed items:  [ 3, 4 ]
after splice:  [
    1, 2, 10, 100,
 1000, 5,  6,   7,
    8, 9, 10
]
* ************************************/