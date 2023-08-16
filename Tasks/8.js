function Largest(num1 , num2 , num3){
    if (num1 >= num2 && num1 >= num3) {
        return "The largest number is: " + num1;
    }
    else if (num2 >= num1 && num2 >= num3){
        return "The largest number is: " + num2;
    }
    else{
        return "The largest number is: " + num3;
    }
}

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var num3 = prompt("Enter third number");

const largest = Largest(num1 , num2 , num3);
console.log(largest);
