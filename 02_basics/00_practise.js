//myLiora[13, 14, 15] = y
//console.log(y);

/* let ArrayA[X] = W
const W = [11, 111, 1]
console.log(W);
*/
/*
const electronics = {
    one : "Laptop",
    two : "Headphone",
    three : "Keyboard",
    four : "Mouse",
    five : "Chargers",

    Person : {
        Model : "Deepseek V-3.2",
        Unsupervised : true,
        helpful : "true"
    },
    atmosphere: function () {
        console.log("POLYGON");
    }
}
console.log(electronics);
*/

let breakfast = ["Milk", "Egg", "Bread", "Banana"]
//console.log(breakfast);

const pattern = [1, 2, 5, 9, 14, 20, 27, 35];
//console.log(pattern);

const Array1 = ["Sun", "Earth", "Moon" ]
//console.log(Array1);
//console.log(Array1.length);
//console.log(Array1.indexOf("Mars"));
//console.log(Array1.indexOf("Sun"));

const planetA = {
    name: "Earth",
    age : 4540000000 ,
    atmoshphere : true ,
    dinosuar : false ,
}
//console.log(planetA);
//console.log(planetA.age);
/*
const number = {
   sample : let type = [
    "Irrational", "Rational", "Integer", "Whole", "Natural"
   ]
}
console.log(number);
*/

let number = {
    typeA : "Irrational",
    Example : "√2",
    completelyDivisible : false ,
}
//console.log(Number);
//console.log(number.typeA);
//console.log(number["typeA"]);

let river = {
    name : "Ganga",
    distance : "2525km",
    origin : "Gangotri glacier",
    sacred : true ,
}
//console.log(river);
//console.log(river.origin);

let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 787, 1397, 2184]
//console.log(fibonacci);
//console.log(fibonacci.length);

let magic = ["electricity" , ["electron"]]
//console.log(magic);
//console.log(magic.length);
//console.log(magic[2]);
//console.log(magic[1]);

let digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, [88253, 56711, "0344AH"]]
//console.log(digit);
//console.log(digit.indexOf[56711]);
//console.log(digit[1] [0]);
let nestedArrayIndex = digit.findIndex(item =>Array.isArray(item));
let insideIndex = digit[nestedArrayIndex].indexOf(88253)

//console.log("Nested Array at:" , nestedArrayIndex);
//console.log("value index inside nested array:", insideIndex);



const flow = ["elctricity", ["Computer", "Bulb", "Motor"] ]
//console.log(flow);
//console.log(flow[1] [1]);

let dimension = [
    [
        [2,3],
        [5,7]
    ],

    [
        [8,11],
        [13,17]
    ]
]
//console.log(dimension);
//console.log(dimension.length);
//console.log(dimension[0] [2]);
//console.log(dimension[1] [0]);

const scientists = ["Einstein", "Bohr", "Heisenberg"]
//console.log(scientists);
//console.log(scientists.indexOf("Bohr"));
//console.log(scientists.indexOf("Ramanujan"));
//scientists.push("Dirac")
//console.log(scientists);
//console.log(scientists.length);

const elements = ["Hydrogen", "Helium", "Oxygen"]
const newSize = elements.push("Neon")
const firstPlace = elements.unshift("Carbon")
//console.log(elements);
//console.log(newSize);
//console.log(firstPlace);

const essential = ["Plastic", "Iron", "Steel" ]
//console.log(essential.pop());
//console.log(essential.push("Cotton"));
const addingElement = essential.push("Cotton")
//console.log(essential);
//console.log(essential.length);
//console.log(essential.unshift("Wire"));
//console.log(essential);
//console.log(essential.pop());
const preciousMetals = ["Gold", "Silver", "Platinum"]
const removedMetals = preciousMetals.pop();
//console.log(preciousMetals);
//console.log(preciousMetals.length);
//console.log(removedMetals);

const variable1 = ["Water", "Electricity", "Internet"];
const newVariable1 = variable1.shift();
//console.log(variable1);
//console.log(newVariable1);

const legends = ["Elon Musk", "Steve Job", "Demis Hassabis", "Jeoffrey Hinton"]
const indexOfLegends = legends.indexOf("Demis Hassabis");
if (indexOfLegends !== -1) {
    legends.splice(indexOfLegends, 1)
} 
//console.log(legends);

let absoluteCinema = ["Ramayan", "Mahabharat", "Upanishad Ganga", "Chanakya"]
//absoluteCinema.pop()
//console.log(absoluteCinema [3]);
//absoluteCinema.push("Mahadev")
//console.log(absoluteCinema)

const major = [ "Variables", "if Statements", "Arrays", "Loops", "Functions"]
//backBone.unshift("Variables")
//console.log(major.length);

const sports = ["MMA", "Football", "Boxing"]
//sports.unshift("hockey")
//console.log(sports);
//sports.shift("")
//console.log(sports);

