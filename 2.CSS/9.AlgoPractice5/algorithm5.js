Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

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
  console.log(y)


Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function shiftleft(x){
    for(var i=0;i<x.length; i++){
      x[i]=x[i+1];
    }
    x[x.length-1]=0;
    return x;
  }
  y=shiftleft([2,4,6]);
  console.log(y);


Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].




Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].