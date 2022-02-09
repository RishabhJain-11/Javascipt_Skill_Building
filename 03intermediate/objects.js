var user = {
    firstName : "Rishabh",
    lastName : "Jain",
    role : "Admin",
    loginCount : 32,
    fbsignedin  : true
};
console.log(user.firstName);
console.log(user["lastName"]);


user.loginCount = 44;
console.log(user.loginCount)

console.table(user)