const topics = ["Trigonometry", "Geometry", "Probability"]
for (const topic of topics ) {
//console.log(topic);
}

const air = ["Nitrogen", "Oxygen", "Argon", "Carbon Dioxide", "Other Gases", "Water Vapour", "Dust Particles" ]
for (const repeat of air) {
   //console.log(repeat);
}

const seven = [2, 97, 997,] 
const prime = seven.map((x) => x*2) 
//console.log(prime);

const arrA = ["Sun", "Moon", "Earth", 365, 24]
//console.log(arrA);

const groceries = ["Egg", "Milk", "Oats"]
groceries.unshift("Bread")
//console.log(groceries);
groceries.push("Cheese")
//console.log(groceries);

const sourceOfLight = ["Stars", "Lightning", "Fire", "LEDs"]
//sourceOfLight.pop()
//console.log(sourceOfLight);
//console.log(sourceOfLight);
sourceOfLight.shift()
//console.log(sourceOfLight);

const myEarbuds = ["Z40 Pro", 1099, ["100hr"]]
//console.log(myEarbuds);
//console.log(myEarbuds.length);

const passwords = [183427, "1244AH", 8825356711, [2, 7, 17]]
//console.log(passwords);
//console.log(passwords.length);

let brothers = ["Ayush", "Rabinder", "Arush", "Pappu"]
//console.log(brothers);
//console.log(brothers.length);
//console.log(brothers.pop());
//console.log(brothers);
//console.log(brothers.shift());

const proteinSource = ["Egg", "Meat", "Whey"]
//console.log(proteinSource[2]);
//console.log(proteinSource);

const basicNeeds = ["Egg", "Milk", "Meat", "Bread"]
//basicNeeds[0] = "Cheese";
//console.log(basicNeeds);

const multiDArr = [1, 3, 5, 7, 9, [2, 4, 6, 8, 0]]
//console.log(multiDArr);
//console.log(multiDArr.length);
//console.log(multiDArr.indexOf(9));
//console.log(multiDArr[5][0]);
//console.log(multiDArr[5][5]);
//console.log(multiDArr[5][4]);

//const MultiArr = ["Earth", "Atmosphere", ["Sun", "Moon", "Stars"]];
//console.log(MultiArr);
//console.log(MultiArr.length);
//MultiArr[0] = "Mars";
//console.log(MultiArr);
//MultiArr [2] [3] = "Mars";
//console.log(MultiArr);

let multiArray = [["Oxygen", "Carbon Dioxide", "Nitrogen"], ["Water", "Petroleum", "Sunlight", "2025"], [8, 64, "X-Y"]];
//console.log(multiArray);
//console.log(multiArray.length);
//console.log(multiArray[2]);
//console.log(multiArray[3]);
//console.log(multiArray[1] [1]);
//console.log(multiArray[2] [3]);

const threeDArray = [
    [
     ["x-axis", "Y-axis", "Z-axis"] , ["quadrants", "positive", "negative", "irrational", "terminating"], [2023, 2024, 2025]
    ],
   [ 
     ["Rook", "Bishop", "Knight", "King", "Queen"], ["Upside", "Downside", "left", "right", "traverse"]
   ]
]
//console.log(threeDArray);
//console.log(threeDArray[0] [1] [0]);

// Create 4x4 matrix with default value
let size = 4;
let chessBoard = Array.from({ length: size }, () => 
  Array.from({ length: size }, () => null)
);
//console.log(chessBoard);

const automobiles = [
    ["Bike", "Truck", "Scorpio", "Car", "Train"],
    ["Petroleum", "Electricity", "Diesel", "CNG", "Hybrid"],
    ["2-wheeler", "3-wheeler", "4-wheeler", "multi-wheeler"]
]
//console.log(automobiles);
//console.log(automobiles [0][4]);
//console.log(automobiles [2][0]);
//console.log(automobiles[2]);
automobiles [0][4] = "Aeroplane";
//console.log(automobiles [0] [4]);

let ticTacToe = [
  [" ", "X", "O"],
  ["O", "X", " "],
  ["X", " ", "O"]
];

function printBoard(board) {
  //console.log("Tic-Tac-Toe Board:");
  for (let i = 0; i < board.length; i++) {
    //console.log(board[i].join(" | "));
    if (i < board.length - 1) {
      //console.log("--+---+--");
    }
  }
}

printBoard(ticTacToe);
//console.log(ticTacToe [2] [1]);

const milkyWay = ["Sun", "Mars", "Moon", "Earth", "Orion Arm", 8, 240]
//console.log(milkyWay.indexOf("Mars"));
//console.log(milkyWay.indexOf(""));
//console.log(milkyWay.indexOf(7));

const integers = [19, 23, 31, 47]
//console.log(integers);
//console.log(integers);
//integers.unshift("Ninety")
//integers.shift();
//console.log(integers);

let apps = ["Youtube", "Instagram", "facebook"]
apps.push("X");
console.log(apps);
apps.pop();
console.log(apps);



























































































































