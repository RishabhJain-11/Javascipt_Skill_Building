// function isEven(element){
//     if(element %2 ===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(2));


var isEven = (element) => {
    return element % 2 === 0;
};
// console.log(isEven(2));
// var res = [2,4,8,6].every(isEven);
// console.log(res);

var res = [2,4,8,6].every((e) => e%2 === 0);
console.log(res);