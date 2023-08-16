function checkPositiveNegative(num1, num2) {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
  }
  
  const num1 = 10; 
  const num2 = -5; 
  const result = checkPositiveNegative(num1, num2);
  
  if (result) {
    console.log("One number is positive and the other is negative.");
  } else {
    console.log("False");
  }
  