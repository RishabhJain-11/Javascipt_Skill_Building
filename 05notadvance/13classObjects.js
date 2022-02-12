// import user from "./12classjs";

const user = require("./12classjs");

const rishabh = new user("Rishabh" , "jain@gmail.com");

console.log(rishabh.getInfo());

rishabh.enrollCourse("React Bootcamp")
rishabh.enrollCourse("Angular Bootcamp")

console.log(rishabh.getCourseList());

let courses = rishabh.getCourseList();

courses.forEach((c) => console.log(c));

