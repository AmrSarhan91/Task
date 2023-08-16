function check(number)
{
    if(number<0){
        console.log("The number is not positive");
    }
    else if(number % 8 == 0){
        console.log("The number is a multiple of 8");
    }
    else if(number % 5 == 0){
        console.log("The number is a multiple of 5");
    }
    else{
        console.log("The nmuber is not either multiple of 5 or 8");
    }
}
var num = prompt("Enter a postive number");
check(num);
