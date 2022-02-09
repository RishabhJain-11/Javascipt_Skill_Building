console.log(this)

var user = {
    firstName : "Rishabh",
    courseCount : 5,
    getCourseCount : function () {
        console.log("Line 7 " + this);
        function sayHello(){
            console.log("hello")
            console.log('line 10')
        }
        sayHello();
    }
}
user.getCourseCount();//called via an object.