Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

 function returnNumbers(x){
    nums = [];
      for(var i=1;i < x; i++){
           nums.push(i);
      }
    return nums;
          // your code here
   }
   y = returnNumbers(256);
   console.log(y); // should log [1,3,5,...,253,255]


   Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

   function sumEvenNumbers(x){
    sum = 0;
    for(var i=1;i <= x; i++){
      if(i % 2 == 0){
        sum = sum + i;  
        }
    }
    return sum;
  }
  y=sumEvenNumbers(1000);
  console.log(y);
  
  Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
  function sumOddNumbers(x){
    sum = 0;
    for(var i=1;i <= x; i++){
      if(i % 2 == 1){
        sum = sum + i;  
        }
    }
    return sum;
  }
  y=sumOddNumbers(5000);
  console.log(y);

  Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

  function sumArray(x){
    sum = 0;
    for(var i=0;i <x.length; i++){
        sum = sum + x[i];  
    }
    return sum;
  }
  y=sumArray([2,4,6,8,10]);
  console.log(y);


  Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

  function sumArray(x){
    max = x[0];
    for(var i=0;i <x.length; i++){
        if(x[i] > max){
          max = x[i]; 
        }
    }
    return max;
  }
  y=sumArray([2,4,6,8,10]);
  console.log(y);


  Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

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

 Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

 function returnOddArray(x){
    odds = [];
      for(var i=0;i < x; i++){
        if(i % 2 == 1){
           odds.push(i);
        } 
      }
    return odds;
   }
 y = returnOddArray(50);
 console.log(y); 

 Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

 function greaterthanY(x, y){
    results = 0;
    for(var i=0;i <x.length; i++){
        if(x[i] > y){
          results++; 
        }
    }
    return results;
  }
  z=greaterthanY([2,4,6,8,10], 6);
  console.log(z);

  Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

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

  Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

  function negativeArray(x){
    constant =0;
    for(var i=0;i <x.length; i++){
        if(x[i] < 0){
          x[i] = constant; 
        }
    }
    return x;
  }
  y=negativeArray([2,4,-6,-8,10]);
  console.log(y);

  Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

  function negativeArray(x){
    constant ="Dojo";
    for(var i=0;i <x.length; i++){
        if(x[i] < 0){
          x[i] = constant; 
        }
    }
    return x;
  }
  y=negativeArray([2,4,-6,-8,10]);
  console.log(y);
