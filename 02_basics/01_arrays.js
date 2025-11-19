const Arra1 = [7, 111, "Dumbell", "Mountain"] ;
//console.log(Arra1[2]);
//console.log(Arra1[0]);

const Scientists = ["Isaac Newton", "Aryabhatta", "Albert Einstein", "Srinivas Ramanujan"]
//console.log(Scientists);
//console.log(Scientists.indexOf("Isaac Newton"));

let Arra2 = new Array(false, 19, "Sahil", "Arush")
//console.log(Arra2);
Arra2.push("Ajay");
//console.log(Arra2);
Arra2.push(19.2);
//console.log(Arra2);
Arra2.pop()
//console.log(Arra2);

let Magic = ["Electricity", "Internet"]
Magic.unshift("Electrons")
//console.log(Magic);

const atom = ["Electron", "Proton", "Neutron"];
atom.shift(0);
//console.log(atom);

let sky = ["infinite", "Blue", "Eagles"]
//console.log(sky.includes("clouds"));
//console.log(sky.includes("Eagles"));

const myArra1 = new Array(13, 15, 17, 19);
const newArra1 = myArra1.join();
//console.log(typeof newArra1);

let myArraB = new Array(myArra1)
//console.log( "Z", myArraB);
const myArraC = myArraB.slice(13,17);
//console.log(myArraC);

let boxA = ["Mouse", "Smartphone", "Earbuds", "Laptop" ];
//console.log(boxA);
let result = boxA.slice(2,3);
//console.log(result);

let boxB = [13, 17, 23, 29];
let resultA = boxB.slice(0,3);
//console.log(resultA);
//console.log(boxB);

let boxC = [88, 25, 35, 67, 11];
//boxC.splice(3,4);
//console.log(boxC);
boxC.splice(0,3, 62, 12, 92,);
console.log(boxC);




















