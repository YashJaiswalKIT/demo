//question 1.genarate user name by prompt input in user name add first @ and last length of user name 

//solved by me


// let struser=prompt("enter your name(without using space )");
// let str2='@';
// console.log(str2.concat(struser).concat(struser.length));


//by teacher

let fullname=prompt("enter your fullname without space:");
let username="@"+ fullname + fullname.length;
console.log(username);