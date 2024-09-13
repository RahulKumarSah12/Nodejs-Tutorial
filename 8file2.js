// Difference between Sync and ASync

const fs = require("fs");

// console.log("Rahul1");

// const result = fs.readFileSync("./myfile/1test.txt", "utf-8");      // Sync -> Blocking
// console.log(result);

// console.log("Rohit1");


// --------------------------------------------


// console.log("Rahul2");

// fs.readFile("./myfile/2test.txt", "utf-8", (err,res)=>{         // ASync -> Non-Blocking
//     console.log(res);
// });     

// console.log("Rohit2");


const os = require("os");
console.log(os.cpus().length);