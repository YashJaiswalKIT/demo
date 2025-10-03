// const user={
//      username:"yash",
//      loginCount:4,
//      signedIn:true,
//      getUserDetails: function(){
//         //console.log("got user detaies from database");
//         // console.log(`username: ${ this.username}`);
//        // console.log(this);
        
//      }

// }
// // console.log(user.username)
// // //console.log(user.getUserDetails())
// // console.log(this)



//constructor decleration and execution processs
function user(username,logincount,isLoggedin){
    this.username =username;
    this.logincont=logincount;
    this.isLoggedin=isLoggedin


    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
    return  this
    //  //return kro ya nhi koi problem nhi hai
}
//const userone=   user("hitesh",13,true)


// without using new key word run kraoge to kai sari fething and other value bhi print hogi

const userone=  new user("hitesh",13,true)
//when you hover on userone/usertwo ke new pr  then he shoe that it is constructor like paramaterised constructor

// const usertwo=   user("yash",3,false) it is override the value
const usertwo=  new user("yash",3,false)
// but using new keyword value not to be override

// console.log(userone);

// console.log(usertwo);

console.log(userone.constructor);

console.log(usertwo.constructor);

//instance of  see this concept on mdn 


