const hitesh = {
    firstName : "Rishabh",
    lastName : "Jain",
    role : "Admin",
    courseCount : 4,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
};
// getInfo();

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};



// hitesh.getInfo();
// dj.getInfo();


// getInfo : function(){
//     console.log(`
//     First name is ${this.firstName}
//     Last name is ${this.lastName}
//     His role is ${this.role}
//     and he is studying ${this.courseCount} courses
//     `);
// }

// var djInfo = hitesh.getInfo.bind(dj);
// djInfo();


hitesh.getInfo.call(dj);











