function drawTriangle(lines) {
    for (let i = 1; i <= lines; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += "*";
      }
      console.log(line);
    }
  }
  
  const NoLines = 5;
  drawTriangle(NoLines);