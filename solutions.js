
// .1. Two real numbers a and b are given. Get their sum, difference and product.

function findSumSubMul(a,b){
    const sum = a + b
    const sub = a - b
    const mul = a * b
    return `Sum ${a} and ${b} is  ${sum}: 
Substraction ${a} and ${b} is ${sub}: 
Multiplication ${a} and ${b} is ${mul}`
}

findSumSubMul(10, 2)

// 2. The real numbers x and y are given. Receive |x| - |y| / 1 + |xy|
                                      
function findModule(x,y){
    const substract = Math.abs(x) - Math.abs(y);
    const multiply = (1 + Math.abs(x * y));
    return substract / multiply
}

findModule(10,2)

// 3. The length of the edge of the cube is given. Find the volume of the cube and the area of its side surface. V = a^3 S = 4a^2

function findCube(x) {
    const volume = Math.pow(x, 3);
    const sideSurface = 4 * (x * x);
    return `Volume is:${volume} and Side surface is:${sideSurface}` 
}

findCube(2)

// 4. Two real positive numbers are given. Find the arithmetic mean and geometric mean of these numbers.

function findArithmeticAndGeometricMeans(){
    const numbers = [4, 8];

    let arithmetic = 0;

    let geometric = 1;

    for(let i = 0; i < numbers.length; i++){
        arithmetic = arithmetic + numbers[i] / numbers.length

        geometric = geometric * numbers[i]
    }

    geometric = Math.pow(geometric, 1 / numbers.length).toFixed(2);
  
    return  `Arithmetic means of ${numbers.join(' ')} is: ${arithmetic} and geometric means of ${numbers.join(' ')} is: ${geometric}`
}

findArithmeticAndGeometricMeans()

// 5. Two real numbers are given. Find the arithmetic mean of these numbers and the geometric mean of their modules.

function findAritmetciAndModuleMeans(){
    const numbers = [5,6];
    
    let arithmetic = 0

    let modulus = 1;
    for(let i = 0 ; i < numbers.length; i++){
        arithmetic = arithmetic + numbers[i] / numbers.length
        
        modulus = modulus * numbers[i]
    }

    modulus = Math.pow(modulus, 1 / numbers.length).toFixed(2) // So we will get 5.4 this is the |5.48| then will be 5.48

    return `Arithmetic means of ${numbers.join(' ')} is: ${arithmetic} and modulus of geometric means ${numbers.join(' ')} is: ${modulus}`
}

findAritmetciAndModuleMeans()

// 6. The cathets of a right triangle are given. Find its hypotenuse and area. c = root(a^2 + b^2); A = h * b / 2

function findhypotenuseAndAreaOfTriangle() {
     let h = 3;
     let b = 4;

     const hypotenuse = Math.sqrt(Math.pow(h, 2) + Math.pow(b, 2))
     
     const area = (h * b) / 2
  
    return `The hypotenuse of triangle is ${hypotenuse} and area is ${area}`
}

findhypotenuseAndAreaOfTriangle()

// 7. Mixed v1 liters of water temperature ^ with v2 liters of water temperature t2. Find the volume and temperature of the resulting mixture. 
// V = V1 + V2; T = (t1^v1 + t2^v2) / v

function findTemperatureAndVolume(){
    let v1 = 12;
    let v2 = 8;

    let t1 = 23;
    let t2 = 13;

    const V = v1 + v2;
    const T = (t1 * v1 + t2 * v2) / V;
    return `Volume ${V} and Temperature ${T}`
}

findTemperatureAndVolume()

// 8. Determine the perimeter of a regular n-angle described around a circle of radius R. P = R * n;

function findPerimetrAngle(){
    const n = 6;
    const r = 4;
    
    return r * n
}

findPerimetrAngle()

// 9. Three resistances R1 R2 R3 are connected in parallel. Find the connection resistance. 
// R = (R1 * R2 * R3) / R1 * R2 + R2 * R3 + R3 * R1

function findConnectionResistance(){
    let r1 = 126;
    let r2 = 632;
    let r3 = 194;
    const R = (r1 * r2 * r3) / (r1 * r2 + r2 * r3 + r3 * r1);

    return `Connection resistance is ${Math.round(R)}`
}

findConnectionResistance()

