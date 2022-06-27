// 33. Given the real numbers x , y . Get;
// a) max(x,y)
// b) min(x,y)

function getMinMax() {
  let x = 12;
  let y = 7;

  const max = Math.max(x, y);

  const min = Math.min(x, y);

  return `Max: ${max} Min: ${min}`;
}

getMinMax();

// 34. Given the real numbers x , y, z . Get;
// a) max(x,y,z)
// b) min(x,y,z)

function getMinMaxXYZ(...arg) {
  return `Max: ${Math.max(...arg)}, Min: ${Math.min(...arg)}`;
}

getMinMaxXYZ((x = 12), (y = 34), (z = 5));

// 35. Given the real numbers x , y, z . Get;
// a) max(x + y + z, xyz)
// b) min^2(x + y + z / 2, xyz) + 1

function sumMaxMin(x, y, z) {
  const min = Math.min(x + y + z / 2, x * y * z) + 1;
  return `Max: ${Math.max(x + y + z, x * y * z)}, Min: ${min * 2}`;
}

sumMaxMin(2, 4, 5);

// 36. Given the real numbers a , b, c . Check
// whether the inequalities are met a < b < c

function checkInequalities(a, b, c) {
  if (a < b && c > b) return true;
  return false;
}

checkInequalities(2, 5, 6);

// 37. Given the real numbers a,b,c . Double these
// numbers if a >= b >= c  and replace them with absolute values if they are not.

function doubleNumbers(a, b, c) {
  if (a >= b && b >= c) return `a: ${a * 2}, b: ${b * 2}, c: ${c * 2}`;

  return `a: ${Math.abs(a)} b: ${Math.abs(b)} c: ${Math.abs(c)}`;
}

doubleNumbers(3, 2, 3);

// 38. Given the real numbers x and y. Calculate x if x > y then z = x - y otherwise z = y - x + 1

function calculateZ(x, y) {
  if (x > y) return (z = x - y);

  return (z = y - x + 1);
}

calculateZ(8, 19);

// 39. Two real numbers are given.
//Print the first number if it is greater than the second, and both numbers if it is not.

function printFirstOrBoth(num1, num2) {
  if (num1 > num2) return num1;

  return `${num1} ${num2}`;
}

printFirstOrBoth(5, 2);

// 40. Two real numbers are given. Replace the first
// number with zero if it is less than or equal to the second, and leave the numbers unchanged otherwise.

function replaceOrUnchanged() {
  let x = 12;
  let y = 14;

  if (x <= y) x = 0;
}

replaceOrUnchanged();

// 41. Three real numbers are given. Select from them those that belong to the interval ( 1, 3).

function selectFromInterval() {
  let numbers = [13, 2, 4];

  return numbers.filter((num) => num > 1 && num < 3);
}

selectFromInterval();

// 42. The real numbers x, y (x !== y) are given.
// The smaller of these two numbers should be replaced by their half-sum, and the larger
// by their doubled product.

function halfSumOrMultiply() {
  let x = 12;
  let y = 32;

  if (x > y) {
    return 2 / (x + y);
  } else if (x < y) {
    return 2 / (x * y);
  }
}

halfSumOrMultiply();

// 43. Three real numbers are given. Square those of them whose values are non-negative.

function squareNumber() {
  let numbers = [2, 3, -12];

  return (numbers = numbers
    .filter((number) => number > 0)
    .map((num) => num * num));
}

squareNumber();

// 44. If the sum of three pairwise distinct real numbers x, y, z is less than one, then replace the smallest of
// these three numbers with the half-sum of the other two; otherwise, replace the smaller of x and y with the half-sum
// of the two remaining values.

function replaceOther(x, y, z) {
  if (x + y + z < 1) {
    if (x < y && x < z) {
      x = (y + z) / 2;
    } else if (y < z && y < x) {
      y = (x + z) / 2;
    } else {
      z = (y + x) / 2;
    }
  } else {
    if (x < y) {
      x = (y + z) / 2;
    } else {
      y = (x + z) / 2;
    }
  }
}

replaceOther(2, 3, 2);

// 45. The real numbers a, b, c, d are given. If a =< b =< c =< d
// then each number is replaced by the largest of
// them; if a > b > c > d, then the numbers are left unchanged;
// otherwise, all numbers are replaced by their squares.

function replaceSquare() {
  // [a,b,c,d]
  let numbers = [1, -2, 3, 4];
  let isMore = 1;
  let isMoreOrUequal = 1;
  let isMoreOrlessOrEqual = false;
  // check if a <= b <= c <= d
  for (let i = 0; i < numbers.length; i++) {
    let next = numbers[i + 1];
    if (numbers[i] <= next) {
      isMoreOrUequal++;
    }
  }

  // if a <= b <= c <= d then replace each number by its largest number
  if (isMoreOrUequal === numbers.length) {
    isMoreOrlessOrEqual = true;
    let maxNum = Math.max(...numbers);
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = maxNum;
    }
    return numbers;
  }
  // check if a > b > c > d
  for (let i = 0; i < numbers.length - 1; i++) {
    let next = numbers[i + 1];
    if (numbers[i] > next) {
      isMore++;
    }
  }
  // if a > b > c > d then numbers should not be changed
  if (isMore === numbers.length) {
    isMoreOrlessOrEqual = true;
    return numbers;
  }

  if (!isMoreOrlessOrEqual) return numbers.map((num) => num * 2);
}

replaceSquare();

// 46. . The real numbers x, y are given. If x and y are negative, then replace each value with its module;
// if only one of them is negative, then both values
// are increased by 0.5; if both values are non-negative and
// none of them belongs to the segment [0.5, 2.0], then both
// values are reduced by 10 times; in other cases, x and y
// are left unchanged.

function changeOrToTen() {
  // [x,y];
  let numbers = [3, 4];

  if (numbers.every((num) => num < 0)) {
    return numbers.map((num) => Math.abs(num));
  } else if (numbers.some((num) => num < 0)) {
    return numbers.map((num) => num * 0.5);
  } else if (numbers.every((num) => num > 0 && !(num > 0.5 && num < 2.0))) {
    return numbers.map((num) => num * 10);
  } else {
    return numbers;
  }
}

changeOrToTen();

// 47. Given the real positive numbers x, y, z.
// a) Find out if there is a triangle with
// side lengths x, y, z. 
// If a triangle exists, then the answer is whether it is acute—angled.

function isTriangle(x,y,z){
   if(x + y <= z || x + z <= y || y + z <= x) return 'Triangle exists'

   return 'No Triangle'
}

isTriangle()