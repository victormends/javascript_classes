let num = [5, 6, 7, 2, 9]
// num.push(4)
// num.sort()
// console.log(num.length)
// console.log(num)

// for(let pos=0; pos<num.length;pos++){
//     console.log(`the number ${num[pos]} is in the position ${pos}`)
// }

for(let pos in num) {
    console.log(`the position ${pos} has the value ${num[pos]}`)
}