Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function positiveArray(x){
    constant ="big";
    for(var i=0;i <x.length; i++){
        if(x[i] > 0){
          x[i] = constant; 
        }
    }
    return x;
  }
  y=positiveArray([2,4,-6,-8,10]);
  console.log(y);


Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(x){
    var max = x[0];
    var min = x[0];
    for(var i=0;i <x.length; i++){
        if(x[i] > max){
          max = x[i]; 
        }else if(x[i] < min) {
            min = x[i];
        } 
    }
    console.log("Lowest Value: " + min);
    return max;
  }
  y=lowHigh([2,4,6,8,10]);
  console.log("Highest Value: " + y);


Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function printOneRtnAnother(arr){
    console.log(arr[arr.length-2]);
    for(var i = 0; i< arr.length; i++){
        if (arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
console.log(printOneRtnAnother([0,1,2,3,4,5,6]));

Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleValue(x){
    double=[];
        for(var ind=0;ind < x.length; ind++){
          double.push(x[ind] + x[ind]);
        }
     return double;
  }
  y = doubleValue([1,2,3]);
  console.log(y); // should log [2,4,6]


Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var counter = 0;
    for(var i=0; i< arr.length; i++){
        if(arr[i]>0){
            counter++;
        }
    }
    arr[arr.length-1] = counter;
    return arr;
}
console.log(countPositives([-1,1,1,1]));


Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function evenAndodds(arr){
    var odds = 0;
    var evens = 0;
    for (var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 1){
            odds++;
            evens = 0;
        } else{
            evens++;
            odds = 0;
        }
        if(odds == 3){
            console.log("That's odd!");
            odds = 0;
        }else if(evens == 3){
            console.log("Even more so!");
            evens = 0;
        }
    }
}


Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function incrementSeconds(arr){
    for(var i=1; i<arr.length; i+=2){
        arr[i]=arr[i] + 1;
    }
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6,7,8,9]));


Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(arr){ 
    for(var i=0; i<arr.length/2; i++) { 
        temp = arr[arr.length-i-1]; 
        arr[arr.length-i-1] = arr[i]; 
        arr[i] = temp; 
    } 
    return arr; 
} 
b = reverseArray([1,2,3]); 
console.log('b is', b); 


