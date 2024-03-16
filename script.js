function getPow(number,power) {
  if (power === 0) {
  return 1;
  }
  return number * getPow(number, power - 1);
  }
  
  console.log(getPow(3,3))