// MAP

let a1 = [2, 4, 5, 6];

a1.map((e) => {
  console.log(e + 1);
});

// POP
let a2 = [3, 5, 6, 7, 8];
console.log(a2); //let a2 = [3,5,6,7,8]
a2.pop();

console.log(a2); //let a2 = [3,5,6,7]

//SLICE

const arr3 = [0, 10, 1, 2, 3, 4];

console.log(arr3); //[0,10,1,2,3,4]

const arr4 = arr3.slice(1, 3);

console.log(arr4); // [ 10, 1 ]

//SPLICE

const arr5 = [1, 2, 3, 4, 5];
console.log(arr5)
arr5.splice(2,1)
console.log(arr5);


// SHIFT

const shift_array = [1,2,3,4,5]
shift_array.shift()
console.log(shift_array) //[ 2, 3, 4, 5 ]