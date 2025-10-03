class User{
    constructor(username,email,password){
        this.username=username
        this.eamil=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User("yash","yash!2232@","1234")
console.log(chai.encryptPassword());
console.log(chai. changeUsername());

