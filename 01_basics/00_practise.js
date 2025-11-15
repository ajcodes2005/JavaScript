let nonTrivial = new Date();
//console.log(nonTrivial);

let moment  = new Date();
//console.log(moment);

let begining = new Date(0);
//console.log(begining);
//console.log(begining.getTime());


/* let normal = new Date(2025-11-13)
console.log(normal); */
let start = new Date(2006, 9, 19, 21, 23, 0)
//console.log(start);

let myDob = new Date("2006-11-30T08:09:04");
/* console.log( myDob.getFullYear());
console.log(myDob.getMonth());
console.log(myDob.getTimezoneOffset());
console.log(myDob.getDay());
console.log(myDob.getSeconds()); */

let now = new Date();
//console.log(now);
//console.log(now.toString());
//console.log(now.setFullYear(2049));
//console.log(now.toString());
//console.log(now.setMonth(9));
//console.log(now.toString());
//console.log(now.setDate(35));
//console.log(now.toString());

let epoch = new Date(0);
//console.log(epoch);

let myDOB = new Date(2006, 9, 19, 11, 44, 32)
//console.log(myDOB);

let myYear = new Date("2020-12-15T12:59:00");
/* console.log(myYear.getFullYear());
console.log(myYear.getMonth());
console.log(myYear.getDay());
console.log(myYear.getTime()); */

let get = new Date();
//console.log(get);
//console.log(get.getUTCHours());
//console.log(get.getUTCDay());
//console.log(get.getTime());

let dateA = new Date(2025, 0, 17);
let dateB = new Date(2025, 0, 2);
if (dateB > dateA) {
   // console.log("dateB is older than dateA");
    
}

if (dateA > dateB) {
    // console.log("dateA is older than DateA");
}

if (dateB.getTime() > dateA.getTime()) {
   // console.log("dateA is 15 days ago than dateB");
}

let date1st = new Date(1970 , 0, 1);
let date2nd = new Date(2025 , 10 , 15);
let diffInDate = date2nd.getTime() - date1st.getTime();
//console.log(diffInDate);
let millisecond = new Date();
//console.log(millisecond.getTime());

let DateC = new Date(2025, 10, 15);
let DateD = new Date(2025, 10, 14);

let diffInMillis = DateC.getTime() - DateD.getTime();
//console.log(diffInMillis);

let vvii = new Date();
console.log(vvii.toLocaleDateString());
console.log(vvii.toLocaleTimeString());

let xi = new Date();
let collection = {
    datestyle: 'full',
    timestyle: "long",
    timeZone: "America/New_York"
} ;
console.log(xi);


let professionalWay = new Intl.DateTimeFormat('en-US')
console.log(professionalWay.format(Date));




























































































