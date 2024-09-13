console.log("Hello World");

function add(a,b){
    return a + b;
}

console.log(add(5,11));


function solve(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(solve(61));


function func1(){
    let num1 = 24;
    function func2(){
        let num2 = 56;
        function func3(){
            let num3 = 67;
            return {num1,num2,num3};
        }

        return func3;
    }
    return func2;
}

console.log(func1()()());