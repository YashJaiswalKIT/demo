const hero=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]
hero.push(dcHeros)
// console.log(hero);
// console.log(hero[3][1]);

// hero.concat(dcHeros)
// console.log(hero);


// const allHeros= hero.concat(dcHeros)
// console.log(allHeros);


// const all=[...hero,...dcHeros]
// console.log(all)

const yash=[1,2,3,[4,5,6],7,[8,9,2],[1,2,3]]
const h=yash.flat(Infinity)
// console.log(h)


// console.log(Array.isArray("yash"))
// console.log(Array.from("yash"))
// console.log(Array.from({name:"yash"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

