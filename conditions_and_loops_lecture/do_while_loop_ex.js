//given a number x and return the sum of digits of the x
let x = 5213;
let y = 0;
while(x > 0 ){
   y = y + x%10;
   x = Math.floor(x/10);

}
console.log(y)