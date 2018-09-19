
1) Analyze an array’s values and return the average of its values.

function printAverage(x){
    sum = 0;
    for(var ind=0;ind < x.length; ind++){
      sum += x[ind];
    }
   return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5;

 2) Create an array with all the odd integers between 1 and 255 (inclusive)

 function returnOddArray(x){
    odds = [];
      for(var i=0;i < x; i++){
        if(i % 2 == 1){
           odds.push(i);
        } 
      }
    return odds;
          // your code here
   }
   y = returnOddArray(256);
   console.log(y); // should log [1,3,5,...,253,255]

   3) Square each value in a given array, returning that same array with changed values.

 function squareValue(x){
    sqvalue=[];
        for(var ind=0;ind < x.length; ind++){
          sqvalue.push(x[ind] * x[ind]);
        }
     return sqvalue;
  }
  y = squareValue([1,2,3]);
  console.log(y); // should log [1,4,9]
    
  y = squareValue([2,5,8]);
  console.log(y); // should log [4,25,64]
  
  