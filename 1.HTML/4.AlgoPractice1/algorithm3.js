var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

// set i = 0
// i = 0+3
// console.log = 3
// evaluate i is < 5, so set i = 3+1
// set i = 4
// i = 4 + 3
// console.log = 7
// evaluate i is not < 5, exit

//Prediction:3,5 
//Actual: 1,3,5 