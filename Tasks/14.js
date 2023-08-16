function fact(number){
    if (number == 1 ){
        return 1;
    }
    else{
        let result = number * fact(number - 1);
        return result;
    }
}
console.log("Factorial of a Number: " +fact(5));