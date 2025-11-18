/* let primeNumbers = [2, 3, 5, 7, 11];
primeNumbers.forEach(function (primeNumbers, index) {
    console.log(`primeNumbers ${index+1}: ${primeNumbers} `);
}) */

let USDprice = [35, 15, 99, 17];

let INRprice = USDprice.map(function price() {
    return price * 87 ;
})

//console.log(INRprice);

function divideNumber(a,c) {
    let divide = a/c ;
    return divide ;
}

let results = divideNumber (10/2) ;
//console.log(results);

let users = [
    {UID: 111, userName: "Sneha" },
    {UID: 231, userName: "Shekharxxv" },
    {UID:441, userName: "yxvii" }
]
let userID = users.map(user => user.UID)
//console.log(userID);

let gamers = [
    {userA: "shiuushiya", age:21},
    {userB: "charmerchandan", age:20},
    {userC: "noobajay", age:19},
    {userD: "vicksvickey", age:17},
]

let teenagers = gamers.filter(function (age) {
    return age >= 18;
})
//console.log(teenagers);

let products = [
    {name: "Laptop", price:51500, instock: false},
    {name: "Mouse" , price: 699, instock: true},
    {name: "keyboard", price: 999, instock: true}
]

let available = products.filter(product => product.instock);
//console.log(available);

let webDev = ["html", "css", "JavaScript"] ;
let frontend = webDev;
frontend.push("react");
console.log(webDev);
























































































