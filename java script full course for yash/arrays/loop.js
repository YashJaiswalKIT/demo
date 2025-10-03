for (let i = 1; i <=10; i++) {
    // console.log(i)
    
}



// const a=["yash",12,45]
const a="yash_jaiswal"
for (const i of a) {
    // console.log(i)
}

 const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter( (num)=>{
//     return num>4
// })
// console.log(newNums);

const newNums=[]
myNums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)