// 10. Determine the time of the fall of a stone to the surface of the earth from a height; (2*h m)/(9.8 m/s^2) =1.02 s^2.
/* 
The calculator uses the standard formula from Newtonian physics to figure out how long before the falling object goes splat:
The force of gravity, g = 9.8 m/s2

Gravity accelerates you at 9.8 meters per second per second. After one second, you're falling 9.8 m/s. After two seconds, you're falling 19.6 m/s, and so on.
Time to splat: sqrt ( 2 * height / 9.8 )

It's the square root because you fall faster the longer you fall.

The more interesting question is why it's times two: If you accelerate for 1 second, your average speed over that time is increased by only 9.8 / 2 m/s.
Velocity at splat time: sqrt( 2 * g * height )

This is why falling from a higher height hurts more.

Energy at splat time: 1/2 * mass * velocity2 = mass * g * height 
*/

function determineFallingStoneTime() {
   let height = 10 // m
   let g = 9.8 // m/s
   
   const timeFalling = Math.sqrt(2 * height / g)
   return `The falling time of stone from ${height} m is ${timeFalling.toFixed(2)} m/s`
}

determineFallingStoneTime()

// 11. Given x , y , z . Calculate a,b if: 
// SEE TASKS 11 FROM:  ABRAMOV TASK FOR PROGRAMMING https://ideafix.name/wp-content/uploads/stuff/book95.pdf


function calculateGivenNumbers(){
  let x = 8;
  let y = 9;
  let z = 6;
  let e = 2.23423213;

  const a1 = 3 + Math.pow(e, y -1) / 1 + Math.pow(x, 2) * Math.abs(y - Math.sin(z) / Math.cos(z));
  
  const b1 = 1 + Math.abs(y -x) + (y  - Math.pow(x, 2)) / 2 + Math.abs(y - Math.pow(x ,3)) / 3 ;
  
  const a2 = 2 * Math.cos(x - 3.14 / 6) / (1 / 2 + Math.pow(Math.sin(y), 2))
  
  const b2 = 1 + Math.pow(z, 2) / (3 + Math.pow(z, 2) / 5);
}

calculateGivenNumbers()

// 12. The side of an equilateral triangle is given. Find the area of this triangle.

function findAreaOfTriangle() {
    const a = 12;
    
    const s = (Math.pow(a, 2) * Math.sqrt(3)) / 4
   
    return `The area of triangle is: ${s}`
}

findAreaOfTriangle()

// 13. Calculate the period of oscillation of the pendulum length 
// We can solve this by using the formula T = 2П * root of L / g;    where П = 3.14 , g = 9.8 m/s ;  L = given length ;
function calculateOscillation() {
    const L = 21;

    const T = 2 * 3.14 * Math.sqrt(L / 9.8);

    return `The period of oscillation is ${T.toFixed(2)}`
}

calculateOscillation()

// 14. Determine the force of attraction F between the bodies of mass m1 and m2, located at a distance of r from each other.  
// According to Newton's law of gravitation F = G * m1 * m2 / R^;
// G  6.674×10-11 N·m²/kg².

function findForceOfAttraction(){
    const G =  6.67 * Math.pow(10, -11)
    const m1 = 300;
    const m2 = 20;

    const r = 100;

    const F = G * (m1 * m2 / Math.pow(r, 2));

    return `The force of gravitation is ${F * Math.pow(10, -11)}`
 }

findForceOfAttraction();

// 15. The hypotenuse and the cathet of a right triangle are given. Find the second cathet and the radius of the inscribed circle.
// find second cathet with b = root c^ - a^
// find radius with R = root(a^ + b^) / 2
function findSecondCathet() {
    const hypotenuse = 5;
    
    const cathet1 = 4

    const cathet2 = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(cathet1, 2))

    const R = Math.sqrt(Math.pow(cathet2, 2) + Math.pow(cathet1 , 2)) / 2;
   
    return `The second cathet is: ${cathet2} and the R is : ${R}`
}

findSecondCathet()

// 16. The circumference is known. Find the area of the circle bounded by this circle
// S = L^ / (4 * п)

function findCircle(){
    const L = 18.84
    
    const circle = Math.pow(L, 2) / (4 * 3.14);

    return `The circle is: ${circle}`
}

findCircle()

// 17. Find the area of the ring, the inner radius (r) of which is 20, and the outer one is a given number R (R > 20).
// S = п * (R^ - r^)

function findAreaRing(){
    const pi = 3.14
    const r = 14;
    const R = 20;

   const areaRing = pi * (Math.pow(R, 2) - Math.pow(r, 2))

   return `The are of ring is ${areaRing.toFixed(2)}`
}

