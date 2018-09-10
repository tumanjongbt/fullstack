var x= [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}

// set i= 0
// i = 0+1
// console.log = 1
// evaluate i is < 5, so set i= 1+1
// i= 2
// i = 2 + 1
// console.log = 3
// evaluate i is < 5, so set i= 2+1
// i = 3 + 1
// console.log = 5
// i is not < 5, exit

//Prediction:1,3,5 
//Actual: 1,3,5   