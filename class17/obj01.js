let friend = []
console.log(typeof friend)

let friend1 = {name:'jon', sex:'M', weight:69.9, getFat(w=0){
    console.log('weight incresed')
    this.weight += w
}}
console.log(typeof friend1)
friend1.getFat(2)
console.log(`${friend1.name} weights ${friend1.weight}kg`)

let num = 8

num **= 2

console.log(num)