let a=[1,2,3,4,5];
let b=[6,7,8,9,10];
let c=a.concat(b);
console.log("concate method in array: ",c);
let d=a.concat(b,c);
console.log('concat(b,c): ',d);
d=a.concat(b,20,30,40,50);
console.log("concat(b,20,30,40,50): ",d);
d=b.concat(a,['a','b','c'],10,20,30);
console.log('using nested array: ',d);
/**********OUTPUT*******************
concate method in array:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
concat(b,c):  [
  1, 2,  3, 4, 5,  6, 7,
  8, 9, 10, 1, 2,  3, 4,
  5, 6,  7, 8, 9, 10
]
concat(b,20,30,40,50):  [
   1,  2, 3,  4,  5,  6,
   7,  8, 9, 10, 20, 30,
  40, 50
]
using nested array:  [
  6,   7,  8,  9,  10,  1,
  2,   3,  4,  5,  'a', 'b',
  'c', 10, 20, 30
]
* ************************************/