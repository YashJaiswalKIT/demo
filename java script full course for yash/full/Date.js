//dates
let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,24)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let Dates=new Date("01-14-2023");
// console.log(Dates);

let myTime=Date.now()
// console.log(myTime)
// console.log(Dates.getTime());


let newD=new Date()
// console.log(newD);
// console.log(newD.getMonth()+1);

// console.log(newD.getDay());

newD.toLocaleString('defult',{
    weekday:"long",
})

