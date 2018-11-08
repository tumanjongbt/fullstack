Given an array and a value Y, count and print the number of array values greater than Y.

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

Given an array, print the max, min and average values for that array.

function sumArray(x){
    var max = x[0];
    var min = x[0];
    var sum = x[0];
    for(var i=0;i <x.length; i++){
        sum += x[i];
        if(x[i] > max){
          max = x[i]; 
        }else if(x[i] < min) {
            min = x[i];
        } 
    }
    console.log('Maximum: ', max, "Minimum: ", min, "Average: ", (sum/x.length));
  }
  y=sumArray([2,4,6,8,10]);


Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

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


Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

































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