findAreaRing()

// 18. A triangle is defined by the values of its angles and the radius of the circumscribed circle. Find the sides of the triangle.
// a = 2R*sinA b = 2R*sinB c = 2R*sinC
function findSidesOfTriangle() {
  let R = 20;
  let a = 21;
  let b = 12;
  let c = 9;
  const A = 2 * R * Math.sin(a);
  const B = 2 * R * Math.sin(b);
  const C = 2 * R * Math.sin(c);

  return `The side of triangle is: A ${A} B ${B} C ${C}`
}

findSidesOfTriangle()

// 19. Determine the time after which two bodies will meet, moving equally towards each other, 
// if their initial velocities, accelerations and the initial distance between them are known.
// V = v1 + v2 
// t = distance : V
function findTimeMeeting() {
  let v1 = 3 // m/h
  let v2 = 3 // m/h
  let d = 20 // miles
  const V = v1 + v2

  const T = d / V;

  return `They will meet each other after ${T.toFixed(1)} h`
 }

findTimeMeeting()

// 20. Find the sum of the terms of the arithmetic progression  
// a , a + d, ... , a + (n - 1)d  according to the given values a, d, n

function findSum() {
    let arr = [1,2,3,4,5,6,7]

    let arrs = []; 
    let last = 1;
    for(let i = 0; i < arr.length; i++){
        let lastnum = arr.length - last++
        let sumthem = arr[i] + lastnum;
        arrs.push({first: arr[i], last: lastnum, result: sumthem, shoudBe: arr.length})
    }
   
    
    return arrs
}

findSum()


function sigma() {
    let index = 0;
    
    let n = 10;
    
    let a = 1;
  
    let result = 0;
    let d = 3;

    while(index < n){
        let sum =  a + index * d
        result = result + sum
        index++
    }
  
   return result
}
  
  sigma()

  // 21. Given the real numbers c, d. Calculate  where x1  is the larger and x2 is the smaller roots of the equation x^2
  // First of all ,  We need to find D (/_\) discriminant  D = b^ - 4ac
  // D > 0 there are two root solutions  x1, x2 = -b +- root(D) / 2a
  // D = 0 there only one solution  x = - (b / 2a) 
  // D < 0 there is no root solutions 


  function findDiscriminant() {
    let x1, x2;
    let c = 5;
    let d = 4;

    const D = Math.pow(3, 2) - 4 * Math.abs(c * d);

    if(D < 0) return 'There is no root solution'

    x1 = 9 + Math.sqrt(D) / 2;
    x2 = 9 - Math.sqrt(D) / 2;
   
    const a = Math.abs(Math.pow( Math.sin(Math.abs(c * Math.pow( x1,3) + d * Math.pow(x2, 2) - c * d)),3)/ Math.sqrt(Math.pow(c * Math.pow(x1, 3) + d * x2 * x2 - x1, 2) + 3.14))
    
    return a + Math.tan(c * Math.pow(x1, 3) + d * Math.pow(x2, 2) - x1)
  }


  findDiscriminant()

  // 22. Find the area of an isosceles trapezoid with bases a and B and an angle a with a larger base a
  // A = (a + b / 2) * h ;

  function findAreaTrapecia() {
      let aBase, bBase, alpha, height,  area;
      
      aBase = 7;
      bBase = 4;
      alpha = 10;
      height = 2 * ((Math.sin(alpha))) / ((Math.cos(alpha))) 
      
      return area = ((aBase + bBase) / 2) * height
  }

  findAreaTrapecia()

// 23. The triangle is defined by the lengths of the sides. To find:
// a) height lengths;
// b) lengths of medians;
// c) bisector lengths;
// d) the R of the inscribed and circumscribed circles.

function findTriangle() {
    let a, b, c;
    a = 8; 
    b = 9;
    c = 13;

    const p = 1 / 2 * (a + b + c);

    const height = (2 * Math.sqrt(p * (p - a) * (p - b) * (p - c))) / a
    
    const median = Math.sqrt((2 * Math.pow(a, 2) + 2 * Math.pow(b, 2) - Math.pow(c, 2)) / 4)
  
    const bisector = Math.sqrt(a * b * (a + b + c) * (a + b -c)) / a + b
    
    const poluperimetr = (a + b + c) / 2;
     
    // R = abc / 4 root(p) * (p - a) * (p - b) * (p - c)
    const R = a * b * c / 4 * Math.sqrt(poluperimetr) * (poluperimetr - a) * (poluperimetr - b) * (poluperimetr - c)
}

