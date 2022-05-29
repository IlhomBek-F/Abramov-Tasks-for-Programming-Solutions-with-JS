// 33. Given the real numbers x , y . Get;
// a) max(x,y)
// b) min(x,y)

function getMinMax() {
    let x = 12;
    let y = 7;

    const max = Math.max(x, y)

    const min = Math.min(x, y)
 
    return `Max: ${max} Min: ${min}`
}

getMinMax()

// 34. Given the real numbers x , y, z . Get;
// a) max(x,y,z)
// b) min(x,y,z)

function getMinMaxXYZ(...arg){
    return `Max: ${Math.max(...arg)}, Min: ${Math.min(...arg)}`
}

getMinMaxXYZ(x = 12, y = 34,z = 5);

// 35. Given the real numbers x , y, z . Get;
// a) max(x + y + z, xyz)
// b) min^2(x + y + z / 2, xyz) + 1

function sumMaxMin(x,y,z){
   const min = Math.min(x + y + z / 2, x * y * z) + 1
   return `Max: ${Math.max(x + y + z, x * y * z)}, Min: ${min * 2}`
}

sumMaxMin(2,4,5)

// 36. Given the real numbers a , b, c . Check
// whether the inequalities are met a < b < c

function checkInequalities(a,b,c) {
   if(a < b && c > b) return true
   return false
}

checkInequalities(2,5,6)

// 37. Given the real numbers a,b,c . Double these
// numbers if a >= b >= c  and replace them with absolute values if they are not.

function doubleNumbers(a,b,c){
    if(a >= b && b >= c) return `a: ${a * 2}, b: ${b * 2}, c: ${c * 2}`;
    
    return `a: ${Math.abs(a)} b: ${Math.abs(b)} c: ${Math.abs(c)}`;
}

doubleNumbers(3,2,3);

// 38. Given the real numbers x and y. Calculate x if x > y then z = x - y otherwise z = y - x + 1

function calculateZ(x,y){
    if(x > y) return z = x - y

    return z = y - x + 1
}

calculateZ(8,19);

// 39. Two real numbers are given. 
//Print the first number if it is greater than the second, and both numbers if it is not.

function printFirstOrBoth(num1, num2){
  if(num1 > num2) return num1

  return `${num1} ${num2}`
}

printFirstOrBoth(5,2);

// 40. Two real numbers are given. Replace the first
// number with zero if it is less than or equal to the second, and leave the numbers unchanged otherwise.

function replaceOrUnchanged(){
    let x = 12;
    let y = 14;

    if(x <= y) x = 0 

}

replaceOrUnchanged();

// 41. Three real numbers are given. Select from them those that belong to the interval ( 1, 3).

function selectFromInterval() {
    let numbers = [13,2,4];

    return numbers.filter((num) => num > 1 && num < 3)
}

selectFromInterval();