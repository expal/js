

let a = -1;
let b = 5;

if ((a && b) >= 0)  {
    console.log(a - b);
}
else if ((a && b) < 0) {
    console.log(a * b)
}
else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    x = a + b
    console.log(x)
}