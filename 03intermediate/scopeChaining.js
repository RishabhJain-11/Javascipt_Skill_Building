var name = "Rishabh"
console.log(`Line no. 3 ${name}`);


function sayName() {
    var name = "Rishu";
    console.log(`Line no 7 = ${name}`);
    
    sayName2();
    function sayName2(){
        var name = "Jain"
        console.log("Line no 10 = " + name);
    }
}


sayName();


