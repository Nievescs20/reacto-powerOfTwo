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

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(5));
