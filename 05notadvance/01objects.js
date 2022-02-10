//new keyword = lec no.38
var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`)
    };
};

User.prototype.getFirstname = function(){
    console.log(`Your Firstname is ${this.firstName}`)
}

var hitesh = new User("hitesh",2)
// console.log(hitesh);
hitesh.getCourseCount();
hitesh.getFirstname();

var sam = new User("Sam",1);
// console.log(sam);
sam.getCourseCount();
sam.getFirstname();