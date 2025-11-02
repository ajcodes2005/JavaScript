const name = "S-V"
const age = 16
// console.log(name + age + 'BT') It is not good way of writing string.
//console.log(`The name of device is ${name} and age is ${age}`) // It is modern way of writing string. string interpolation it is.

let userName = "Ajay"
let destiny = "Mars"
//console.log(`${userName} wants to make life multi-planetary and occupy ${destiny}`)

const earDevice =  new String ('Earphone')

//console.log(earDevice[0])
//console.log(earDevice[8])
//console.log(earDevice[7])
//console.log(earDevice.__proto__);

//console.log(earDevice.length)
//console.log(earDevice.toLocaleUpperCase())
//console.log(earDevice.indexOf('p'))
//console.log(earDevice.charAt(6))

const firstString = earDevice.substring(0 , 6);
//console.log(firstString)
//const secondString = earDevice.slice(2 , 7);
//console.log(secondString)
const secondString = earDevice.slice (-5);
//console.log(secondString)

const anotherString = "    Arjun  "
console.log(anotherString)
console.log(anotherString.trim())

const url = "https://Hydrogen.One/hydrogen%20Atom"

console.log(url.replace('%20', '-'))

console.log(url.includes('Ajay'))
console.log(url.split('/'))