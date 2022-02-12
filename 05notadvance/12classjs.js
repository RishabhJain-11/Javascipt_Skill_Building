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
}

// let hitesh = user("Rishabh" , "jain@gmail.com");

module.exports = user;


const rock = new user("rock","rock@rock.com")

console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");

console.log(rock.getCourseList());
console.log(rock.courseList);




