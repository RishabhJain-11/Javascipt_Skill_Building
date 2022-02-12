// var returnedVal = Math.max(1,2,3,4,5,6,7,8,8,9);
// console.log(returnedVal)

// var myObj = {}

// Object.assign(myObj,{a:1,b:2,c:3} ,{z:9,y:8,x:7})


// console.log(myObj);



function sumOne(a, b) {
    return a + b;
}
console.log(sumOne(5, 4));


// var myA = [5, 4];
// console.log(sumOne(...myA));//this is a spread operator.

function sumTwo(a,b,...args) {
    console.log(args);

    let mul = a * b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [sum,mul];
}

console.log(sumTwo(2,3,5,6,7,8,9));
