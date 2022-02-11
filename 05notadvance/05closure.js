function init(){
    var firstName = "hitesh"
    console.log("Init")
    function sayFirstName(){
        console.log(firstName)
    }
    return sayFirstName;
}

var val = init();
val();


function doAddition(x){
    return function(y){
        return x + y;
    }
}

var add5 = doAddition(4);
console.log(add5(5))
console.log(doAddition(5)(5))




