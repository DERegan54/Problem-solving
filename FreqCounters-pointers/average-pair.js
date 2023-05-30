// // add whatever parameters you deem necessary

// PROBLEM:  Write a function called averagePair. Given a sorted array of integers and
// a target average, determine if there is a pair of values in the array where the 
// average of the pair equals the target average. There may be more than one pair that 
// matches the average target.

// CONSTRAINTS: Time Complexity: O(N)
   
// EXAMPLES GIVEN:
// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          The averagePair function should take in a sorted array of integers and a target average.  
//          The function should determine if the average of any two integers in the sorted array are
//          equal to the target average.  It is possible for there to be more than one pair whose 
//          average is equal to the target.
        
//     b.  WHAT ARE THE INPUTS?
//          The inputs are a sorted array of integers and an float representing a target average

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          It sounds like the output should be true/false, however in an interview setting, I'd ask
//          the interviewer if they would like me to return the pairs that average to the target if
//          the output ends up being true.

//     d.  DO I HAVE ENOUGH INFORMATION?
//          Apart from the questions I listed above, I think I do have enough information
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          I would call the input parameters array and target.  
//          I should have a variable called average that will be used when calculating averages to compare
//          Since I will be using the Multiple Pointers pattern, I will need left and right variables, which will
//              begin as the far left index (0) and the far right index(array.length-1)
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          Aside from the examples given above, other examples could be:
//            averagePair([-1, -2, 3, 5, 7, 11], 2.6) // false;
//            averagePair([-3, 7, 11, 22, 39], 23) // true;
//            averagePair([10, 11, 15, 17, 18, 22, 35], 13) // true;
//            averagePair([10, 12, 14, 14, 20, 37], 28.5) // true;
//            averagePair([244, 347, 445, 898], 589) // false;
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  What would need to be true or false in order for the output to be correct? 
//          - If the target average is less than the smallest number, then the output is false.
//          - If the target average is more than the largest number, then the output is false.
//          - If there were fewer than two items in the array, then the output is false.
//          - If the left pointer is greater than the right pointer, then the output is false
//         
//     b. Create a step-by-step plan to solve the problem.
//          Step 1: Check if any of the above conditions are satisfied.  If so, return false
//          Step 2: Define the left and right variables
//          Step 3: Create a while loop where that will run until left is greater than right.      
//          Step 4: Calculate the average of the left and right values and call it average
//          Step 5: Check if average is equal to the target.  If so, return true.
//          Step 6: If not, check if the average is greater than or less than the target.  
//                  If it is greater than the target, add 1 to the left variable.  
//                  If it the average is less than the target, subtract 1 from the right variable.
//          Step 7: If the whole array is exhausted, return false because there are no pairs whose
//                  average matches the target.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?
//      O(N)

//     b. Are there parts of the solution that could be more efficient?
//      I don't think so.

//     c. Are there parts of the solution that could be shorter?
//      Yes, I'm not sure why I did left = left + 1 instead of left ++.

//     d. Consider other approaches to the problem.  Are any of them more efficient?

function averagePair(array, target) {
    if(array.length < 2 || target < array[0] || target > array[array.length-1]) return false;
    let left = array[0];
    let right = array[array.length - 1];
    
    while(left < right) {
        let average = (left + right) / 2 ;
        if(average === target) return true
        if(average < target){
            left = left + 1;
        } else if(average > target) {
            right = right - 1;
        }
    }
    return false;
}

// Springboard's Solution:

/**
 * The function relies on the fact that the array is sorted
 *  to calculate the running average of every two numbers.
 *  It does this by putting one pointer at the start of the
 *  array and one pointer at the end of the array.
 *
 *  At each point, if the average is less than the target num, we have to
 *  move the left pointer up, while the right can stay put. Otherwise if
 *  the average is greater than the sum, we move the right pointer down.
 *
 *  The function ends either when we've found the correct average, or
 *  the pointers have crossed paths (i.e. when the start is greater than the end),
 *  at which point we can conclude there is no truthy answer.
 */


// function averagePair(arr, num) {
//     let start = 0; // left pointer
//     let end = arr.length - 1; // right pointer
  
//     while (start < end) {
//       let avg = (arr[start] + arr[end]) / 2;
//       if (avg === num) {
//         return true;
//       } else if (avg < num) {
//         start++;
//       } else {
//         end--;
//       }
//     }
//     return false;
//   }
  

