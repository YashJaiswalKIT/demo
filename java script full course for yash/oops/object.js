function multyplyby5(num){
    return num*5
}
multyplyby5.power=2
console.log(multyplyby5(5));
console.log(multyplyby5.power);
console.log(multyplyby5.prototype);

function createuser(username,score){
    this.username=username
    this.score=score
}

createuser.prototype.increment=function(){
    score++
}
const chai=createuser("chai",45)
const code=createuser("tea",34)  