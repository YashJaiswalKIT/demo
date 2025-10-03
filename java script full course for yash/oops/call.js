function setuser(username){
    //db calls
    this.username=username
    console.log("called");
}
function createuser(username,email,password){
    setuser.call(this, username)
    this.email=email
    this.password=password
}
const chai=new createuser("yash","yash@123",89393)
console.log(chai);
