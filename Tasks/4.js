function circle(radius){
    const area = Math.PI * Math.pow(radius , 2);
    const circumference = 2 * Math.PI * radius ;
    return {area , circumference};
}

var CR = prompt("Enter Circle Radius");

const circleinfo = circle(CR);
console.log("Circle area = " + circleinfo.area);
console.log("Circle Circumference = " + circleinfo.circumference);
