// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.
function printUpTo(x){
    for(var i=1; i<=x;i++)
        console.log(i); // your code here
        if(x<0)
            console.log("negative number");
            return false;
        }
printUpTo(10); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false



function printSum(x){
    var sum = 0;
    for(i=1; i<x ;i++)
      console.log(i);
        sum = sum+i;
        console.log("Sum so far", sum);
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum=sum+x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6