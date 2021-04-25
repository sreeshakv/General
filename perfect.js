const num = 6; //GIVE INPUT NUMBER
let i, k=0;
let a = [];
console.log("factors are ")
for (i=1;i<num; i++) {
    if (num%i==0) {
        console.log(i);
        k = k+i;
    }
}
if (k==num) {
    console.log(num + " is number is perfect");
} else if (k>num) {
    console.log(num +" number is abundant");
} else {
    console.log(num +" number is deficient");
}