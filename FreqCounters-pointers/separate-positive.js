// // add whatever parameters you deem necessary

// PROBLEM: Write a function called separatePositive which accepts an array of non-zero integers. 
//          Separate the positive integers to the left and the negative integers to the right. 
//          The positive numbers and negative numbers need not be in sorted order. The problem should 
//          be done in place (in other words, do not build a copy of the input array).

// CONSTRAINTS: Time Complexity: O(N)
   
// EXAMPLES GIVEN: 
//      separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
//      separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
//      separatePositive([-5, 5]) // [5, -5]
//      separatePositive([1, 2, 3]) // [1, 2, 3]

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Re-order the items in an array such that the negative numbers are all to the left of the 
//          positive numbers.  This should be done without creating a new array 
        
//     b.  WHAT ARE THE INPUTS?
//          An array of non-zero integers

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The output should be the input array with the items re-ordered

//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          The input array could simply be called array.  Also, there should be two pointers called
//          left and right, and a variable called temp, but don't set it equal anything yet 
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          separatePositives([8, 5, -1, 3, -2]) // [-2, -1, 8, 5, 3]
//          separatePositives([ -1, -4, -7]) // [-1, -4, -7]
//          separatePositives([2, 9, 10, 8]) // [2,9,10,8]
//          separatePositives([22, -22]) // [-22, 22]
//          separatePositives([]) // []
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//              If there are ONLY positive or ONlY negatives in the input array, simply return the 
//              input array
//              If the input array is empty, return the input array
       
//     b. Create a step-by-step plan to solve the problem.
//            Step 1: If the input array is empty, return the input array
//            Step 2: Create two pointers called left and right and define left as array[0], and right
//              as array[array.length-1].
//            Step 3: Create a while-loop.  While right > left...
//            Step 4: If both right and left are less than 0  OR if just right is less than zero, then set 
//                  temp equal to left and right equal to left, and then set right equal to temp
//            Step 5: If both right and left are greater than zero, then add one to left and subtract one 
//                  from right.
//            Step 6: If ONLY left is less than zero, then subtract one from right 
//            Step 7: return array


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
//      Yes.  See Springboard's solution.

//     d. Consider other approaches to the problem.  Are any of them more efficient?
//      I think you could solve this with array.sort() or nested loops, but neither would be more efficient.

function separatePositive(arr) {
    if (arr === []) return arr;
    let left = 0;
    let right = arr.length-1;
    let temp;
    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            temp = arr[left]
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right --;
        } else if (arr[left] > 0) {
            left ++;
        } else {
            right --;
        }
    }
    return arr;
}


// Springboard's solution:

// function separatePositive(nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     while (start < end) {
//       if (nums[start] < 0 && nums[end] > 0) {         
//         [nums[start], nums[end]] = [nums[end], nums[start]];
//         start += 1;
//         end -= 1;
//       } else {
//         if (nums[start] > 0) start += 1;
//         else end -= 1;
//       }
//     }
//     return nums;
//   }
  