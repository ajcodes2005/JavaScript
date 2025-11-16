let myDate = new Date;
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toTimeString());

// console.log(temporal.now.instant());

let myBirthDate = new Date(2006, 9, 19, 14, 59);
//console.log(myBirthDate);
//console.log(myBirthDate.toLocaleString());

let canonEvent = new Date(2025, 8, 1, 14, 30);
console.log(canonEvent.toDateString());

let timeStamp = Date.now();
console.log(Math.floor(timeStamp/1000));

myDate.toLocaleString("default",
 {
 weekday:"long"
 } )



