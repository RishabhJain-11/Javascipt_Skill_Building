const user = ["rishabh",10,"admin"];
// console.log(name[1])
// var role = user[2];
// var name = user[0];
// var[name,couseCount,role] = user;
// console.log(role)

const MyUser = {
    name : "Rishabh",
    couseCount : 5,
    role : "Admin"
};
console.log(MyUser.couseCount)

const {name,mycourseCount,role} = MyUser;
console.log(role);