// write a code whichcan give gradesto student according  to their Scores. 
// -> 90-100;A 
// -> 70-89;B 
// -> 60-69;C 
// -> 50-59;D 
// -> 0-49;F 
//SOLVE


let score=75;
let grade;

if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="D";
}

console.log("according to your scores,your grade was :",grade);

    
