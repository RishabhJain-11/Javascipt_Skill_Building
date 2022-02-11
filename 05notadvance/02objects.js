 var User = {
     name : "",
     getUserName : function(){
         console.log(`User name is  : ${this.name }`)
     }
 }



var hitesh = Object.create(User);
console.log(hitesh)
hitesh.name = "Rishabh Jain"
hitesh.getUserName();


var sam = Object.create(User,{
    name : {value : "Rishabh"},
    courseCount : {value : 3},
})

sam.getUserName();






























