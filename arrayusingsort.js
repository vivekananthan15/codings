const nameSort = ["ajay", "anand", "ajith", "ravi", "rajini", "rajesh"];
console.log("before sort: ", nameSort);
nameSort.sort();
console.log("after sort: ", nameSort);
/**********OUTPUT*******************
before sort:  [ 'ajay', 'anand', 'ajith', 'ravi', 'rajini', 'rajesh' ]
after sort:  [ 'ajay', 'ajith', 'anand', 'rajesh', 'rajini', 'ravi' ]
* ************************************/
const numSort = [1, 20, 6, 5, 0, 100, 50];
console.log("before sort: ", numSort);
numSort.sort();
console.log("after sort(wrong): ", numSort);
const newNumSort = numSort.sort((a, b) => {
  return a - b;
});
console.log("after sort ascending order: ", newNumSort);
const newNumSort2 = newNumSort.sort((a, b) => {
  return b - a;
});
console.log("after sort decending order: ", newNumSort);
/**********OUTPUT*******************
before sort:  [ 'ajay', 'anand', 'ajith', 'ravi', 'rajini', 'rajesh' ]
after sort:  [ 'ajay', 'ajith', 'anand', 'rajesh', 'rajini', 'ravi' ]
before sort:  [
  1,  20,  6, 5,
  0, 100, 50
]
after sort(wrong):  [
  0,  1, 100, 20,
  5, 50,   6
]
after sort ascending order:  [
   0,  1,   5, 6,
  20, 50, 100
]
after sort decending order:  [
  100, 50, 20, 6,
    5,  1,  0
]
* ************************************/
const objNameSort = [
  { name: "sam", age: 20 },
  { name: "vijay", age: 40 },
  { name: "ajith", age: 38 },
];
console.log('before sort:',objNameSort);
objNameSort.sort((a,b)=>{return a.age-b.age});
console.log('sort by age: ', objNameSort);
objNameSort.sort((a,b)=>{
    if(a.name>b.name) return 1;
    if(a.name<b.name) return -1;
});
console.log('sort by name:',objNameSort);
/**********OUTPUT*******************
before sort: [
  { name: 'sam', age: 20 },
  { name: 'vijay', age: 40 },
  { name: 'ajith', age: 38 }
]
sort by age:  [
  { name: 'sam', age: 20 },
  { name: 'ajith', age: 38 },
  { name: 'vijay', age: 40 }
]
sort by name: [
  { name: 'ajith', age: 38 },
  { name: 'sam', age: 20 },
  { name: 'vijay', age: 40 }
]
* ************************************/