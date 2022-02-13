const uno = () => {
    return "I am One";
}
// const dos = async () => {
//     setTimeout(() => {
//         return "I am two"
//     },3000);
// }
const dos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("I am two");
            // reject ("I am two");
        }, 3000);
    })
};



const tres = () => {
    return "I am Three";
}
const callMe = async () => {
    let val1 = uno();
    console.log(val1);

    let val2 = await dos();
    console.log(val2);

    let val3 = tres();
    console.log(val3);
}

callMe();
