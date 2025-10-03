const { use } = require("react");

class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username: ${this.username}`);
        
    }
    createId(){
        return `123`// console.log(yash.createId()); iske sath ye line niche execute ho jayegi
    }
    //  static createId(){
    //     return `123`
    // }
}
const yash=new user("yash")

 //it is not executed because the createId function is static function the new user can not to be access

 class Teacher extends user{
    constructor(username,email){
        this.username=username
        this.email=email
    }
 }
 const harsh=new Teacher("harsh","harsh@1223")
 console.log(harsh.createId());
 