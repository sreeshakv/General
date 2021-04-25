const num = 18; //GIVE INPUT NUMBER
var bin, strlen, bi, i, temp=0;
var prev = "";
bin = num.toString(2);
strlen = bin.length; 
var stln =strlen;
bi = parseInt(bin);
if (strlen>5 || num>31) {
  console.log("number is above 31 which is beyond this scope, as also per the chart");
} 
 if (bin == 0) {
  console.log("number is zero");
} 
switch (num) {
  case 1:
    console.log('POP');
    break;
  case 2:
    console.log('DOUBLE RIP');
    break;
  case 4:
    console.log('HIDE YOUR MINTS');
     break;
   case 8:
    console.log('FALL');
    break;
  case 16:
    console.log('num 16 in binary reversed is 00001 so POP')
      
}

var one = 1; //1
var two = 2; //10
var four=4; //100
var eight=8; //1000
var sixteen = 16; //10000

var oe = parseInt(one.toString(2));
var tw = parseInt(two.toString(2));
var ft = parseInt(four.toString(2));
var eig = parseInt(eight.toString(2));
var st = parseInt(sixteen.toString(2));

//console.log(oe); //working
//console.log(typeof oe);

//var op = bi - ft;   //Business Logic: Ex: 5=110,110-100(strlen=3)=10; 110=100+10
//console.log(op); // = working (also,(max 4 iterations possible ))
//console.log(typeof op);
//console.log(strlen);

if ( num!=1 && num!=2 && num!=4 && num!=8 && num!=16 ) {
if (temp!==oe && temp!==tw && temp!==ft && temp!==eig && temp!==st) {
  for (i=0; i<=3; i++) {     //max 4 iterations (calculated from max number possible)
if ( stln == 1 ) {
    temp = bi - oe ;
    console.log(temp);
    stln = temp.length;
    temp = prev + temp; 
    prev = temp + '';
    console.log(temp);
}
if ( stln == 2 ) {
    temp = bi - tw ;         
    console.log(temp);
    stln = temp.length;
    temp = prev + temp; 
    prev = temp + '';
    console.log(temp);
}
    if (stln == 3 ) {
    temp = bi - ft;            //ex 5:110-100=10; 110=100+10
    console.log(temp );
    stln = temp.length;
    temp = prev + temp; 
    prev = temp + '';
    console.log(temp);
    }
    if (stln == 4 ) {
    temp = bi - eig;
    console.log(temp );
    stln = temp.length;
    temp = prev + temp; 
    prev = temp + '';
    console.log(temp);
 }
    if (stln==5  ){
      temp = bi - st;
    console.log(temp );
     stln = temp.length;
    temp = prev + temp; 
    prev = temp + '';
    console.log(temp);
    }
}
}
}
  if (temp== oe ) {
    console.log('POP' + '');
}
  if (temp==tw ) {
    console.log("DOUBLE RIP" + '');
   }
  if (temp==ft ) {
    console.log("HIDE YOUR MINTS" +'');
   }
  if (temp ==eig){
    console.log("FALL"+'');
   }
  if (temp==st){
    function reverseString(bin) {
      var newString = "";
      for (var i = bin.length - 1; i >= 0; i--) {
          newString += bin[i];
      }
      return newString;
  }
  }
