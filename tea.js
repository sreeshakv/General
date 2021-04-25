const n=5, k=1,  g=3, b=2; //GIVE INPUTS
if (n<0||k<0||g<0||b<0) {
    console.log('enter positive numbers');
}
var count =1;
var i=1;
var dif = n-k;
if (dif==0) {
    while (i<=n) {
    console.log(n+'tea');
    }
}
if (g+b !== n &&k==1) {
    console.log('invalid input');
}  if(g==0||b==0) {
    console.log('both tea cannot be zero');
}  if (k>n) {
    console.log('k cannot be greater than n');
}
if (k==1) {
    while (i<=n) {
       if (count%2==0) {
            for (var count=1; count<=k; count++) {
                console.log('black');
                i = i+1;
                count++;
            }
        } else {
            for (var count=1; count<=k; count++) {
            console.log('green');
            i = i+1;
            }
        }
    }
}
if (g+b == n &&k>1) {  
    for (var a =1; a<=k; a++) { 
           console.log('green');
    }
    for(var l=1;l<=dif;l++) {
        console.log('black');
    }
}