findTriangle()

// 24. Calculate the distance between two points with coordinates x1, y1 and x2, y2.
// √(x2 — x1)2 + (y2 — y1)2

function calculateDistanceCoordinates() {
    let x1, x2, y1, y2;
    x1 = 5;
    x2 = 8;
    y1 = 2;
    y2 = 6;

    return Math.sqrt(x2 - x1) * 2 + (y2 - y1) * 2
}

calculateDistanceCoordinates()

// 25. A triangle is defined by the coordinates of its vertices . find : Perimetr and area of triangle 
// s = ((x2 - x1)^2+(y2-y1)^2)^(1/2)
function findPerimetrArea() {
  let x1, x2, y2, y1, s;
  x1 = 5;
  x2 = 8;
  y1 = 2;
  y2 = 6;

  return s = Math.sqrt((x2 - x1) * 2 + (y2 - y1), 1 / 2)
}

findPerimetrArea()

// 26. Find the area of a sector whose radius is 13.7, and the arc contains a given number of radians.
// S=r*r*φ/2
function findAreaSector() {
    const r = 13.7;
    const radian = 57.2;
    let s;
    return s = r * r * radian / 2 
}

findAreaSector()

// 27. The real positive numbers a, b, c are given. 
//On three sides with lengths a, b, c, you can build a triangle. Find the angles of the triangle.
// Use Law of Cosines / solving SSS Triangles  source: https://www.mathsisfun.com/algebra/trig-solving-sss-triangles.html
// cos(A) = b^2 + c^2 − a^2 / 2bc , cos(B) = c^2 + a^2 − b^2 / 2ca , cos(C) = a^2 + b^2 − c^2 / 2ab
function findAngleTriangle() {
  let a,b,c;
  a = 8;
  b = 6;
  c = 7;

   const A = Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c))

   const B = Math.acos((Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(b, 2)) / (2 * c * a))

   // convert to degree
   
   const degreeA = A * (180 / Math.PI)
   const degreeB = B * (180 / Math.PI)
   
   const C = (180 - degreeA - degreeB).toFixed(1)
   
}

findAngleTriangle();

// 28. Given a real number x . 
// Without using any other arithmetic operations other than multiplication, addition and subtraction, 
// calculate 2x^4 - 3x^3 + 4x^2 - 5x + 6. It is allowed to use no more than four multiplications and four additions and subtractions.

function calculateWithLimitOperators() {
    let x = 8;
    return 2 * Math.sqrt(x, 4) - 3 * Math.sqrt(x, 3) + 4 * Math.sqrt(x, 2) - 5 * x + 6;
}

calculateWithLimitOperators();

// 29. The real numbers x, y are given . Without using any operations other than multiplication, addition and subtraction, calculate
// 3х^2у^2 — 2ху^2 — 7х^2у — 4у^2 + 15ху + 2x^3 — Зх + 10y + 6;

function calculateLimit() {
     let x = 7;
     let y = 3;
     let powX = Math.pow(x, 2);
     let powY = Math.pow(x, 2);

     return 3 * powX * powY - 7 * powX * y - 4 * powY + 15 * x * y + 2 * Math.pow(x, 3) - 3 * x + 10 * y + 6
}

calculateLimit()

// 30.The real numbers x is given . Without using any operations other than multiplication, addition and subtraction, calculate
// 1 - 2x + 3x^2 - 4x^3 and 1 + 2x + 3x^2 + 4x^3

function calculateBoth(){
    let x = 4;
    let powOfx = x * x;
    let cubeX = x * x * x;
     
    let first = 1 - 2 * x + 3 * powOfx - 4 * cubeX;
    let second = 1 + 2 * x + 3 * powOfx + 4 * cubeX;
}

calculateBoth()

// 31. The real number a is given. Without using any other arithmetic operations other than multiplication, get:
// a) a^4 for two operations; .
// b) a^6 for three operations;
// c) a^7 for four operations;
// d) a^8 for three operations;

function getWithLimitedOperations(){
    let a = 4;
    let resultA = 8 * (a * 8);
    
    let b = a
    b = 16 * 16 * 16;
    
    let c = a;
    c = b * a
    
    let d = c * a
}

getWithLimitedOperations();