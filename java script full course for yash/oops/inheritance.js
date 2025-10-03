class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`A new course was added by ${this.usernmae}`);
        
    }
}
const chai=new Teacher("chai","chai@123","345")
chai.logme()
const yash=new user("yash jaiswal")
yash.logme()
console.log(chai instanceof user);
