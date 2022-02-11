const hitesh = {
    firstName : "Rishabh",
    lastName : "Jain",
    role : "Admin",
    courseCount = 3,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
}