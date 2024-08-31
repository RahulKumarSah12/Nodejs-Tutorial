const fs = require("fs");

fs.writeFileSync("./myfile/1test.txt","Hello World");

fs.writeFile("./myfile/2test.txt","Hello Earth", (err)=>{console.log("Error: ",err)});

// --------------------------------------------

const result = fs.readFileSync("./myfile/1test.txt", "utf-8" );
console.log(result);

fs.readFile("./myfile/2test.txt", "utf-8",(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})

// -----------------------------------------------

fs.appendFileSync("./myfile/1test.txt", `\nRahul`);

fs.appendFile("./myfile/2test.txt", `\nRahul`,(err)=>{err});

// -----------------------------------------------

const stat = fs.statSync("./myfile/1test.txt");
console.log(stat);

fs.stat("./myfile/1test.txt",(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})

