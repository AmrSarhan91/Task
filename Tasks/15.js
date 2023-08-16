function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero";
  }
}
    const num1 = prompt("Enter the First number");
    const num2 = prompt("Enter the Second number");
    const MathOp = prompt("Enter the Math Operation (+ , - , * , /)");


      let result;

      switch (MathOp) {
        case "+":
          result = add(num1, num2);
          break;
        case "-":
          result = subtract(num1, num2);
          break;
        case "*":
          result = multiply(num1, num2);
          break;
        case "/":
          result = divide(num1, num2);
          break;
        default:
          result = "Invalid operation";
      }

      console.log(result);