// function sayMyname() {
//     console.log("y");
//     console.log("a");
//     console.log("s");
//     console.log("h");  
// }
// sayMyname()

// function add(number1,number2) {
//     console.log(number1+number2);
    
// }
// add(34,null)



// function add(number1,number2) {
//     const result=(number1+number2);
//     console.log("yash")
//     console.log("Result is:",result)
//     return result
    
// }
// const your=add(34,56)
// console.log(your)


// function loginUsermassage(username) {
//     if(username === undefined){
//         console.log("please Enter your username:")
//         return
//     }
//     return`${username} just logged in`
// }
// // console.log(loginUsermassage("yash"));
// console.log(loginUsermassage());
// console.log(loginUsermassage("yash"));

// function calculator(...num1){
//     return num1
// }
// console.log(calculator(12,34,56,89,80));


const user={
    username:"yash",
    price:122
}
function handleObject(anyobject){
    console.log(`username is  ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

const myarr=[200,300,400,500]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myarr))
console.log(returnsecondvalue([1,2,3,4,5]));