function checkNumbers(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
  }
  
  const num1 = 30; 
  const num2 = 20;
  const result = checkNumbers(num1, num2);
  
  if (result) {
    console.log("One of the numbers is 50 or their sum is 50.");
  } else {
    console.log("False");
  }
  