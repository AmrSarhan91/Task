function Sum(num1, num2){
    let sum =0;
    for(let i = num1 ; i <= num2 ; i++){
        sum += i ;
    }
    return sum;
}
const n1 = 1;
const n2 = 10;

const result = Sum(n1,n2);
console.log(result);