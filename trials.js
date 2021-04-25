const num = 12; // GIVE INPUT NUMBER
let x = num
let i=0;
if (num==1) {
    console.log('1');
}
if (num==0) {
    console.log('zero');
}
while (x!=1) {
if (x%2==0) {
    x = x/2;
    i = i+1;
} else {
    x = (3*x)+1;
    i = i+1;
}
}
console.log(i);