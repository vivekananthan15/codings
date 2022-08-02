//unshift()
const num1=[1,2,3,4,5,6,7,8,9,10];
console.log('before unshift: ',num1);
num1.unshift('60','70','80');
console.log(num1);

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.unshift('cows');
console.log(count);
console.log(animals);
animals.unshift('chickens', 'cats', 'dogs');
console.log(animals);
/**********OUTPUT*******************
before push:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
[
  1,    2,    3,    4, 5,
  6,    7,    8,    9, 10,
  '60', '70', '80'
]
4
[ 'pigs', 'goats', 'sheep', 'cows' ]
[
  'pigs',     'goats',
  'sheep',    'cows',
  'chickens', 'cats',
  'dogs'
]
 *  * ************************************/

//merging two arrays using push
const fruits=['apple','grapes','banana'];
const vegetables=['carrot','beetroot','green chilli'];
fruits.unshift(...vegetables);
console.log('merging two arrays using shift:\n',fruits);
/**********OUTPUT*******************
before unshift:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
[
  '60', '70', '80', 1, 2,
  3,    4,    5,    6, 7,
  8,    9,    10
]
4
[ 'cows', 'pigs', 'goats', 'sheep' ]
[
  'chickens', 'cats',
  'dogs',     'cows',
  'pigs',     'goats',
  'sheep'
]
merging two arrays using shift:
 [ 'carrot', 'beetroot', 'green chilli', 'apple', 'grapes', 'banana' ]
  *  * ************************************/

 //pop()
 const num2=[1,2,3,4,5,6,7,8,9,10];
console.log('before shift: ',num1);
console.log('removed items: ',num2.shift());
console.log('after shift: ',num2);
console.log('before shift: ',animals);
console.log('removed items from animals: ',animals.shift());
console.log('after shift: ',animals);
/**********OUTPUT*******************
before shift:  [
  '60', '70', '80', 1, 2,
  3,    4,    5,    6, 7,
  8,    9,    10
]
removed items:  1
after shift:  [
  2, 3, 4,  5, 6,
  7, 8, 9, 10
]
before shift:  [
  'chickens', 'cats',
  'dogs',     'cows',
  'pigs',     'goats',
  'sheep'
]
removed items from animals:  chickens
after shift:  [ 'cats', 'dogs', 'cows', 'pigs', 'goats', 'sheep' ]
  *  * ************************************/