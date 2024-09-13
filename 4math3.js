function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function func1(num){
    let num1 = 45;
    function func2(){
        let num2 = 67;
        return {num1,num2,num};
    }
    return func2();
}

module.exports = {               // Multiple Function export using object
    add,
    sub,
    func3 : func1
}                                        
