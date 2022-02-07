function getUserRole(name,role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is admin with limited access`
            break;
        case "testprep":
            return `${name} is sub-admin with very limited access`
            break;
        case "user":
            return `${name} is admin with no access`
            break;
    
        default:
            return `${name} is trial user`
            break;
    }
}
console.log(getUserRole("Rishu","user"));
