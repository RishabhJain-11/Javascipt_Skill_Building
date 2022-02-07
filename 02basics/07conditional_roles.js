
var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get the full access");
        break;
    case "subadmin":
        console.log("You get limited access");
        break;
    case "testprep":
        console.log("You get very little access");
        break;
    case "user":
        console.log("You get no access");
        break;
    default:
        console.log("Trial User");
        break;
}