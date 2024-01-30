function isPowerOfTwo(n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(16)); //true
console.log(isPowerOfTwo(3)); //false
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(5)); //false
