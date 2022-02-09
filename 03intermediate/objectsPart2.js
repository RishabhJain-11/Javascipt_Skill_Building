var user = {
    firstName : "Rishabh",
    lastName : "Jain",
    role : "Admin",
    loginCount : 32,
    fbsignedin  : true,
    courselist : [],
    buyCourse : function (courseName) {
        this.courselist.push(this.courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courselist.length} courses `;
    }
};
 
console.log(user.firstName)
console.log(user.getCourseCount());
user.buyCourse("ReactJS Course");
console.log(user.getCourseCount());





























