function firstA(isGreater) {
return isGreater > 119
}
const digits = [119, 118, 120, 77, 777]
const greaterDigits = digits.filter(firstA);
//console.log(greaterDigits);

function lesser(isLesser) {
    return isLesser < 0
}
const negativeIntegers = [88, -17, -49, 0]
const lesserIntegers = negativeIntegers.filter(lesser);
//console.log(lesserIntegers);

let fewVariables = ["x", "y", "z", "l", "m", "n"]
for (let specificVariables of fewVariables) {
//console.log(specificVariables);
}

function exponent(triple) {
    return triple * 3
}
const magnitudes = [9, 2.5, 10, 7.5, 4]
const threeX = magnitudes.map(exponent);
//console.log(threeX);

const northEast = "ArunachalPradesh,Nagaland,Mizoram,Tripura,Assam,Meghalaya,Manipur,Sikkim";
const getNorthEast = northEast.split(",");
//console.log(getNorthEast);
//console.log(getNorthEast.length);
//console.log(getNorthEast[1]);
//console.log[getNorthEast.length-1];

const comma = getNorthEast.join(",");
//console.log(comma);
const dot = getNorthEast.join(".")
//console.log(dot);

const known = ["sunlight", "electricity", "magnet"]
console.log(known.toString());
console.log(typeof known);















 
 

 
































































































































