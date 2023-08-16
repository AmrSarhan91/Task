function check(number) {
    if(number % 2 == 0 ){
        return "Even"
    }else {
        return "Odd"
    }
}
var number = prompt("please enter the number you want to check")

console.log(check(number));


