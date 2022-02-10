const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet= document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

// backgroundColor : #FFF;


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};
// console.log(getBGColor(orange));
// var color = getBGColor(pink);

// pink.addEventListener("mouseenter",() =>{
//     center.style.background = color;
// });

const magic = (element,color) => {
    return element.addEventListener("mouseenter",() =>{
        center.style.background = color;
    });  
};
magic(red,getBGColor(red));