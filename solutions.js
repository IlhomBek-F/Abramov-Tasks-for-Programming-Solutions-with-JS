
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