const fs = require("fs");

// fs.writeFileSync("./myfile/1test.txt","Hello Guys");                // Blocking Request (Sync)

// fs.writeFile("./myfile/2test.txt","Hello Earth", function error(err){       // Non Blocking Request (Async)
//     console.log("Error",err);
// });

// --------------------------------------------

// console.log("Start")

// const result = fs.readFileSync("./myfile/1test.txt", "utf-8" );      // Sync - Blocking
// console.log(result);

// console.log("End");



// console.log("Rohit");

// fs.readFile("./myfile/1test.txt", "utf-8", (error,result)=>{             // Async - Non Blocking
//     console.log(result);
// })

// console.log("Rahul");



// -----------------------------------------------

// fs.appendFileSync("./myfile/1test.txt", `\n${new Date().getDate().toString()}`);
// fs.appendFileSync('./myfile/1test.txt', `\n${Date.now()}`)

// fs.appendFile("./myfile/2test.txt", `\nRahul`,(err)=>{console.log(err)});

// -----------------------------------------------

// const stat = fs.statSync("./myfile/1test.txt");
// console.log(stat);

fs.stat("./myfile/1test.txt",(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})

