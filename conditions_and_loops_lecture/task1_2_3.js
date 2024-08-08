//TASK - 1
// const numbers = [1,2,3];
// const doubled  = numbers.map(num => num * 2);
// console.log(doubled);

//TASK - 2

// const items =  [
//     {name: 'Apple' , type: 'fruit'},
//     {name: 'Monitor' , type: 'electronics'},
//     {name:'Orange' , type: 'fruit'}
// ];
// const fruitnames = items.filter(item => item.type === 'fruit').map(item => item.name);
// console.log(fruitnames)

//TASK 3 

// const numbers = [1, 2, 3, 4, 5];
// let sumOdd = 0;
// numbers.forEach(num => {
//     if (num % 2 !== 0) {
//         sumOdd += num;
//     }
// });
// console.log(sumOdd); // 


//TASK 4 


const arr = [1,400,5,6,9]
const result = arr.every((element) => {  //CALL BACK
   console.log(element);
   return element < 100;
});
