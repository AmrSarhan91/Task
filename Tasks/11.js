function PosOrNeg (number){
    if(number > 0){
        console.log("The number is Positive");
    }
    else if(number < 0){
        console.log('The Number is Negative');
    }
    else{
        console.log("The number is 0");
    }
}

var num = prompt("Enter a number");
PosOrNeg(num);