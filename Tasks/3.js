function reverseString(str){
    var r = "";
    for (let i = str.length - 1; i >= 0  ; i--) {
        r +=str[i];
}
console.log("Reversed String :" + r);
}

const STR = "welcome";
console.log("Original String : " + STR);
const rSTR = reverseString(STR);

