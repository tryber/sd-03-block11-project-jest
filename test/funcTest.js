let fact = function fac(a) {return a < 2 ? 1 : a * fac(a - 1)};

console.log(fact(4));