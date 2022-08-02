//push()
const num1=[1,2,3,4,5,6,7,8,9,10];
console.log('before push: ',num1);
num1.push('60','70','80');
console.log(num1);
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
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
fruits.push(...vegetables);
console.log('merging two arrays using push:\n',fruits);
/**********OUTPUT*******************
merging two arrays using push:
 [ 'apple', 'grapes', 'banana', 'carrot', 'beetroot', 'green chilli' ]
  *  * ************************************/

 //pop()
 const num2=[1,2,3,4,5,6,7,8,9,10];
console.log('before pop: ',num1);
console.log('removed items: ',num2.pop());
console.log('after pop: ',num2);
console.log('before pop: ',animals);
console.log('removed items from animals: ',animals.pop());
console.log('after pop: ',animals);
/**********OUTPUT*******************
before pop:  [
    1,    2,    3,    4, 5,
    6,    7,    8,    9, 10,
    '60', '70', '80'
  ]
  removed items:  10
  after pop:  [
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ]
  before pop:  [
    'pigs',     'goats',
    'sheep',    'cows',
    'chickens', 'cats',
    'dogs'
  ]
  removed items from animals:  dogs
  after pop:  [ 'pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats' ]
  *  * ************************************/