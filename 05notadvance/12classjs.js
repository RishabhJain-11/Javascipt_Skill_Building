class user {
    // name = ""
    // email = ""
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name){
        this.#courseList.push(name)
    }
    getCourseList(){
        // return this.courseList;
        return this.#courseList;
    }
    login(){
        return "You are logged in.";
    }
}

class SubAdmin extends user{
    constructor(name,email) {
        super(name,email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){
        return "Login for admin only"
    }
}
// let hitesh = user("Rishabh" , "jain@gmail.com");




module.exports = user;


const rock = new user("rock","rock@rock.com")

console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");

// console.log(rock.getCourseList());
// console.log(rock.courseList);




const tom = new SubAdmin("Tom","tom@jerry.com ");
console.log(tom.getAdminInfo());
console.log(tom.login())
console.log(tom.getInfo());